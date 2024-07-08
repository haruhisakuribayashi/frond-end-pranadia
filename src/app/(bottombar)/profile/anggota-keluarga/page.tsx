import AppBarBack from "@/components/appbar/appbar";
import ListKeluarga from "@/components/list-keluarga/indes";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <main className="relative h-full flex flex-col">
      <AppBarBack menu="Anggota Keluarga" />
      <div className="w-full flex-grow flex flex-col justify-between pb-24">
        <ListKeluarga />
        <div className="mx-6 mt-5">
          <Link
            href={"/profile/anggota-keluarga/tambah"}
            className="px-6 py-4 mx-auto rounded-full block text-center text-white font-semibold w-full hover:scale-105 duration-300"
            style={{
              background:
                "linear-gradient(91.65deg, #F11A0C 0%, #FF2E00 104.11%)",
            }}
          >
            Tambah Anggota Keluarga
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Page;
