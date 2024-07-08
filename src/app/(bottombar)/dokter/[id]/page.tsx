"use client";
import React, { useEffect, useState } from "react";
import AppBarBack from "@/components/appbar/appbar";
import { redirect, useParams } from "next/navigation";
import dokter from "@/constant/data/dokter";
import LoadingPage from "@/components/loading/LoadingPage";
import Image from "next/image";
import Link from "next/link";

function page() {
  // variable state untuk menyimpan detail dokter
  const [docter, setDoctor] = useState<DokterInterface | null>(null);
  // variable state untuk menyimpan loading
  const [loading, setLoading] = useState<boolean>(true);
  // untuk mengambil parameter id dari url
  const params = useParams();

  useEffect(() => {
    try {
      // merubah variable state loading menjadi true
      setLoading(true);
      // mengambil nilai dari parameter id di url dan merubahnya menjadi type angka/number
      let id = parseInt(params.id as string);

      // mengecek jika parameter id nya bukan angka
      if (Number.isNaN(id)) {
        // maka akan di errorkan karena data tidak punya data selain angka/number
        throw new Error("Redirect nan");
      }

      let dok = dokter.filter((value, index) => index == id - 1)[0];
      if (dok == undefined) {
        // maka akan di errorkan karena id di url tidak ada yg cocok dengan data
        throw new Error("Redirect undifinded");
      }

      // menyimpan hasil filter diatas ke variable state docter di atas
      setDoctor(dok);
      // membuat variable state loadingan menjadi false yang berarti loading berhenti
      setLoading(false);
    } catch (error) {
      // jika ada error maka akan dikembalikan ke halaman sebelumnya alias halaman dokter
      redirect("/dokter");
    }
  }, []);

  // jika loading maka akan memunculkan component loadingPage supaya tampilan berubah menjadi loading
  if (loading) {
    return <LoadingPage />;
  }

  // jika tidak loading maka memunculkan halaman aslinya dengan detail dokter nya
  return (
    <main>
      {/* app bar yang diatas sebagai judul dan tombol kembali */}
      <AppBarBack menu={"Detail Dokter"} />

      {/* Box Information Docter */}
      <div
        className="px-6 mx-5 mt-20 rounded-md bg-white pb-5 pt-20 relative"
        style={{
          boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
        }}
      >
        <div className="w-28 h-28 overflow-hidden rounded-full absolute -translate-y-[120%] -translate-x-[50%] left-[50%]">
          <Image
            src={docter!.photo}
            width={112}
            height={112}
            objectFit="cover"
            alt="Profile Docter"
          />
        </div>
        <div className="flex flex-col min-w-56 text-center justify-center items-center">
          <h1>{docter?.name}</h1>
          <span className="my-2 block w-fit bg-red-100 text-red-500 px-3 py-1 text-xs font-medium rounded-full">
            {docter?.specialist}
          </span>
          <h5 className="text-[#6D6D6D] font-medium text-xs mb-6">
            No. STR {docter?.nostr}
          </h5>
          <p className="text-xs">{docter?.description}</p>
        </div>
      </div>
      {/* end box information */}

      <h1 className="my-5 text-red-600 font-bold text-center">
        Jadwal Praktek
      </h1>

      {/* box jadwal */}
      <div
        className="mx-5 rounded-xl bg-white divide-y"
        style={{
          boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
        }}
      >
        {/* header box jadwal */}
        <div className="text-center p-2">
          <h1 className="font-bold">Poliklinik Paru</h1>
        </div>
        <div className="py-3 px-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#FF530C"
                  d="M9 1.406A7.594 7.594 0 1016.594 9 7.603 7.603 0 009 1.406zm0 13.5A5.906 5.906 0 119 3.094a5.906 5.906 0 010 11.812zM13.781 9a.844.844 0 01-.844.844H9A.844.844 0 018.156 9V5.062a.844.844 0 011.688 0v3.094h3.094A.844.844 0 0113.78 9z"
                ></path>
              </svg>
              <p>Selasa</p>
            </div>
            <div>14.30 - 17.30</div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#FF530C"
                  d="M9 1.406A7.594 7.594 0 1016.594 9 7.603 7.603 0 009 1.406zm0 13.5A5.906 5.906 0 119 3.094a5.906 5.906 0 010 11.812zM13.781 9a.844.844 0 01-.844.844H9A.844.844 0 018.156 9V5.062a.844.844 0 011.688 0v3.094h3.094A.844.844 0 0113.78 9z"
                ></path>
              </svg>
              <p>Rabu</p>
            </div>
            <div>14.30 - 17.30</div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#FF530C"
                  d="M9 1.406A7.594 7.594 0 1016.594 9 7.603 7.603 0 009 1.406zm0 13.5A5.906 5.906 0 119 3.094a5.906 5.906 0 010 11.812zM13.781 9a.844.844 0 01-.844.844H9A.844.844 0 018.156 9V5.062a.844.844 0 011.688 0v3.094h3.094A.844.844 0 0113.78 9z"
                ></path>
              </svg>
              <p>Jumat</p>
            </div>
            <div>14.30 - 17.30</div>
          </div>
        </div>
      </div>
      {/* end box jadwal */}

      <Link
        href={"/buat-janji"}
        className="bg-red-600 text-white font-bold text-lg mt-10 rounded-full px-10 py-3 block mx-5 text-center"
      >
        Buat Jadwal
      </Link>
    </main>
  );
}

export default page;
