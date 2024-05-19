import React from 'react'
import AnimalRescueForm from './rescueclient'
import Image from 'next/image'
import rescueImg from "../../../public/rescueImg.jpg"

const page = () => {
  return (
    <div>
      <div className='w-[30%] mx-auto my-7 min-w-80'>
        <Image src={rescueImg} alt='' className="rounded-lg object-contain " />
      </div>
      <AnimalRescueForm />
    </div>
  )
}

export default page
