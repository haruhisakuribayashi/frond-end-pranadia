"use client";
import React, { useState } from "react";
import { addDays, startOfWeek } from "date-fns";
import useCreatePromise from "@/store/use-create-promise";

export function getWeekdays(from: number = 0, until: number = 31) {
  const start = startOfWeek(new Date(), { weekStartsOn: 1 }); // Start of the week on Monday
  const weekdays = [];

  for (let i = from; i < until; i++) {
    const day = addDays(start, i);
    weekdays.push({
      date: day,
      day: day.toLocaleString("id-ID", { weekday: "short" }),
      month: day.toLocaleString("id-ID", { month: "short" }),
      dateNumber: day.getDate(),
    });
  }

  return weekdays;
}

export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function InputDate() {
  const weekdays = getWeekdays();
  const [select, setSelect] = useState<number>(0);
  const { addPromise } = useCreatePromise();

  return (
    <div className="space-y-2">
      <label htmlFor="">Pilih Tanggal</label>
      <input
        type="date"
        defaultValue={formatDate(weekdays[select].date)}
        className="hidden"
        name="date"
      />
      <div className="w-full overflow-x-scroll flex gap-2">
        {weekdays.map((day, index) => (
          <div
            className={`border ${
              select == index
                ? "border-red-600 text-white bg-red-600"
                : "border-[#B9B9B9]"
            } hover:bg-red-600 hover:text-white hover:border-red-600 duration-500 rounded-md px-2 py-3 inline-block text-xs text-center space-y-1 overflow-hidden cursor-pointer min-w-14`}
            key={index}
            onClick={() => setSelect((prevState) => index)}
          >
            <div className="text-xs">{day.month}</div>
            <div className="font-bold text-sm">{day.date.getDate()}</div>
            <div className="mx-auto text-xs text-clip w-8 overflow-hidden">
              {day.day}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputDate;
