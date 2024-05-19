"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Page = () => {
  const [paymentData, setPaymentData] = useState([])

  async function load() {
    let response = await fetch("/api/allpayment", {
      method: "GET"
    })
    let data = await response.json()
    console.log(data)
    for(let i=0;i<data.length;i++){
      let maxi = i;
      for(let j=i+1;j<data.length;j++){
        if(data[j].amount > data[maxi].amount){
          maxi = j;
        }
      }
      if(maxi!=i){
        let t=data[i]
        data[i]=data[maxi]
        data[maxi]=t
      }
    }
    setPaymentData(data)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="min-h-screen text-white p-5">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold mb-5">Special Thanks</h1>
        <p className="text-xl">To all those who contributed to save animals</p>
      </div>
      <div className='my-10 flex flex-col items-center'>
        {paymentData.map(item => (
          <div key={item._id} className='flex items-center my-7 justify-between bg-gray-800 rounded-lg py-5 px-8 w-full max-w-2xl shadow-lg'>
            <div className='flex items-center gap-4'>
              <div>
                <Image src="/heart.gif" width={50} height={50} alt="Heart animation" />
              </div>
              <div>
                <p className="text-lg font-semibold">Name: {item.name}</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div>
                <Image src="/coins.gif" width={50} height={50} alt="Coins animation" />
              </div>
              <div>
                <p className="text-lg font-semibold">Donated: ₹{item.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
