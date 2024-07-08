"use client";
import AppBarBack from "@/components/appbar/appbar";
import InputSelect from "@/components/input/input-select";
import ModalPembayaran from "@/components/modal/pembayaran";
import useCreatePromise from "@/store/use-create-promise";
import { getSession, useSession } from "next-auth/react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const router = useRouter();
  const { promise } = useCreatePromise();
  const [form, setForm] = useState({});
  const [modal, setModal] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    // render midtrans snap token
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";

    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", "SB-Mid-client-s2Pf3wXHCOjFcGT4");
    script.async = true;

    document.body.appendChild(script);
    console.log(document.body);

    if (promise) {
      const booking = {
        layanan: promise?.poli,
        no_medrek: "123456",
        tgl_booking: "2024-07-01",
        dokter: promise?.docter ? promise.docter.name : "",
        start_time: "2024-07-01 09:00:00",
        end_time: "2024-07-01 09:30:00",
        biaya_layanan: promise?.administrasi,
        biaya_admin: promise?.layanan,
      };
      setForm(booking);
    }
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onPay = async () => {
    if (!add) {
      setModal((prev) => !prev);
      const session = await getSession();
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_URL_API + "bookings",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + session?.user.access_token,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        const res = await response.json();
        if (response.ok) {
          console.log("payme", res);
          window.snap.show();
          window.snap.pay(res.snapToken, {
            // embedId: "snap-container",
            onSuccess: function (result: any) {
              console.log("success", result);
            },
            onPending: function (result: any) {
              console.log("pending", result);
            },
            onClose: function () {},
          });
        }
      } catch (error) {}
      setAdd(true);
    }
  };

  if (!promise) {
    router.replace("/buat-janji");
  }

  return (
    <main>
      <AppBarBack menu="Pembayaran" />
      <div className="mx-6 mt-5">
        <div className="p-4 border rounded-2xl flex w-full justify-between items-center">
          <div className="space-y-1">
            <h1 className="font-semibold">dr Mulfi azmi, Sp. PD</h1>
            <p className="text-xs text-gray-700">Spesialis Penyakit Dalam</p>
          </div>
          <div>
            <div className="w-14 h-14 rounded-full overflow-hidden relative bg-gray-400">
              <Image
                src={"/dokter/nindya.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M8 7a4 4 0 108 0 4 4 0 00-8 0z"
              ></path>
            </svg>
            <div>
              <p className="text-xs text-gray-400">Pasien</p>
              <h1 className="font-semibold text-sm">Gia L Ayura</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 3v4M8 3v4m-4 4h16M4 7a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm4 8h2v2H8v-2z"
              ></path>
            </svg>
            <div>
              <span className="text-red-500 font-medium text-xs">
                10 Oktober 2023
              </span>
              <p className="text-xs font-medium">09:00 - 13:00</p>
            </div>
          </div>
        </div>

        <div className="pt-5 border-t-4 border-[#F1EDED] mt-8">
          <InputSelect
            id="method"
            label="Metode Pembayaran"
            name="method"
            options={[
              {
                value: "virtual account",
                label: "Virtual Account Bank",
              },
            ]}
          />
        </div>

        <div className="border-y-2 border-dashed border-slate-300 py-3 mt-8">
          <div className="flex justify-between">
            <p>Biaya Layanan</p>
            <p>Rp. 6.000</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya Administrasi</p>
            <p>Rp. {promise?.administrasi}</p>
          </div>
        </div>

        <div className="flex justify-between mt-2 mb-8">
          <h1 className="font-bold text-sm">Total</h1>
          <h1 className="font-bold text-sm text-red-500">Rp. 56.000</h1>
        </div>

        <div className="w-full">
          <button
            onClick={onPay}
            className={`block text-center w-full ${
              add ? "bg-red-300 py-4" : "bg-red-600 py-4"
            }  rounded-full text-white font-bold text-base ${
              add ? "cursor-not-allowed" : ""
            }`}
          >
            Bayar
          </button>
          <Link
            href={"/history"}
            className={`mt-5 block text-center w-full border border-red-600 text-red-600 py-4 rounded-full bg-white font-bold text-base`}
          >
            Back
          </Link>
        </div>
      </div>
      <div id="snap-container" className="relative w-full"></div>

      {/* <ModalPembayaran
        title="Pembayaran"
        isOpen={modal}
        onToggle={() => setModal((prev) => !prev)}
      >

      </ModalPembayaran> */}
    </main>
  );
}

export default page;
