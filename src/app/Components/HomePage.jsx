import React from 'react';
import Image from 'next/image';


export default function HomePage() {
  
  return (
    <section className='presentation w-full h-[800px] flex flex-col md:flex-row justify-between items-center mt-[100px] md:mt-0'>
      <div className='description w-[50%] flex flex-col justify-center items-center'>
        <h1 className='text-[32px] md:text-[50px] text-[#7042ccff] w-full'>BY MODELA</h1>
        <h1 className='text-[20px] md:text-[50px] w-full'>Modelagem para Impressão 3D</h1>
        <p className='text-[16px] w-full'>Trazemos suas ideias para o mundo real, com precisão e perfeição.</p>
      </div>
      <div className="image-bg">
        <div className='mt-[50px] md:mt-[245px]'>
          <Image src="/teste1.png" width={700} height={600} alt="Blonder woman with glasses" />
        </div>
      </div>
      <aside className='navbar flex w-[300px] md:w-[70px] md:flex-col items-center justify-between gap-y-10 px-4 py-6 md:py-8 bg-white/10 backdrop-blue-sm text-3xl xl:text-xl rounded-full my-[20px] md:mr-[20px]'>
        <Image src="/btn-home.png" width={23} height={15} alt="Instagram Logo" className='cursor-pointer' />
        <Image src="/about.png" width={25} height={15} alt="Instagram Logo" className='cursor-pointer' />
        <Image src="/product-catalog.png" width={25} height={15} alt="Instagram Logo" className='cursor-pointer ' />
        <Image src="/whatsapp.png" width={20} height={15} alt="Instagram Logo" className='cursor-pointer' />        
      </aside>

    </section>
  );
}