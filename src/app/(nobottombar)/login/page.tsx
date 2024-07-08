"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/legacy/image";

// asset
import Pranadia from "@/assets/prandia-logo.png";
import Google from "@/assets/logo/google.png";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type FormData = z.infer<typeof FormSchema>;

function Login() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // e.preventDefault();
    const { email, password } = data;
    // console.log(data.email);
    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (result?.ok) {
      console.log("berhasil");
      router.push("/home");
    } else {
      alert("email atau password salah");
    }
  };

  return (
    <main className="flex flex-col gap-14 px-6 justify-center items-center h-[100%]">
      <Image src={Pranadia} />

      {/* form */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        method="post"
        className="w-full flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...form.register("email")}
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
            placeholder="Masukan Email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            {...form.register("password")}
            type="password"
            id="password"
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
            placeholder="Masukan password"
          />
        </div>

        <Link
          href={"/forgot-password"}
          className="text-[#D41F13] font-semibold text-xs"
        >
          Lupa Kata Sandi?
        </Link>

        <button className="bg-[#D41F13] w-full py-3 rounded-full text-white">
          Login
        </button>
        <div className="w-full text-center">
          <p className="font-medium text-xs">
            Tidak punya akun?
            <span>
              <Link
                href={"/register"}
                className="text-[#D41F13] font-semibold text-xs"
              >
                Daftar
              </Link>
            </span>
          </p>
        </div>

        <span className="text-[#939393] text-xs font-medium text-center">
          Atau
        </span>

        <button
          type="button"
          className="bg-white border rounded-full w-full py-3 px-5 text-xs font-medium flex justify-center items-center gap-3 hover:bg-slate-100 duration-500"
        >
          <Image src={Google} />
          Login dengan Google
        </button>
      </form>
    </main>
  );
}

export default Login;
