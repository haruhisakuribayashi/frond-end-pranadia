'use client';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

function AppBarRegister({ menu, section, step, length }: { menu: string, section: string, step: number, length: number  }) {
    const router = useRouter();
    return (
        <nav className='sticky top-0 bg-[#D41F13] z-10 px-5 py-5 border-b text-white flex justify-between items-center w-full'>
            <button onClick={() => router.back()} className='flex items-center gap-3'>
                <FaArrowLeft size={18} />
                <div className='flex flex-col items-start'>
                    <h1 className='font-medium text-sm'>{ menu }</h1>
                    <p className='text-xs font-normal'>{ section }</p>
                </div>
            </button>
            <div className='font-bold text-sm'>
                <span>{ step }</span>
                <span className='opacity-75'>/</span>
                <span className='opacity-75'>{ length }</span>
            </div>
        </nav>
    )
}

export default AppBarRegister