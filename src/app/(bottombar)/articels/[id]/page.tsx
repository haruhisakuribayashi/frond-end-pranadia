"use client";
import AppBarBack from "@/components/appbar/appbar";
import BoxLiterasiArtikel from "@/components/box/literasi-artikel";
import React, { useEffect, useState } from "react";
import articels from "@/constant/data/artikel";
import Image from "next/legacy/image";
import { redirect, useParams } from "next/navigation";
import LoadingPage from "@/components/loading/LoadingPage";

function page() {
  // variable state untuk menyimpan detail dokter
  const [artic, setArtic] = useState<ArticelInterface | null>(null);
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

      let articel = articels.filter((value, index) => index == id - 1)[0];
      if (articel == undefined) {
        // maka akan di errorkan karena id di url tidak ada yg cocok dengan data
        throw new Error("Redirect undifinded");
      }

      // menyimpan hasil filter diatas ke variable state docter di atas
      setArtic(articel);
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
  return (
    <main>
      <AppBarBack menu="Detail Literasi & Artikel" />
      <div className="w-full mt-3">
        <div className="mx-5 bg-black rounded-lg h-48 relative overflow-hidden">
          <Image src={artic!.thumbnail} layout="fill" objectFit="cover" />
        </div>

        <div className="mt-5 mx-5 divide-y">
          <div className="my-3">
            <h1 className="text-sm font-bold truncate">{artic?.title}</h1>
            <div className="flex justify-between mt-2">
              <span className="bg-red-50 text-red-500 py-1 w-fit px-3 rounded-full text-xs">
                {artic?.category}
              </span>
              <span className="text-xs text-gray-400"> {artic?.date}</span>
            </div>
          </div>
          <p className="pt-5 text-xs">{artic?.description}</p>
        </div>

        <div className="flex justify-between mt-5 mx-5">
          <h1 className="font-bold">Literasi & Artikel Lainnya</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5 mx-5">
          {articels.map((articel, index) => (
            <BoxLiterasiArtikel
              key={index}
              id={index + 1}
              src={articel.thumbnail}
              title={articel.title}
              category={articel.category}
            />
          ))}
        </div>
      </div>
      <div className="h-10"></div>
    </main>
  );
}

export default page;
