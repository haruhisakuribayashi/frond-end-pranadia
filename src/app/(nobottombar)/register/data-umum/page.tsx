"use client";
import AppBarRegister from "@/components/appbar/register";
import ButtonPrimary from "@/components/button/btn-primary";
import InputGroup from "@/components/input/input-group";
import useUserStore from "@/store/use-user-store";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect } from "react";

function DataUmum() {
  const router = useRouter();
  const { user, setUser, resetUser } = useUserStore();

  useEffect(() => {
    setUser({
      title_pasien: user.title_pasien ? user.title_pasien : "nn",
      status_kawin: user.status_kawin ? user.status_kawin : "belum",
      jenis_kelamin: user.jenis_kelamin ? user.jenis_kelamin : "perempuan",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    router.push("/register/alamat");
  };
  return (
    <main>
      <AppBarRegister
        menu={"Profile"}
        section="Data Umum"
        step={1}
        length={5}
      />
      <form className="mt-2 p-4 flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">Title Pasien</label>
          <select
            name="title_pasien"
            id="title"
            defaultValue={user.title_pasien}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                title_pasien: e.target.value,
              });
            }}
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="nn">Nn</option>
            <option value="tn">Tn</option>
          </select>
        </div>
        <InputGroup
          name="email"
          type="text"
          label="Email"
          value={user.email}
          placeholder="xxx@gmail.com"
          onChange={handleChange}
        />
        <InputGroup
          name="password"
          type="password"
          label="Password"
          value={user.password}
          placeholder="Masukan Password"
          onChange={handleChange}
        />

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="status">Status</label>
          <select
            name="status_kawin"
            id="status"
            defaultValue={user.status_kawin}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                status_kawin: e.target.value,
              });
            }}
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="belum">Belum Kawin</option>
            <option value="sudah">Sudah Kawin</option>
          </select>
        </div>
        <InputGroup
          name="tempat_lahir"
          type="text"
          label="Tempat Lahir"
          placeholder="Sumedang"
          onChange={handleChange}
          value={user.tempat_lahir}
        />
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="gender">Jenis Kelamin</label>
          <select
            name="jenis_kelamin"
            id="gender"
            defaultValue={user.status_kawin}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                jenis_kelamin: e.target.value,
              });
            }}
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="perempuan">Perempuan</option>
            <option value="laki">Laki Laki</option>
          </select>
        </div>
        <InputGroup
          name="tgl_lahir"
          type="date"
          label="Tanggal Lahir"
          placeholder="23 April 2023"
          onChange={handleChange}
          value={user.tgl_lahir}
        />
        <ButtonPrimary label="Selanjutnya" />
      </form>
    </main>
  );
}

export default DataUmum;
