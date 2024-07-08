"use client"
import React, { useEffect } from 'react'
import Image from 'next/legacy/image'
import Pranadia from "@/assets/landing.png";
import { useRouter } from 'next/navigation';

function Landing() {
  const router = useRouter();

  useEffect(() => {
  
    const timeout:ReturnType<typeof setTimeout> = setTimeout(() => { 
      router.push('/login');
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='flex justify-center items-center h-[100%] relative overflow-hidden'>
      <div className="absolute w-[600px] h-[600px] rounded-full bg-white" style={{
        "boxShadow": "0px 8.02px 80.18px 0px rgba(98, 98, 98, 0.1)"
      }}></div>
      <div className="absolute w-[500px] h-[500px] shadow-2xl shadow-[#626262] rounded-full bg-white" style={{
        "boxShadow": "0px 8.02px 80.18px 0px rgba(98, 98, 98, 0.1)"
      }}></div>
      <div className="absolute w-[400px] h-[400px] shadow-2xl shadow-[#626262] rounded-full bg-white" style={{
        "boxShadow": "0px 8.02px 80.18px 0px rgba(98, 98, 98, 0.1)"
      }}></div>
      <Image src={Pranadia} objectFit='cover' />
    </div>
  )
}

export default Landing