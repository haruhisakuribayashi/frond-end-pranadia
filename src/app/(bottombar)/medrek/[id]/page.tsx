import AppBarBack from "@/components/appbar/appbar";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <main>
      <AppBarBack menu="Poliklink" />
      <div className="mt-3 mx-6 relative">
        <div className="w-full h-48 relative">
          <Image src="/poli.png" layout="fill" />
        </div>
        {/* box informasi poliklinik */}
        <div
          className="rounded-3xl w-full bg-white px-6 py-2 relative -top-10"
          style={{
            boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
          }}
        >
          <h1 className="font-bold text-xs my-2 text-center">
            Poliklinik Jantung
          </h1>

          <div className="mt-6">
            <p className="text-xs text-center">
              Lulusan Pendidikan Spesialis Paru di Universitas Indonesia. Saat
              ini berpraktik di RSUD Sumedang dan RS Hermina Bandung.
            </p>
          </div>

          <div className="mt-5 divide-y">
            <div className="text-center p-2">
              <h1 className="font-bold text-xs my-2 text-center">
                Poliklinik Paru
              </h1>
            </div>
            <div className="py-3 text-sm space-y-2">
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

          <div className="mt-5 divide-y">
            <div className="text-center p-2">
              <h1 className="font-bold text-xs my-2 text-center">
                Daftar Dokter
              </h1>
            </div>
            <div className="py-3 space-y-5">
              {/* dokter yang ada */}
              <div className="flex gap-2 items-center">
                <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <Image
                    src={"/dokter/dinar.png"}
                    layout="fill"
                    className="w-16 h-16"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col justify-center-center gap-1">
                  <h1 className="text-xs font-semibold">
                    dr. Dinar Agustina L
                  </h1>
                  <span className="text-xs text-red-600">Dokter Umum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button buat jadwal */}
        <Link
          href={"/"}
          className="bg-[#F11A0C] text-white font-bold text-lg rounded-full px-10 py-3 block text-center w-full"
        >
          Buat Jadwal
        </Link>
      </div>
      <div className="h-10"></div>
    </main>
  );
}

export default Page;
