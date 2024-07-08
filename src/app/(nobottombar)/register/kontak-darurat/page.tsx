"use client";
import AppBarRegister from "@/components/appbar/register";
import ButtonPrimary from "@/components/button/btn-primary";
import InputGroup from "@/components/input/input-group";
import useUserStore from "@/store/use-user-store";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect } from "react";

function KontakDarurat() {
  const router = useRouter();
  const { user, setUser, resetUser } = useUserStore();

  useEffect(() => {
    setUser({
      hubungan_keluarga: user.hubungan_keluarga
        ? user.hubungan_keluarga
        : "Kakek",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ [name]: value });
    console.log(user);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/verifikasi-nomor");
  };
  return (
    <main>
      <AppBarRegister
        menu={"Profile"}
        section="Kontak Darurat"
        step={4}
        length={5}
      />
      <form className="mt-2 p-4 flex flex-col gap-5" onSubmit={handleSubmit}>
        <InputGroup
          name="nama_keluarga"
          type="text"
          label="Nama keluarga terdekat"
          placeholder="Tatang Sutarma"
          onChange={handleChange}
          value={user.nama_keluarga}
        />
        <InputGroup
          name="no_telepon_keluarga"
          type="text"
          label="No. Hp Keluarga"
          placeholder="08746736XXXX"
          onChange={handleChange}
          value={user.no_telepon_keluarga}
        />
        <InputGroup
          name="alamat_keluarga"
          type="text"
          label="Alamat keluarga terdekat"
          placeholder="Lembur Situ"
          onChange={handleChange}
          value={user.alamat_keluarga}
        />

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">Hubungan dengan Keluarga</label>
          <select
            name="hubungan_keluarga"
            id="keluarga"
            defaultValue={user.hubungan_keluarga}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setUser({
                hubungan_keluarga: e.target.value,
              });
            }}
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="Kakek">Kakek</option>
            <option value="Nenek">Nenek</option>
            <option value="Ayah">Ayah</option>
            <option value="Ibu">Ibu</option>
            <option value="Kakak">Kakak</option>
            <option value="Adek">Adek</option>
          </select>
        </div>

        <ButtonPrimary label="Selanjutnya" />
      </form>
    </main>
  );
}

export default KontakDarurat;
