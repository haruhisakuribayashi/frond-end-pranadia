"use client";
import React, { FormEvent } from 'react';
import Image from 'next/legacy/image';
// asset
import Pranadia from "@/assets/prandia-logo.png";
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/forgot-password/otp');
    }


    return (
        <main className='flex flex-col gap-14 px-6 items-center h-[100%] pt-20'>
            <Image src={Pranadia} />

            <h1 className='text-base font-semibold pb-3 border-b w-full text-center'>Lupa Kata Sandi</h1>
            {/* form */}
            <form className='w-full flex flex-col gap-5' onSubmit={e => handleSubmit(e)}>
                <div className="flex flex-col gap-2">
                <label htmlFor="email" className='text-sm font-medium'>Email</label>
                <input type="email" id="email" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 ' placeholder="Masukan Email" />
                </div>

                <div className="flex flex-col gap-2">
                <label htmlFor="email-conf" className='text-sm font-medium'>Masukan Email Kembali</label>
                <input type="email" id="email-conf" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 ' placeholder="Masukan Email Kembali" />
                </div>
                <button className='bg-[#D41F13] w-full py-3 rounded-full text-white mt-10'>Lupa Kata Sandi</button>
            </form>
        </main>
    )
}

export default Page