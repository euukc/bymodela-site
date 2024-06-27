import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <section className="w-full h-[80px] flex flex-col md:flex-row md:justify-around justify-center items-center">
            <div className="text-[36px]">
                <Link href='/'>By <span className="text-[#7042ccff]">Modela</span></Link>
            </div>
            <div className="flex justify-center items-center gap-2">
                <Image src="/instagram-logo.png" width={20} height={15} alt="Instagram Logo" className='cursor-pointer' />
                <Image src="/whatsapp-header.png" width={20} height={15} alt="WhatsApp Logo" className='cursor-pointer' />                
            </div>
        </section>
    )
}