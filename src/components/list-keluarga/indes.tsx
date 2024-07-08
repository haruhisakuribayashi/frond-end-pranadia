"use client";
import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { getSession } from "next-auth/react";

function ListKeluarga() {
  const [families, setFamily] = useState([]);
  const loadData = async () => {
    const session = await getSession();
    // console.log(session?.user.access_token);
    const response = await fetch(process.env.NEXT_PUBLIC_URL_API + "anggota", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + session?.user.access_token,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const res = await response.json();
      setFamily(res);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="mx-6 mt-6 space-y-5">
      {families.map((item, index) => (
        <div
          key={index}
          className="px-6 py-4 shadow-xl rounded-xl bg-white  flex items-center gap-3"
          style={{
            boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
          }}
        >
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image src={"/keluarga/keluarga-1.png"} layout="fill" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-semibold">{item.nama_lengkap}</h2>
            <div className="text-xs text-gray-400 space-x-2">
              <span>{item.hubungan_keluarga}</span>
              <span>{item.jenis_kelamin}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListKeluarga;
