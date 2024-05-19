import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="h-36 mt-10 bg-black text-white flex flex-col justify-center items-center space-y-2">
            <div className="text-sm">
            © 2024 Pescue-Rescue NGO. All rights reserved.
            </div>
            <div>
                <Link href="/ourdonators" className="text-blue-400 hover:text-blue-500 hover:underline">
                    Our Donators
                </Link>
            </div>
        </div>

    )
}

export default Footer
