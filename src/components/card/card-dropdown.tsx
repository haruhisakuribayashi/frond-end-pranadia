"use client";
import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

function CardDropdown({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div
      className={`bg-white w-full rounded-md py-1 divide-y-2 duration-300 transition-all flex flex-col ${className}`}
      style={{
        boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
      }}
    >
      <div
        className="flex-1 flex justify-between items-center py-4 px-6 cursor-pointer"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <h1 className="font-semibold text-sm">{title}</h1>
        <IoIosArrowDown
          className={`${
            open ? "rotate-0" : "rotate-180"
          } duration-500 transition-all`}
        />
      </div>
      {open && (
        <div
          className={`h-auto justify-between mx-6 transition-all duration-300 ease-in-out`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default CardDropdown;
