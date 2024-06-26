import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function HomePage() {
  
  return (
    <section className='presentation w-[90%] md:h-[873px] flex flex-col md:flex-row justify-around xl:justify-center items-center mt-[100px] md:mt-0 overflow-y-hidden'>
      <div data-aos="fade-right" className='description w-full xl:w-[50%] flex flex-col justify-center items-center text-center'>
        <h1 className='text-[32px] md:text-[60px] text-[#7042ccff]'>BY MODELA</h1>
        <h1 className='text-[20px] md:text-[55px]'>Modelagens para Impressão 3D</h1>
        <p className='text-[16px] md:text-[20px]'>Trazemos suas ideias para o mundo real, com precisão e perfeição.</p>
      </div>
      <div data-aos="fade-up" className="image-bg">
        <div className='mt-[50px] xl:mt-[175px]'>
          <Image src="/teste1.png" width={700} height={600} alt="Blonder woman with glasses"/>
        </div>
      </div>      
    </section>
  );
}