import Image from "next/image"
import Link from "next/link"

export default function Nav() {
    return (
        <nav className='navbar flex w-[300px] md:w-[70px] md:flex-col items-center justify-between gap-y-10 px-4 py-6 md:py-8 bg-white/10 backdrop-blue-sm text-3xl xl:text-xl rounded-full my-[20px] md:mr-[20px] fixed left-[28px] md:left-[1830px] md:right-0 top-[90%] md:top-[35%]'>
            <Link href="/">
                <Image src="/btn-home.png" width={23} height={15} alt="Instagram Logo" className='cursor-pointer' />
            </Link>
            <Link href="/sobre">
                <Image src="/about.png" width={25} height={15} alt="Instagram Logo" className='cursor-pointer' />
            </Link>
            <Image src="/product-catalog.png" width={25} height={15} alt="Instagram Logo" className='cursor-pointer ' />
            <Image src="/whatsapp.png" width={20} height={15} alt="Instagram Logo" className='cursor-pointer' />
        </nav>
    )
}