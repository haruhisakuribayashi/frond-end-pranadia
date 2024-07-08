import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
// asset
import Pranadia from "@/assets/prandia-logo.png";
import Success from "@/assets/logo/success.png";

function Page() {
    return (
        <main className='flex flex-col gap-10 px-6 items-center h-[100%] pt-20'>
            <Image src={Pranadia} />

            <h1 className='text-base font-semibold pb-3 border-b w-full text-center'>Lupa Kata Sandi</h1>
            <div className='w-full flex flex-col justify-center items-center gap-10'>
                <Image src={Success} />
                <h5 className='font-medium text-sm'>Password Berhasil Di Reset</h5>
            </div>
            <Link href={'/login'} className='bg-[#D41F13] w-full py-3 rounded-full text-white mt-5 text-center'>Back To Login</Link>
        </main>
    )
}

export default Page