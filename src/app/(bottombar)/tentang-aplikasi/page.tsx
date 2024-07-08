import AppBarBack from "@/components/appbar/appbar";
import Image from "next/legacy/image";
import React from "react";
import Pranadia from "@/assets/prandia-logo.png";

function Page() {
  return (
    <main>
      <AppBarBack menu="Tentang Aplikasi" />
      <div className="mx-6 mt-5">
        <div className="py-10 text-center flex flex-col justify-center items-center gap-3">
          <div
            className="relative"
            style={{
              width: "167px",
              height: "51px",
            }}
          >
            <Image
              src={Pranadia}
              layout="fill"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm">
            version <span className="font-medium">1.1</span>
          </p>
        </div>
        <p className="text-xs mb-5">
          Kesehatan Anda adalah prioritas kami, dan kami bangga mempersembahkan
          Aplikasi e-Patient Klinik Pranadia Medika - solusi inovatif untuk
          mempermudah pengelolaan rekam medis dan perawatan kesehatan Anda.{" "}
        </p>
        <p className="text-xs mb-5">
          Kami dengan bangga memperkenalkan beberapa fitur unggulan yang akan
          menjadikan pengalaman kesehatan Anda lebih mudah, lebih aman, dan
          lebih terjangkau.
        </p>
      </div>
    </main>
  );
}

export default Page;
