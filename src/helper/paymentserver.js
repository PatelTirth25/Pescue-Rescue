"use server"
import Razorpay from "razorpay"
import Payment from "@/models/paymentschema"
import connectDB from "./connectDB"


export const initiate = async (amount,name) => {
    await connectDB()
    let instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID, key_secret: process.env.RAZORPAY_SECRET })

    let details=await instance.orders.create({
        amount: Number.parseInt(amount),
        currency: "INR",
    })

    let c= new Payment({
        name: name,
        amount: Number.parseInt(amount)/100,
        oid: details.id
    })
    await c.save()

    return details
}