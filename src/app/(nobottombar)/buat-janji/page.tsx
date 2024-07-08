"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import AppBarBack from "@/components/appbar/appbar";
import InputDate from "@/components/input/input-date";
import InputGroup from "@/components/input/input-group";
import InputSelect from "@/components/input/input-select";
import docters from "@/constant/data/dokter";
import InputTime from "@/components/input/input-time";
import { useRouter } from "next/navigation";
import useCreatePromise from "@/store/use-create-promise";
import Modal from "@/components/modal";
import Image from "next/legacy/image";

function page() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [dokters, setDokters] = useState<{ value: string; label: string }[]>(
    []
  );
  const [error, setError] = useState<boolean>(false);
  const { promise, addPromise } = useCreatePromise();

  useEffect(() => {
    setDokters(
      docters.reverse().map((docter, index) => ({
        label: docter.name,
        value: index.toLocaleString(),
      }))
    );
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClick();
    console.log(promise);
  };

  const onClick = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());

      if (
        data.name != undefined &&
        data.date != undefined &&
        data.dokter != undefined &&
        data.poli != undefined &&
        data.time != undefined
      ) {
        setError(false);
        addPromise({
          date: data.date as string,
          administrasi: "50000",
          docter: docters[parseInt(data.dokter as string)],
          layanan: "6000",
          pasien: data.name as string,
          poli: data.poli as string,
          time: data.time as string,
          total: 56000,
        });
      } else {
        setError(true);
      }
    }
    setOpen((prevState) => !prevState);
  };

  const onNext = () => {
    if (error) return alert("harap isi semua");
    return router.push("/buat-janji/pembayaran");
  };

  return (
    <main className="relative w-full">
      <AppBarBack menu="Buat Janji" />
      <form
        className="mx-6 mt-6 space-y-6"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <InputSelect
          name="name"
          id="name"
          label="Pilih Pasien"
          options={[
            {
              value: "Gia L Ayu",
              label: "Gia L Ayu",
            },
            {
              value: "Hendra Mahendra",
              label: "Hendra Mahendra",
            },
          ]}
        />
        <InputSelect
          name="poli"
          id="poli"
          label="Pilih Poli"
          options={[
            {
              value: "Poli Penyakit Dalam",
              label: "Poli Penyakit Dalam",
            },
            {
              value: "Poliklinik Paru",
              label: "Poliklinik Paru",
            },
            {
              value: "Poliklinik Jantung",
              label: "Poliklinik Jantung",
            },
            {
              value: "Poliklinik Gigi & Mulut",
              label: "Poliklinik Gigi & Mulut",
            },
            {
              value: "Poliklinik Umum",
              label: "Poliklinik Umum",
            },
          ]}
        />
        <InputGroup
          name="medrek"
          label="No. Rekam Medik (Otomatis)"
          type="text"
          placeholder="00-88-18-56"
          disable={true}
        />
        <InputDate />
        <InputSelect
          name="dokter"
          id="dokter"
          label="Pilih Dokter"
          options={dokters}
        />
        <InputTime />

        <div className="border-y-2 border-dashed border-slate-300 py-3">
          <div className="flex justify-between">
            <p>Biaya Layanan</p>
            <p>Rp. 6.000</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya Administrasi</p>
            <p>Rp. 50.000</p>
          </div>
        </div>

        <div className="flex justify-between">
          <h1 className="font-bold text-sm">Total</h1>
          <h1 className="font-bold text-sm text-red-500">Rp. 56.000</h1>
        </div>

        <div className="w-full">
          <button className="w-full bg-red-600 py-4 rounded-full text-white font-bold text-base">
            Selanjutnya
          </button>
        </div>
      </form>

      <div className="h-10"></div>
      <Modal isOpen={open} onToggle={onClick} title="Data Anda Sudah benar?">
        {promise?.docter && (
          <div className="p-4 border rounded-2xl flex w-full justify-between items-center">
            <div className="space-y-1">
              <h1 className="font-semibold text-sm">{promise.docter.name}</h1>
              <p className="text-xs text-gray-700">
                {promise.docter.specialist}
              </p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full overflow-hidden relative bg-gray-400">
                <Image
                  src={promise.docter.photo}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        )}

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
              <h1 className="font-semibold text-sm">{promise?.pasien}</h1>
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
                {promise?.date}
              </span>
              <p className="text-xs font-medium">{promise?.time}</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-5">
          <button
            className="w-full bg-red-600 py-4 rounded-full text-white font-bold text-sm"
            onClick={onNext}
          >
            Ya, Lanjutkan Buat Janji
          </button>
        </div>
      </Modal>
    </main>
  );
}

export default page;
