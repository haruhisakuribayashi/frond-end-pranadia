"use client";
import AppBarBack from "@/components/appbar/appbar";
import CardDropdown from "@/components/card/card-dropdown";
import React, { useEffect, useState } from "react";
import Nindya from "@/assets/dokter/nindya.png";
import Image from "next/legacy/image";
import { getSession } from "next-auth/react";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import docters from "@/constant/data/dokter";

interface HistoryInterface {
  id: number;
  user_id: number;
  layanan: string;
  no_medrek: string;
  tgl_booking: string;
  dokter: string;
  start_time: string;
  end_time: string;
  biaya_layanan: string;
  biaya_admin: string;
  status: string;
  created_at: string;
  updated_at: string;
}

function Page() {
  const [history, setHistory] = useState<HistoryInterface | null>(null);
  const params = useParams<{ id: string }>();
  const [docter, setDocters] = useState<DokterInterface | null>(null);

  const loadBooking = async () => {
    const session = await getSession();
    const token = session?.user.access_token;
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL_API + "bookings/" + params.id,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const res = await response.json();
    if (response.ok) {
      setHistory(() => res);
      getDocter(res["dokter"]);
    }
  };

  const getDocter = (docter: string | undefined) => {
    setDocters(
      docters.filter((item) => item.name == docter).length == 0
        ? null
        : docters.filter((item) => item.name == docter)[0]
    );
  };

  useEffect(() => {
    loadBooking();
  }, [docter]);

  if (history == null) {
    return <Loading />;
  }
  return (
    <main className="pb-10">
      <AppBarBack menu="Detail History" />
      <div className="mx-5 mt-5">
        <CardDropdown title="Informasi Pasien">
          <div className="flex justify-between">
            <div className={`flex px-1 py-2 gap-2 items-center`}>
              <div className="w-10 h-10 rounded-full overflow-hidden">
                {docter && (
                  <Image
                    src={docter.photo}
                    alt={docter.name}
                    width={50}
                    height={50}
                    className="w-full h-full"
                  />
                )}
              </div>
              <div className="flex flex-col">
                <h4 className="text-xs font-bold">{history?.dokter}</h4>
                <p className="text-xs font-normal text-[#505050]"></p>
              </div>
            </div>
            <h6 className="text-[#D41F13] text-xs mt-1">PRM012821</h6>
          </div>
        </CardDropdown>

        <div
          className="rounded-md bg-white py-3 px-6 mt-3"
          style={{
            boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
          }}
        >
          <div className="w-full py-2 flex">
            <div className="flex basis-[95%] gap-2 items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-300"></div>
              <div className="space-y-1">
                <p className="text-[10px]">{history?.tgl_booking}</p>
                <h2 className="font-bold text-xs">{history.layanan}</h2>
              </div>
            </div>
            <div className="basis-[5%]">
              <p
                className={`px-2 py-1  ${
                  history.status == "pending"
                    ? "text-yellow-600 bg-yellow-100"
                    : history.status == "done"
                    ? "text-green-600 bg-green-100"
                    : "text-red-600 bg-red-100"
                } text-[10px] font-medium rounded-full`}
              >
                {history?.status}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2">
            <div className="py-3 px-2 border-t">
              <p className="text-sm text-[#767676]">Kode Booking</p>
              <p className="text-sm">{"NP0" + history?.id}</p>
            </div>
            <div className="py-3 px-2 border-t border-l">
              <p className="text-sm text-[#767676]">Tanggal Booking</p>
              <p className="text-sm">{history?.tgl_booking}</p>
            </div>
            <div className="py-3 px-2 border-t">
              <p className="text-sm text-[#767676]">No. Antrian</p>
              <p className="text-sm">{"PD-0" + history?.id}</p>
            </div>
            <div className="py-3 px-2 border-t border-l">
              <p className="text-sm text-[#767676]">Tanggal Antrian</p>
              <p className="text-sm">{history?.tgl_booking}</p>
            </div>
          </div>
        </div>

        <div
          className="rounded-md bg-white py-3 px-6 mt-3 flex items-center gap-2"
          style={{
            boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
          }}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden">
            {docter && (
              <Image
                src={docter.photo}
                alt={docter.name}
                width={50}
                height={50}
                className="w-full h-full"
              />
            )}
          </div>
          <div className="flex flex-col">
            <h1 className="text-xs">{history.dokter}</h1>
            <span className="text-[10px] text-red-600">
              {docter?.specialist}
            </span>
          </div>
        </div>

        <CardDropdown title="Status Pembayaran" className="mt-3">
          <div className="flex flex-col py-2 w-full border-b border-dashed mt-2">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-xs font-bold">Metode Pemabayaran</h4>
              <p className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                umum
              </p>
            </div>
          </div>
          <div className="flex flex-col py-2 w-full border-b border-dashed">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-xs">Administrasi</h4>
              <p className="px-3 py-1 text-xs font-medium rounded-full">
                Rp. {history.biaya_admin}
              </p>
            </div>
          </div>
          <div className="flex flex-col py-2 w-full border-b border-dashed">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-xs">Layanan</h4>
              <p className="px-3 py-1 text-xs font-medium rounded-full">
                Rp. {history.biaya_layanan}
              </p>
            </div>
          </div>
          <div className="flex flex-col py-2 w-full border-b border-dashed">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-xs font-bold">Total</h4>
              <p className="px-3 py-1 text-xs font-bold rounded-full">
                Rp.{" "}
                {parseInt(history.biaya_admin) +
                  parseInt(history.biaya_layanan)}
              </p>
            </div>
          </div>
        </CardDropdown>

        <CardDropdown title="Hasil Rekam Medis" className="mt-3">
          <div className="py-3">
            <h1 className="text-sm text-center">Tidak ada Data</h1>
          </div>
        </CardDropdown>
      </div>
      <div className="h-16"></div>
    </main>
  );
}

export default Page;
