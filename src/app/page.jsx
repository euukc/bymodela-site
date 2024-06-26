"use client"

import Image from "next/image";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">      
      <HomePage />     
      
    </main>
  );
}
