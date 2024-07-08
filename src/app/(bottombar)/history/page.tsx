"use client";
import Loading from "@/app/loading";
import Emphatize from "@/assets/logo/poli/emphatize";
import AppBarBack from "@/components/appbar/appbar";
import TabBar from "@/components/tab-bar/tab-bar";
import TabItem from "@/components/tab-bar/tab-item";
import { getSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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

function History() {
  const [history, setHistory] = useState<HistoryInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const loadBooking = async () => {
    const session = await getSession();
    const token = session?.user.access_token;
    const response = await fetch(process.env.NEXT_PUBLIC_URL_API + "bookings", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const res = await response.json();
    if (response.ok) {
      setHistory(() => res);
      setLoading((prev) => false);
    }
  };
  useEffect(() => {
    loadBooking();
  }, []);

  const Content = () => {
    if (loading) {
      return (
        <div className="h-96">
          <Loading />
        </div>
      );
    }

    return (
      <TabBar items={3}>
        <TabItem title="Menunggu">
          <div className="mt-8 flex flex-col gap-3">
            {history
              .filter((item) => item.status == "pending")
              .map((item, index) => (
                <Link
                  key={index}
                  href={"/history/" + item.id}
                  className="font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between"
                  style={{
                    boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
                  }}
                >
                  <div className="w-[75%] flex gap-2 items-center">
                    <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                      <Emphatize />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs">{item.tgl_booking}</p>
                      <h4 className="text-xs font-bold">{item.layanan}</h4>
                    </div>
                  </div>
                  <div>
                    <span className="bg-yellow-100 px-3 py-0.5 rounded-md min-h-fit block">
                      Menunggu
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </TabItem>
        <TabItem title="Selesai">
          <div className="mt-8 flex flex-col gap-3">
            {history
              .filter((item) => item.status == "done")
              .map((item, index) => (
                <Link
                  key={index}
                  href={"/history/2"}
                  className="font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between"
                  style={{
                    boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
                  }}
                >
                  <div className="w-[75%] flex gap-2 items-center">
                    <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                      <Emphatize />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs">{item.tgl_booking}</p>
                      <h4 className="text-xs font-bold">{item.layanan}</h4>
                    </div>
                  </div>
                  <div>
                    <span className="bg-green-100 px-3 py-0.5 rounded-md min-h-fit block">
                      selesai
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </TabItem>
        <TabItem title="Batal">
          <div className="mt-8 flex flex-col gap-3">
            {history
              .filter((item) => item.status == "cancel")
              .map((item, index) => (
                <Link
                  key={index}
                  href={"/history/2"}
                  className="font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between"
                  style={{
                    boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
                  }}
                >
                  <div className="w-[75%] flex gap-2 items-center">
                    <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                      <Emphatize />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs">{item.tgl_booking}</p>
                      <h4 className="text-xs font-bold">{item.layanan}</h4>
                    </div>
                  </div>
                  <div>
                    <span className="bg-red-100 px-3 py-0.5 rounded-md min-h-fit block">
                      batal
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </TabItem>
      </TabBar>
    );
  };
  return (
    <main>
      <AppBarBack menu="History" />
      <div className="mx-5">
        <Content />
      </div>
    </main>
  );
}

export default History;
