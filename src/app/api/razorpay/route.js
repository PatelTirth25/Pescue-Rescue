"use server"
import connectDB from "@/helper/connectDB";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/paymentschema";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    let findone = await Payment.findOne({ oid: body.get("razorpay_order_id") })
    if (!findone) {
        return NextResponse.redirect("http://localhost:3000/paymenterror")
    }
    else {

        let x = validatePaymentVerification({
            "order_id": body.get("razorpay_order_id"),
            "payment_id": body.get("razorpay_payment_id")
        },
            body.get("razorpay_signature"),

            process.env.RAZORPAY_SECRET
        );
        console.log("Before x is verified!")

        if (x) {
            console.log("After x is verified!")
            await Payment.findOneAndUpdate({oid: body.get("razorpay_order_id")},{done:true})
            return NextResponse.redirect("http://localhost:3000/")
        }
        else {
            return NextResponse.error("Validification failed!")
        }

    }
}