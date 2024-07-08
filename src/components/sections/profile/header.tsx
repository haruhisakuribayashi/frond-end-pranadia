"use client";
import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/legacy/image";
import Link from "next/link";
import Foto from "@/assets/profile/foto.png";

function Header() {
  const [session, setSession] = useState<Session | null>(null);

  const loadSession = async () => {
    const session = await getSession();
    setSession(session);
  };

  useEffect(() => {
    loadSession();
  }, []);
  return (
    <div className="mt-6 mx-auto flex justify-center items-center flex-col">
      <Image src={Foto} className="w-28 h-28 object-cover" />
      <h1 className="text-base font-semibold mt-3">
        {session?.user.user.name}
      </h1>
      <Link
        href={"/profile/kartu"}
        className="mt-3 px-4 py-1 text-xs rounded-full bg-[#FFEBEB] text-[#790707]"
      >
        Lihat Kartu Pasien
      </Link>
    </div>
  );
}

export default Header;
