"use client";
import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/legacy/image";
import AppBar from "@/components/appbar/appbar";
import Link from "next/link";
import Foto from "@/assets/profile/foto.png";
import Right from "@/assets/profile/kartu-right.png";
import Prandia from "@/assets/prandia-logo.png";

import QRCode from "@/assets/profile/qr-code.png";
import ButtonPrimary from "@/components/button/btn-primary";

function CardPatient() {
  const [session, setSession] = useState<Session | null>(null);

  const loadSession = async () => {
    const session = await getSession();
    setSession(session);
  };

  useEffect(() => {
    loadSession();
  }, []);
  return (
    <main className="pb-16">
      <AppBar menu="Profile" />
      <div className="flex flex-col items-center mt-10 relative">
        <Image src={Foto} className="w-28 h-28 object-cover absolute z-20" />
        <div className="bg-[#FFEBEB] px-7 pt-14 pb-20 w-full rounded-xl absolute top-20">
          {/* kartu */}
          <div className="bg-white pb-5 overflow-hidden relative">
            <Image src={Right} className="abosulute" />
            <div className="flex justify-between mx-6 absolute top-5 right-0 left-0 items-center">
              <p className="text-xs text-[#FF530C] font-semibold">
                Kartu Pasien
              </p>
              <Image src={Prandia} height={25} objectFit="cover" width={97} />
            </div>

            <div className="mx-6 mt-5 flex gap-3">
              <Image src={QRCode} />
              <div className="flex flex-col items-start w-full gap-1">
                <h3 className="font-semibold text-xs">
                  {session?.user.user.name}
                </h3>
                <span className="font-semibold text-[7px]">
                  {session?.user.user.jenis_kelamin} (
                  {session?.user.user.tgl_lahir})
                </span>
                <p className="font-normal text-[7px] w-2/3">
                  {session?.user.user.kelurahan} {session?.user.user.kecamatan}{" "}
                  {session?.user.user.kabupaten}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#D41F13] h-5 flex relative">
            <div className="bg-yellow-500 h-5 w-5 absolute"></div>
            <div className="w-full flex justify-center h-full items-center">
              <span className="text-white text-[8px]">
                www.pranadiamedika.id
              </span>
            </div>
          </div>
        </div>

        <div className="relative top-64 flex-col flex gap-5">
          <ButtonPrimary label="Download Kartu Pasien" />
          <button className="border border-[#D41F13] w-full px-6 py-3 rounded-full text-[#D41F13]">
            Kembali
          </button>
        </div>
      </div>
    </main>
  );
}

export default CardPatient;
