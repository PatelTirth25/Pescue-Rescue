"use client"

import { React, useState } from 'react';
import Image from 'next/image';
import tick from "../../../public/tick.svg"
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imageToBase64 from '@/helper/toBase64';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const AnimalRescueForm = () => {
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
      if(!session){
        router.replace("/signin")
      }
    }, [])

    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null);



    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];

        try {
            // Convert image file to base64 string
            const base64String = await imageToBase64(file);
            setImage(base64String);
        } catch (error) {
            console.error('Error converting image to base64:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (location == '') {
            toast.error("Location is required!", {
                autoClose: 1500,
                style: {
                    backgroundColor: 'black', // Set background color of the toast
                    color: 'white', // Set text color (if needed)
                },
                position: "bottom-right"
            })

        }
        else if (image == null) {
            toast.error("Image is required!", {
                autoClose: 1500,
                style: {
                    backgroundColor: 'black', // Set background color of the toast
                    color: 'white', // Set text color (if needed)
                },
                position: "bottom-right"
            })
        }
        else {
            const data = {
                location: location,
                image: image,
                email: session.user.email
            }
            let x = await fetch("/api/rescue", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            let res = await x.json()
            if (res.success) {
                toast.success(res.message, {
                    autoClose: 1500,
                    style: {
                        backgroundColor: 'black', // Set background color of the toast
                        color: 'white', // Set text color (if needed)
                    },
                    position: "bottom-left"
                })
            }
            else {
                toast.error(res.message, {
                    autoClose: 1500,
                    style: {
                        backgroundColor: 'black', // Set background color of the toast
                        color: 'white', // Set text color (if needed)
                    },
                    position: "bottom-left"
                })
            }

            setLocation('');
            setImage(null);
        }

    };

    return (
        <div className="bg-gray-900 p-8 rounded-lg shadow-md my-7 mx-4">
            <ToastContainer />
            <div className='flex justify-around gap-4'>

                <h2 className="md:text-4xl text-center text-2xl font-semibold md:font-bold mb-4 text-violet-200">Animal Rescue Form</h2>

                <div>
                    <button type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm md:px-20 py-2.5 px-3 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"><Link href="rescue/history">Check Your Rescue History</Link></button>

                </div>
            </div>
            <form onSubmit={handleSubmit}>
                {/* Location Input */}
                <div className="mb-4">
                    <label htmlFor="location" className="block text-white text-lg font-medium mb-2">Location:</label>
                    <textarea
                        type="text"
                        id="location"
                        name="location"
                        value={location}
                        onChange={handleLocationChange}
                        placeholder="Enter location"
                        rows={3}
                        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none resize-none"
                    />
                </div>

                {/* Image Upload */}
                <div className="mb-6 flex items-center gap-5">
                    <label htmlFor="image" className="py-2.5 px-5 me-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Select Image of Animal
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="bg-gray-800 text-white hidden"
                    />
                    {image && (<Image src={tick} className='invert' width={40} height={40} />)}
                </div>

                {/* Submit Button */}

                <button type="submit" className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Submit</button>

            </form>


        </div>
    );
};

export default AnimalRescueForm;

