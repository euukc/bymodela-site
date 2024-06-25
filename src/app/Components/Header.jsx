import React from "react"
import Image from "next/image"

export default function Header() {
    return (
        <section className="w-full h-[80px] flex flex-col md:flex-row md:justify-around justify-center items-center">
            <div className="text-[36px]">
                By <span className="text-[#7042ccff]">Modela</span>
            </div>
            <div className="flex justify-center items-center gap-2">
                <Image src="/instagram-logo.png" width={20} height={15} alt="Instagram Logo" />
                <Image src="/icons8-whatsapp-50.png" width={20} height={15} alt="WhatsApp Logo" />                
            </div>

        </section>
    )
}