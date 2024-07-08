"use client";
import AppBarBack from "@/components/appbar/appbar";
import InputGroup from "@/components/input/input-group";
import InputSelect from "@/components/input/input-select";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Page() {
  const router = useRouter();
  const [form, setForm] = useState({
    nama_lengkap: "",
    status: "Kawin",
    tempat_lahir: "Sumedang",
    tanggal_lahir: "",
    jenis_kelamin: "Pria",
    provinsi: "Jawa Barat",
    kabupaten: "Sumedang",
    kecamatan: "Sumedang Utara",
    kelurahan: "Situ",
    hubungan_keluarga: "Anak",
  });

  function hasEmptyValue(obj: Object) {
    for (const [key, value] of Object.entries(obj)) {
      if (value === "") {
        return true;
      }
    }
    return false;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!hasEmptyValue(form)) {
      try {
        await addFamily(form);
        alert("succes menambah data");
        router.back();
      } catch (error) {
        alert("gagal menambah data");
      }
    } else {
      alert("Harap isi semua field");
    }
  };

  const addFamily = async (form: Object) => {
    const family = {
      nama_lengkap: "John Doe",
      status: "Single",
      tempat_lahir: "Jakarta",
      tanggal_lahir: "2000-01-01",
      jenis_kelamin: "laki-laki",
      provinsi: "DKI Jakarta",
      kabupaten: "Jakarta Selatan",
      kecamatan: "Kebayoran Baru",
      kelurahan: "Gunung",
      hubungan_keluarga: "Anak",
    };
    const session = await getSession();
    // console.log(session?.user.access_token);
    const response = await fetch(process.env.NEXT_PUBLIC_URL_API + "/anggota", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + session?.user.access_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };
  return (
    <main className="pb-20">
      <AppBarBack menu="Tambah Anggota Keluarga" />
      <form onSubmit={handleSubmit} className="mx-6 mt-5">
        <div className="mb-5">
          <InputGroup
            id="name"
            name="name"
            label="Nama Lengkap (Sesuai KTP)"
            type="text"
            placeholder="Gia L Ayura"
            onChange={(e) => {
              setForm({
                ...form,
                nama_lengkap: e.target.value,
              });
            }}
          />
          <span className="text-gray-400 text-xs mt-2 block">
            *akan ditampilkan pada hasil pemeriksaan
          </span>
        </div>

        <div className="mb-5">
          <InputSelect
            id="status"
            name="status"
            label="Status"
            options={[
              {
                value: "Belum Kawin",
                label: "Belum Kawin",
              },
              {
                value: "Kawin",
                label: "Kawin",
              },
            ]}
            onChange={(e) => {
              setForm({
                ...form,
                status: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-5">
          <InputGroup
            id="tmpt_lahir"
            name="tmpt_lahir"
            label="Tempat Lahir"
            type="text"
            placeholder="Sumedang"
            onChange={(e) => {
              setForm({
                ...form,
                tempat_lahir: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-5">
          <InputSelect
            id="gender"
            name="gender"
            label="Jenis Kelamin"
            options={[
              {
                value: "laki-laki",
                label: "Pria",
              },
              {
                value: "perempuan",
                label: "Perempuan",
              },
            ]}
            onChange={(e) => {
              setForm({
                ...form,
                jenis_kelamin: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-5">
          <InputGroup
            id="tgl"
            name="tgl"
            label="Tanggal Lahir"
            type="date"
            onChange={(e) => {
              setForm({
                ...form,
                tanggal_lahir: e.target.value,
              });
            }}
          />
          <span className="text-gray-400 text-xs mt-2 block">
            *tanggal-bulan-tahun (10-10-2023)
          </span>
        </div>

        <div className="mb-5 flex flex-col w-full gap-2">
          <label htmlFor="">Provinsi</label>
          <select
            name="provinsi"
            id="provinsi"
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
            onChange={(e) => {
              setForm({
                ...form,
                provinsi: e.target.value,
              });
            }}
          >
            <option value="Jawa Barat">Jawa Barat</option>
            <option value="Jawa Tengah">Jawa Tengah</option>
            <option value="Jawa Timur">Jawa Timur</option>
          </select>
        </div>

        <div className="mb-5 flex flex-col w-full gap-2">
          <label htmlFor="">Kabupaten</label>
          <select
            name="kabupaten"
            id="kabupaten"
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
            onChange={(e) => {
              setForm({
                ...form,
                kabupaten: e.target.value,
              });
            }}
          >
            <option value="Sumedang">Sumedang</option>
            <option value="Cirebon">Cirebon</option>
            <option value="Bogor">Bogor</option>
          </select>
        </div>

        <div className="mb-5 flex flex-col w-full gap-2">
          <label htmlFor="">Kecamatan</label>
          <select
            name="kecamatan"
            id="kecamatan"
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
            onChange={(e) => {
              setForm({
                ...form,
                kecamatan: e.target.value,
              });
            }}
          >
            <option value="Sumedang Utara">Sumedang Utara</option>
            <option value="Sumedang Selatan">Sumedang Selatan</option>
            <option value="Sumedang Barat">Sumedang Barat</option>
          </select>
        </div>

        <div className="mb-5 flex flex-col w-full gap-2">
          <label htmlFor="">Kelurahan</label>
          <select
            name="Kelurahan"
            id="Kelurahan"
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
            onChange={(e) => {
              setForm({
                ...form,
                kelurahan: e.target.value,
              });
            }}
          >
            <option value="Situ">Situ</option>
            <option value="Curah Takir">Curah Takir</option>
            <option value="Ambulu">Ambulu</option>
          </select>
        </div>

        <div className="mb-5">
          <InputSelect
            id="hubungan"
            name="hubungan"
            label="Hubungan Dengan Keluarga"
            options={[
              {
                value: "Anak",
                label: "Anak",
              },
              {
                value: "Adik",
                label: "Adik",
              },
              {
                value: "Kakak",
                label: "Kakak",
              },
              {
                value: "Ayah",
                label: "Ayah",
              },
              {
                value: "Ibu",
                label: "Ibu",
              },
              {
                value: "Kakek",
                label: "Kakek",
              },
              {
                value: "Nenek",
                label: "Nenek",
              },
            ]}
            onChange={(e) => {
              setForm({
                ...form,
                hubungan_keluarga: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-5">
          <button
            className="px-6 py-4 mx-auto rounded-full block text-center text-white font-semibold w-full hover:scale-105 duration-300"
            style={{
              background:
                "linear-gradient(91.65deg, #F11A0C 0%, #FF2E00 104.11%)",
            }}
          >
            Simpan Anggota Keluarga
          </button>
        </div>

        <div className="mb-5">
          <Link
            href={"/profile/anggota-keluarga"}
            className="px-6 py-4 mx-auto rounded-full block text-center border border-[#F11A0C] text-[#F11A0C] font-semibold w-full hover:scale-105 duration-300"
          >
            Batalkan
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Page;
