"use server"
import { NextResponse } from "next/server";
import connectDB from "@/helper/connectDB";
import Payment from "@/models/paymentschema";

export const GET = async (req) => {
    try {
        await connectDB()
        let x = await Payment.find({ done: true })
        console.log(x)
        return NextResponse.json(x)
    } catch (error) {
        console.log("Error in get request: ", error)
        return NextResponse.json({ "error": "Fetching all donated payment failed!" })
    }
} 