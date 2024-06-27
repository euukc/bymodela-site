"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

export default function Nav() {
    const [tooltipText, setTooltipText] = useState(null);

    const handleMouseEnter = (text) => {
        setTooltipText(text);
    };

    const handleMouseLeave = () => {
        setTooltipText(null);
    };

    return (
        <nav className='navbar flex flex-col items-center justify-between gap-y-10 px-4 py-6 md:py-8 mt-[80px] bg-white/10 backdrop-blue-sm text-3xl xl:text-xl rounded-full md:my-[20px] md:mr-[20px] fixed left-[28px] md:left-[1830px] md:right-0 top-[80%] md:top-[35%]'>
            <Link href="/" onMouseEnter={() => handleMouseEnter('Home')} onMouseLeave={handleMouseLeave}>
                <div className="relative cursor-pointer">
                    <Image src="/btn-home.png" width={23} height={15} alt="Ícone Página Inicial" />
                    {tooltipText === 'Home' && (
                        <div className="absolute left-[-350%] top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-sm text-xs">
                            Home
                        </div>
                    )}
                </div>
            </Link>
            <Link href="/sobre" onMouseEnter={() => handleMouseEnter('Sobre')} onMouseLeave={handleMouseLeave}>
                <div className="relative cursor-pointer">
                    <Image src="/about.png" width={25} height={15} alt="Ícone Sobre" />
                    {tooltipText === 'Sobre' && (
                        <div className="absolute left-[-320%] top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-sm text-xs">
                            Sobre
                        </div>
                    )}
                </div>
            </Link>
            <Link href="/catalogo" onMouseEnter={() => handleMouseEnter('Catálogo')} onMouseLeave={handleMouseLeave}>
                <div className="relative cursor-pointer">
                    <Image src="/product-catalog.png" width={25} height={15} alt="Ícone do Catálogo" />
                    {tooltipText === 'Catálogo' && (
                        <div className="absolute left-[-400%] top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-sm text-xs">
                            Catálogo
                        </div>
                    )}
                </div>
            </Link>
            <div onMouseEnter={() => handleMouseEnter('WhatsApp')} onMouseLeave={handleMouseLeave}>
                <Image src="/whatsapp.png" width={20} height={15} alt="Ícone de Contato" className="cursor-pointer" />
                {tooltipText === 'WhatsApp' && (
                    <div className="absolute left-[-102%] top-[85%] transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-sm text-xs">
                        Contato
                    </div>
                )}
            </div>
        </nav>
    );
}