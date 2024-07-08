"use client";
import AppBarRegister from "@/components/appbar/register";
import ButtonPrimary from "@/components/button/btn-primary";
import InputGroup from "@/components/input/input-group";
import useUserStore from "@/store/use-user-store";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect } from "react";

function AlamatDomisili() {
  const router = useRouter();
  const { user, setUser, resetUser } = useUserStore();

  useEffect(() => {
    setUser({
      provinsi: user.provinsi ? user.provinsi : "Jawa Barat",
      kabupaten: user.kabupaten ? user.kabupaten : "Sumedang",
      kelurahan: user.kelurahan ? user.kelurahan : "Situ",
      kecamatan: user.kecamatan ? user.kecamatan : "Sumedang Utar",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/ktp");
  };
  return (
    <main>
      <AppBarRegister
        menu={"Profile"}
        section="Alamat & Domisili"
        step={2}
        length={5}
      />
      <form className="mt-2 p-4 flex flex-col gap-5" onSubmit={handleSubmit}>
        <InputGroup
          name="alamat"
          type="text"
          label="Alamat Sesuai Ktp"
          placeholder="Perum Putra Citra Lestari"
          onChange={handleChange}
          value={user.alamat}
        />
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">Provinsi</label>
          <select
            name="provinsi"
            id="provinsi"
            defaultValue={user.provinsi}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                provinsi: e.target.value,
              });
            }}
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="Jawa Barat">Jawa Barat</option>
            <option value="Jawa Tengah">Jawa Tengah</option>
            <option value="Jawa Timur">Jawa Timur</option>
          </select>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">Kabupaten</label>
          <select
            name="kabupaten"
            id="kabupaten"
            defaultValue={user.kabupaten}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                kabupaten: e.target.value,
              });
            }}
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="Sumedang">Sumedang</option>
            <option value="Cirebon">Cirebon</option>
            <option value="Bogor">Bogor</option>
          </select>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">Kecamatan</label>
          <select
            name="kecamatan"
            id="kecamatan"
            defaultValue={user.kecamatan}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                kecamatan: e.target.value,
              });
            }}
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="Sumedang Utara">Sumedang Utara</option>
            <option value="Sumedang Selatan">Sumedang Selatan</option>
            <option value="Sumedang Barat">Sumedang Barat</option>
          </select>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">Kelurahan</label>
          <select
            name="kelurahan"
            id="Kelurahan"
            defaultValue={user.kelurahan}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                kelurahan: e.target.value,
              });
            }}
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="Situ">Situ</option>
            <option value="Curah Takir">Curah Takir</option>
            <option value="Ambulu">Ambulu</option>
          </select>
        </div>

        <ButtonPrimary label="Selanjutnya" />
      </form>
    </main>
  );
}

export default AlamatDomisili;
