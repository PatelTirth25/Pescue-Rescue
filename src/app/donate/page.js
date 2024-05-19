"use client"
import React from 'react'
import Script from 'next/script'
import { initiate } from '@/helper/paymentserver'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import donateimg from '../../../public/donateImg.jpg'


const page = () => {
    const { data: session } = useSession()
    const router = useRouter()

    if (!session) {
        router.replace("/signin")
    }

    const pay = async (amount) => {

        let x = await initiate(amount, session.user.name)
        let oid = x.id
        let options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_ID, // Enter the Key ID generated from the Dashboard
            "amount": toString(amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Pes-Res", //your business name
            "order_id": oid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:3000/api/razorpay",
        }
        let rzp1 = await new Razorpay(options);
        await rzp1.open();

    }
    async function handleSubmit(e) {
        e.preventDefault()
        let amount = e.target.amt.value * 100
        await pay(amount)
    }
    return (
        <div>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            <div className='w-[30%] mx-auto my-7 min-w-80'>
                <Image src={donateimg} alt='' className="rounded-lg object-contain "/>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg m-5">
                <h2 className="text-3xl font-bold text-white mb-4 text-center">Payment Form</h2>
                <form onSubmit={handleSubmit} >
                    <div className="mb-10">
                        <label htmlFor="amt" className="block text-white font-medium">Amount (INR)</label>
                        <input
                            id="amt"
                            name="amt"
                            type="number"
                            className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                            placeholder="Enter amount in INR"
                            required
                        />
                    </div>
                    <div className='text-center'>

                        <button type="submit" className="text-white bg-gradient-to-br w-[50%] from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default page
