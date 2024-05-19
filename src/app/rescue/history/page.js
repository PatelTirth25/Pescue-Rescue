"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const page = () => {
    const [data, setdata] = useState([])
    const { data: session } = useSession()
    
    async function load() {
        if(session){
            const email=await session.user.email
            let dmg = []
            let x = await fetch("/api/rescue", {
                method: "GET"
            })
            let d = await x.json()
            d.forEach(element => {
                if(element.email===email){
                    dmg.push(element)
                }
            });
            setdata(dmg)
        }
    }

    useEffect(() => {

        load()

    }, [])
    return (
        <div>
            {data.length>0 && (<div className='font-semibold md:text-5xl text-2xl my-8 text-red-400 flex items-center justify-center gap-4'>
                Thank You for saving Animals <span><img src="/applause.gif" alt="" className='w-20'/></span>
            </div>)}
            {data.length==0 && (<div className='font-semibold text-5xl my-8 text-red-400 flex items-center justify-center gap-4'>
                NO Records <span><img src="/thumb-down.gif" alt="" className='w-20'/></span>
            </div>)}
            <div className='flex flex-wrap gap-10 mx-5'>

                {data.map(item => {
                    return (
                        <div key={item.image} className="bg-gray-800 p-4 rounded-lg shadow-md mb-4 max-w-[40%]">
                            <div className="text-white font-semibold mb-2 text-wrap max-w-[99%] break-words"><span className='underline text-blue-400'>Location</span> : {item.location}</div>
                            <div className="max-w-[99%]mx-auto mb-2">
                                <Image src={item.image} width={400} height={500} className="rounded-lg" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default page
