import TabBar from '@/components/tab-bar/tab-bar'
import TabItem from '@/components/tab-bar/tab-item'
import Link from 'next/link'
import React from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import { FaSquareWhatsapp } from 'react-icons/fa6'
import { HiPlus } from 'react-icons/hi2'

function TabBarSection() {
    return (
        <TabBar items={2}>
            <TabItem title="FAQ">
                <div className="px-3 py-2">

                    <h2 className='text-lg mt-5'>
                        We're here to help you with
                        anything and everyting on
                        ViralPitch
                    </h2>

                    <p className='mt-3 text-xs text-[#585858]'>
                    At Viral Pitch we expect at a day's start is you, better and happier than yesterday. We have got you covered share your concern or check our frequently asked questions listed below.
                    </p>

                    <h3 className='text-xs font-bold mt-4'>FAQ</h3>

                    <div className="flex flex-col justify-center items-cener w-full mt-3">
                        <div className="border-t flex justify-between py-2">
                            <span className='font-medium text-xs text-[#5B5B5B]'>What is Viral Pitch?</span>
                            <HiPlus />
                        </div>
                        <div className="border-t flex justify-between py-2">
                            <span className='font-medium text-xs text-[#5B5B5B]'>What is Viral Pitch?</span>
                            <HiPlus />
                        </div>
                        <div className="border-t flex justify-between py-2">
                            <span className='font-medium text-xs text-[#5B5B5B]'>What is Viral Pitch?</span>
                            <HiPlus />
                        </div>
                        <div className="border-t flex justify-between py-2">
                            <span className='font-medium text-xs text-[#5B5B5B]'>What is Viral Pitch?</span>
                            <HiPlus />
                        </div>
                        <div className="border-t flex justify-between py-2">
                            <span className='font-medium text-xs text-[#5B5B5B]'>What is Viral Pitch?</span>
                            <HiPlus />
                        </div>
                        <div className="border-t flex justify-between py-2">
                            <span className='font-medium text-xs text-[#5B5B5B]'>What is Viral Pitch?</span>
                            <HiPlus />
                        </div>
                        <div className="border-t flex justify-between py-2">
                            <span className='font-medium text-xs text-[#5B5B5B]'>What is Viral Pitch?</span>
                            <HiPlus />
                        </div>
                    </div>
                    <div className="mt-2 w-full">
                        <h1 className='font-bold text-sm text-center w-[3/4]'>Tidak Menemukan Jawaban ?</h1>

                        <button className='bg-[#FF4444] w-full mt-2 px-4 py-2 rounded-full text-white'>Kontak Kami</button>
                    </div>
                </div>
            </TabItem>
            <TabItem title="Kontak kami">
                <div className="mt-8 flex flex-col gap-3">
                    <Link href={'/'} className='font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 items-center' style={{
                        boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1);"
                    }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="#D41F13"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 10a.5.5 0 101 0V9a.5.5 0 10-1 0v1zm0 0a5 5 0 005 5m0 0h1a.5.5 0 000-1h-1a.5.5 0 100 1zM3 21l1.65-3.8a9 9 0 113.4 2.9L3 21z"
                            ></path>
                        </svg>
                        WhatsApp
                    </Link>
                    <Link href={'/'} className='font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 items-center' style={{
                        boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1);"
                    }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="#D41F13"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 11a3 3 0 106 0 3 3 0 00-6 0z"
                            ></path>
                            <path
                                stroke="#D41F13"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                        </svg>
                        Instgram
                    </Link>
                    <Link href={'/'} className='font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 items-center' style={{
                        boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1);"
                    }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <g clipPath="url(#clip0_94_1593)">
                                <path
                                    stroke="#D41F13"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16.5 7.5v.01M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8zm5 4a3 3 0 106 0 3 3 0 00-6 0z"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_94_1593">
                                    <path fill="#fff" d="M0 0H24V24H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                        Facebook
                    </Link>
                    <Link href={'/'} className='font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 items-center' style={{
                        boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1);"
                    }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <g
                                stroke="#D41F13"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                clipPath="url(#clip0_94_1601)"
                            >
                                <path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                                <path d="M10 12h4v4h-4v-4z"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_94_1601">
                                    <path fill="#fff" d="M0 0H24V24H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                        Website
                    </Link>
                    <Link href={'/'} className='font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 items-center' style={{
                        boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1);"
                    }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="#D41F13"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 7a2 2 0 012-2h14a2 2 0 012 2M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6"
                            ></path>
                        </svg>
                        Email
                    </Link>
                </div>
            </TabItem>
        </TabBar>
    )
}

export default TabBarSection