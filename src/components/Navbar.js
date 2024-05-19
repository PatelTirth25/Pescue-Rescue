"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session} = useSession()
  return (
    <div className='flex justify-between bg-[rgba(58,5,80,0.36)] font-sans font-semibold text-lg py-4 px-3 items-center'>
      <div className='hover:text-white text-rose-400 text-2xl'>
      <Link href="/" className='gap-1 flex items-center'>
      <img src="/homepage.gif" className='md:w-20 w-10' alt="" /></Link></div>
      <ul className='list-none flex gap-7'>
        <li className='hover:text-orange-200 text-orange-500 text-[17px] md:text-2xl'><Link href="/rescue" >Rescue</Link></li>
        <li className='hover:text-blue-500 text-[17px] md:text-2xl'><Link href="/adopt"  >Adopt</Link></li>
        <li className='hover:text-green-200 text-green-500 text-[17px] md:text-2xl'><Link href="/donate" >Donate</Link></li>
      </ul>

      <ul className='list-none flex gap-5 items-center'>
        {!session && (<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-light md:text-sm  text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white  focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative md:px-5 px-2 py-1 md:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <Link href="/signin" >Sign IN</Link>
          </span>
        </button>)}

        {session && (<button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-xs font-light md:text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative md:px-5 px-2 py-1 md:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <span onClick={()=>signOut()}>Sign OUT</span>
          </span>
        </button>)}
        
      </ul>
    </div>
  )
}

export default Navbar
