"use client";
import AppBarRegister from "@/components/appbar/register";
import ButtonPrimary from "@/components/button/btn-primary";
import InputGroup from "@/components/input/input-group";
import useUserStore from "@/store/use-user-store";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

function Register() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/data-umum");
  };

  const { user, setUser, resetUser } = useUserStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ [name]: value });
  };
  return (
    <main>
      <AppBarRegister
        menu={"Profile"}
        section="Data Umum"
        step={1}
        length={5}
      />
      <form className="mt-6 p-4 flex flex-col gap-3" onSubmit={handleSubmit}>
        <InputGroup
          name="name"
          type="text"
          label="Nama Lengkap (Sesuai Ktp)"
          placeholder="Gia L ayura"
          onChange={handleChange}
          value={user.name}
        />
        <InputGroup
          name="tgl_lahir"
          type="date"
          label="Tanggal Lahir"
          placeholder="23 April 2023"
          onChange={handleChange}
          value={user.tgl_lahir}
        />
        <p className="text-[#7D7D7D] text-xs font-normal mb-10">
          *tanggal-bulan-tahun (10-10-2023)
        </p>
        <ButtonPrimary label="Selanjutnya" />
      </form>
    </main>
  );
}

export default Register;
