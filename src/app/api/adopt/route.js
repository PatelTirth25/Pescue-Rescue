import { NextResponse } from "next/server";
import connectDB from "@/helper/connectDB";
import Adopt from "@/models/adoptschema";

export const POST = async (res)=>{
    try{
        let data=await res.json()
        await connectDB()
        let c=new Adopt({
            name: data.name,
            phone: data.mobile,
            date: data.adoptionDate,
            city: data.city,
            animal:data.animalType,
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
        let x=await Adopt.find({})
        return NextResponse.json(x)
    }
    catch(error){
        console.log("Error in GET request: ",error)
        return NextResponse.json({success: false, message: "Error in fetching!"})
    }
}