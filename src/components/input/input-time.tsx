"use client";
import React, { useState } from "react";

function InputTime() {
  const [time, setTime] = useState<string | null>(null);
  const times = ["09:00 WIB - 13:00 WIB", "08:00 WIB - 09:00 WIB"];
  return (
    <div className="flex flex-col">
      <label htmlFor="">Pilih Waktu Janji</label>

      <div className="flex flex-wrap gap-2 mt-2">
        {times.map((value, index) => (
          <div key={index}>
            <label
              htmlFor={`time-${index}`}
              className={`cursor-pointer border border-red-600 ${
                time == value
                  ? "bg-red-600 text-white"
                  : "bg-white text-red-600"
              } px-2 text-xs py-4 rounded-full font-semibold cursor-pointer block`}
            >
              {value}
            </label>
            <input
              type="radio"
              id={`time-${index}`}
              name="time"
              className="hidden"
              defaultValue={value}
              onChange={() => setTime((prev) => value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputTime;
