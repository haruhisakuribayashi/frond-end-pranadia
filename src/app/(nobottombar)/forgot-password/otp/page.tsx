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
        router.push('/forgot-password/change-password');
    }


    return (
        <main className='flex flex-col gap-8 px-6 items-center h-[100%] pt-20'>
            <Image src={Pranadia} />

            <h1 className='text-base font-semibold pb-3 border-b w-full text-center'>Lupa Kata Sandi</h1>

      
              <p className='text-center w-full font-normal text-sm'>
                Kami mengirim kode Auth ke email :
                <br />
                <strong>giaayura23@gmail.com</strong>
                <br />
                Silakan cek email Anda
              </p>
         
            
            {/* form */}
            <form className='w-full flex flex-col gap-5' onSubmit={e => handleSubmit(e)}>
                <div className="grid grid-cols-5 gap-3">
                  <input name='otp[]' className="p-5 border h-14 rounded-md focus:outline-red-500" maxLength={1}></input>
                  <input name='otp[]' className="p-5 border h-14 rounded-md focus:outline-red-500" maxLength={1}></input>
                  <input name='otp[]' className="p-5 border h-14 rounded-md focus:outline-red-500" maxLength={1}></input>
                  <input name='otp[]' className="p-5 border h-14 rounded-md focus:outline-red-500" maxLength={1}></input>
                  <input name='otp[]' className="p-5 border h-14 rounded-md focus:outline-red-500" maxLength={1}></input>
                </div>
                <button className='bg-[#D41F13] w-full py-3 rounded-full text-white mt-10'>Verifikasi Kode</button>
            </form>
        </main>
    )
}

export default Page