import AppBarBack from "@/components/appbar/appbar";
import BoxLiterasiArtikel from "@/components/box/literasi-artikel";
import React from "react";
import { IoSearch } from "react-icons/io5";
import articels from "@/constant/data/artikel";

function page() {
  return (
    <main>
      <AppBarBack menu="Artikel" />
      <div className="mt-3 flex px-6 gap-2">
        <div className="relative flex-1 h-11 bg-[#F5F5F5] rounded-full flex">
          <IoSearch className="absolute top-1/2 -translate-y-[50%] left-4" />
          <input
            type="text"
            className="bg-transparent focus:outline-none w-full h-full focus:outline-red-200 rounded-full pl-10 pr-5"
            placeholder="Cari Poliklinik"
          />
        </div>

        <svg
          width="45"
          height="44"
          viewBox="0 0 45 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="45" height="44" rx="22" fill="#FFF1F1" />
          <path
            d="M23 15.25C23 15.8467 23.2371 16.419 23.659 16.841C24.081 17.2629 24.6533 17.5 25.25 17.5C25.8467 17.5 26.419 17.2629 26.841 16.841C27.2629 16.419 27.5 15.8467 27.5 15.25M23 15.25C23 14.6533 23.2371 14.081 23.659 13.659C24.081 13.2371 24.6533 13 25.25 13C25.8467 13 26.419 13.2371 26.841 13.659C27.2629 14.081 27.5 14.6533 27.5 15.25M23 15.25H14M27.5 15.25H32M16.25 22C16.25 22.5967 16.4871 23.169 16.909 23.591C17.331 24.0129 17.9033 24.25 18.5 24.25C19.0967 24.25 19.669 24.0129 20.091 23.591C20.5129 23.169 20.75 22.5967 20.75 22M16.25 22C16.25 21.4033 16.4871 20.831 16.909 20.409C17.331 19.9871 17.9033 19.75 18.5 19.75C19.0967 19.75 19.669 19.9871 20.091 20.409C20.5129 20.831 20.75 21.4033 20.75 22M16.25 22H14M20.75 22H32M26.375 28.75C26.375 29.3467 26.6121 29.919 27.034 30.341C27.456 30.7629 28.0283 31 28.625 31C29.2217 31 29.794 30.7629 30.216 30.341C30.6379 29.919 30.875 29.3467 30.875 28.75M26.375 28.75C26.375 28.1533 26.6121 27.581 27.034 27.159C27.456 26.7371 28.0283 26.5 28.625 26.5C29.2217 26.5 29.794 26.7371 30.216 27.159C30.6379 27.581 30.875 28.1533 30.875 28.75M26.375 28.75H14M30.875 28.75H32"
            stroke="#D41F13"
            stroke-width="1.63636"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="mx-6">
        <div className="grid grid-cols-2 gap-5 mt-5">
          {articels.map((articel, index) => (
            <BoxLiterasiArtikel
              key={index}
              id={index + 1}
              src={articel.thumbnail}
              title={articel.title}
              category={articel.category}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default page;
