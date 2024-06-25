import React from 'react';
import Image from 'next/image';


export default function HomePage() {
  
  return (
    <section className='w-full h-[800px] presentation flex justify-between items-center'>
      <div className='description w-[50%] flex flex-col justify-center items-center'>
        <h1 className='text-[50px] text-[#7042ccff]'>BY MODELA</h1>
        <h1 className='text-[50px]'>Modelagem para Impressão 3D</h1>
        <p className='text-[16px]'>Trazemos suas ideias para o mundo real, com precisão e perfeição.</p>
      </div>
      <div className="image-bg ">
        <div className='mt-[245px]'>
          <Image src="/teste1.png" width={700} height={600} alt="Blonder woman with glasses" />
        </div>
      </div>
      <aside className='navbar flex w-[70px] flex-col items-center justify-between gap-y-10 px-4 py-8 bg-white/10 backdrop-blue-sm text-3xl xl:text-xl xl:rounded-full mr-[20px]'>
        <Image src="/btn-home.png" width={23} height={15} alt="Instagram Logo" className='cursor-pointer' />
        <Image src="/about.png" width={25} height={15} alt="Instagram Logo" className='cursor-pointer' />
        <Image src="/product-catalog.png" width={25} height={15} alt="Instagram Logo" className='cursor-pointer ' />
        <Image src="/whatsapp.png" width={20} height={15} alt="Instagram Logo" className='cursor-pointer' />        
      </aside>

    </section>
  );
}