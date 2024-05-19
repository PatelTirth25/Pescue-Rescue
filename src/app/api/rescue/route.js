import { NextResponse } from "next/server";
import connectDB from "@/helper/connectDB";
import Rescue from "@/models/rescueschema";

export const POST = async (res)=>{
    try{
        let data=await res.json()
        await connectDB()
        let c=new Rescue({
            location: data.location,
            image: data.image,
            email: data.email
        })
        await c.save()
        return NextResponse.json({success: true, message: "Submitted Successfully!"})
    }
    catch(error){
        console.log("Error in POST request: ",error)
        return NextResponse.json({success: false, message: "Error in your request!"})
    }
}

export const GET =async ()=>{
    try{
        await connectDB()
        let x=await Rescue.find({})
        return NextResponse.json(x)
    }
    catch(error){
        console.log("Error in GET request: ",error)
        return NextResponse.json({success: false, message: "Error in fetching!"})
    }
}