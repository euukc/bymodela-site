import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <section className="w-full h-[80px] flex flex-col md:flex-row md:justify-center md:gap-[400px] justify-center items-center">
            <div className="text-[36px]">
                <Link href='/'>By <span className="text-[#7042ccff]">Modela</span></Link>
            </div>
            <div className="flex gap-2 items-center">
                <Link href="https://www.instagram.com/bymodela" target="_blank">
                    <Image src="/instagram-logo.png" width={25} height={15} alt="Instagram Logo" className='cursor-pointer'/>
                </Link>
                <Image src="/whatsapp-header.png" width={25 } height={15} alt="WhatsApp Logo" className='cursor-pointer'/>                  
            </div>
        </section>
    )
}