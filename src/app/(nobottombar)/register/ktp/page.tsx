"use client";
import AppBarRegister from "@/components/appbar/register";
import ButtonPrimary from "@/components/button/btn-primary";
import InputGroup from "@/components/input/input-group";
import useUserStore from "@/store/use-user-store";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect } from "react";

function DataKtp() {
  const router = useRouter();
  const { user, setUser, resetUser } = useUserStore();

  useEffect(() => {
    setUser({
      pekerjaan: user.pekerjaan ? user.pekerjaan : "Dokter",
      pendidikan: user.pendidikan ? user.pendidikan : "S2",
      agama: user.agama ? user.agama : "Islam",
      pelayanan: user.pelayanan ? user.pelayanan : "belum",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/kontak-darurat");
  };
  return (
    <main>
      <AppBarRegister menu={"Profile"} section="Foto Ktp" step={3} length={5} />
      <form className="mt-2 p-4 flex flex-col gap-5" onSubmit={handleSubmit}>
        <InputGroup
          name="photo"
          type="text"
          label="Foto Ktp"
          placeholder="photo.jpg"
          disable
          // onChange={handleChange}
        />
        <InputGroup
          name="no_ktp"
          type="text"
          label="Nomor Ktp"
          placeholder="3129182917317"
          onChange={handleChange}
          value={user.no_ktp}
        />
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">Pekerjaan</label>
          <select
            name="pekerjaan"
            id="pekerjaan"
            defaultValue={user.pekerjaan}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                pekerjaan: e.target.value,
              });
            }}
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="Dokter">Dokter</option>
            <option value="Polisi">Polisi</option>
            <option value="Pilot">Pilot</option>
            <option value="Petani">Petani</option>
            <option value="Swasta">Swasta</option>
            <option value="Guru">Guru</option>
          </select>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">Pendidikan Terkahir</label>
          <select
            defaultValue={user.pendidikan}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                pendidikan: e.target.value,
              });
            }}
            name="pendidikan"
            id="pendidikan-terkahir"
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="S2">S2</option>
            <option value="S1/D4">S1/D4</option>
            <option value="D3">D3</option>
            <option value="D2">D2</option>
            <option value="D1">D1</option>
            <option value="SMA/SMK">SMA/SMK</option>
          </select>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">Agama</label>
          <select
            name="agama"
            defaultValue={user.agama}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                agama: e.target.value,
              });
            }}
            id="Agama"
            className="outline-none \rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="Islam">Islam</option>
            <option value="Khatolik">Khatolik</option>
            <option value="Kristen Prostestan">Kristen Prostestan</option>
            <option value="Hindu">Hindu</option>
            <option value="Budha">Budha</option>
            <option value="Konghucu">Konghucu</option>
          </select>
        </div>

        <InputGroup
          name="no_telepon"
          type="text"
          label="No. Telepon"
          placeholder="08387547XXXX"
          onChange={handleChange}
          value={user.no_telepon}
        />
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">
            Pernah berobat atau mendapatkan pelayanan lainnya di Pranadia
            Medika?
          </label>
          <select
            name="pelayanan"
            id="berobat"
            defaultValue={user.pelayanan}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                pelayanan: e.target.value,
              });
            }}
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="belum">Tidak</option>
            <option value="sudah">Iya</option>
          </select>
        </div>

        <ButtonPrimary label="Selanjutnya" />
      </form>
    </main>
  );
}

export default DataKtp;
