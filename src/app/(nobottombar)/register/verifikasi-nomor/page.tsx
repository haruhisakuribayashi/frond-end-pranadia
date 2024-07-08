"use client";
import AppBarRegister from "@/components/appbar/register";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";
import Pranadia from "@/assets/prandia-logo.png";
import Image from "next/legacy/image";
import CountDown from "./(component)/count-down";
import useUserStore, { User } from "@/store/use-user-store";

function VErifikasiDarurat() {
  const router = useRouter();
  const { user, setUser, resetUser } = useUserStore();

  useEffect(() => {
    setUser({
      password_confirmation: user.password,
    });
  }, []);

  const isEmptyValue = (value: any) => {
    return (
      value === null ||
      value === undefined ||
      value === "" ||
      (typeof value === "object" && Object.keys(value).length === 0)
    );
  };

  const hasEmptyValue = (obj: Object) => {
    return Object.values(obj).some(isEmptyValue);
  };

  const registerData = async (user: User) => {
    const response = await fetch(process.env.NEXT_PUBLIC_URL_API + "register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      resetUser();
      router.replace("/login");
    } else {
      const res = await response.json();

      alert("terjadi kesalahan" + Object.keys(res));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const otpValues = formData.getAll("otp[]").join(""); // Gabungkan nilai-nilai OTP

    if (otpValues == "12345") {
      if (hasEmptyValue(user)) {
        alert("Harap isi semua field dengan teliti");
      } else {
        registerData(user);
      }
    } else {
      alert("otp yang anda masukan salah");
    }
  };
  return (
    <main>
      <AppBarRegister
        menu={"Profile"}
        section="Verfikasi Nomer"
        step={5}
        length={5}
      />
      <div className="flex flex-col gap-8 px-6 items-center h-[100%] pt-20">
        <Image src={Pranadia} />
        <p className="text-center w-full font-normal text-sm">
          Kami mengirim kode Auth ke nomor:
          <br />
          <strong>08387547XXXX</strong>
          <br />
          Silakan cek pesan Anda
        </p>

        <CountDown />

        {/* form */}
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="grid grid-cols-5 gap-3">
            <input
              name="otp[]"
              className="p-5 border h-14 rounded-md focus:outline-red-500"
              maxLength={1}
            ></input>
            <input
              name="otp[]"
              className="p-5 border h-14 rounded-md focus:outline-red-500"
              maxLength={1}
            ></input>
            <input
              name="otp[]"
              className="p-5 border h-14 rounded-md focus:outline-red-500"
              maxLength={1}
            ></input>
            <input
              name="otp[]"
              className="p-5 border h-14 rounded-md focus:outline-red-500"
              maxLength={1}
            ></input>
            <input
              name="otp[]"
              className="p-5 border h-14 rounded-md focus:outline-red-500"
              maxLength={1}
            ></input>
          </div>
          <button className="bg-[#D41F13] w-full py-3 rounded-full text-white mt-10">
            Verifikasi Kode
          </button>
        </form>
      </div>
    </main>
  );
}

export default VErifikasiDarurat;
