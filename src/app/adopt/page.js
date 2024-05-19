import React from 'react'
import Image from 'next/image'
import adoptImg from "../../../public/adoptImg.jpg"
import Adoptclient from './adoptclient'

const page = () => {
  return (
    <div>
      <div className='w-[30%] mx-auto my-7 min-w-80'>
        <Image src={adoptImg} alt='' className="rounded-lg object-contain " />
      </div>
      <Adoptclient/>
    </div>
  )
}

export default page
