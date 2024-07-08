'use client';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoNotifications } from 'react-icons/io5';

function AppBarBack({ menu, notif }: { menu: string, notif?: boolean }) {
    const router = useRouter();
    return (
        <nav className='sticky top-0 bg-white z-10 px-5 py-5 border-b flex justify-between items-center'>
            <button onClick={() => router.back()} className='flex items-center gap-2'>
                <FaArrowLeft size={18} />
                <h1 className='font-medium text-base'>{ menu }</h1>
            </button>

            {
                notif && (
                    <Link href={'/notifikasi'}>
                        <IoNotifications className='text-[#D41F13]' />
                    </Link>
                )
            }

        </nav>
    )
}

export default AppBarBack