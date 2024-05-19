"use client"
// components/AdoptionForm.js

import React, { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const AdoptionForm = () => {
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
      if(!session){
        router.replace("/signin")
      }
    }, [])

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        adoptionDate: '',
        city: '',
        animalType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newdata = {
            ...formData, email: session.user.email
        }

        let x = await fetch("/api/adopt", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newdata)
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

        setFormData({
            name: '',
            mobile: '',
            adoptionDate: '',
            city: '',
            animalType: ''
        });
    };

    return (
        <div className="bg-gray-900 p-4 my-5 mx-auto rounded-lg shadow-md w-[98vw]">
            <ToastContainer />
            <h2 className="md:text-4xl text-center text-2xl font-semibold md:font-bold mb-14 text-violet-200 flex gap-5 justify-around ">Animal Adoption Form <div><button type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium px-10 rounded-lg text-sm md:px-20 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"><Link href="adopt/history">Check Your Past Adoption</Link></button></div></h2>
            <form onSubmit={handleSubmit}>
                <div className='md:flex md:gap-16'>
                    <div className="mb-14 md:w-2/5 md:flex md:gap-20">
                        <label htmlFor="name" className="block text-white mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-14 md:w-2/5 md:flex md:gap-7">
                        <label htmlFor="mobile" className="block text-white mb-2">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className='md:flex md:gap-16'>
                    <div className="mb-14 md:flex md:w-2/5 md:gap-7">
                        <label htmlFor="adoptionDate" className="block text-white mb-2">
                            Date of Adoption
                        </label>
                        <input
                            type="date"
                            id="adoptionDate"
                            name="adoptionDate"
                            value={formData.adoptionDate}
                            onChange={handleChange}
                            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-14 md:w-2/5 md:flex md:gap-24">
                        <label htmlFor="city" className="block text-white mb-2">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter your city"
                            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className="mb-14 flex gap-10">
                    <label htmlFor="animalType" className="block text-white mb-2 w-32">
                        Animal Type
                    </label>
                    <select
                        id="animalType"
                        name="animalType"
                        value={formData.animalType}
                        onChange={handleChange}
                        className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option value="">Select Animal Type</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        {/* Add more options for other animal types */}
                    </select>
                </div>
                <button type="submit" className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Submit</button>
            </form>
        </div>
    );
};

export default AdoptionForm;

