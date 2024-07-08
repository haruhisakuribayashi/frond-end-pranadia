"use client";
import React, { useEffect, useState } from "react";

function CountDown() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      // Clean up the interval on component unmount or when the countdown reaches zero
      return () => clearInterval(intervalId);
    }
  }, [count]);

  if (count == 0) {
    return (
      <div className="border p-5 w-full rounded-md bg-green-400 text-white text-center">
        Masukan Kode ini dibawah ini <span className="font-bold">12345</span>
      </div>
    );
  }
  return (
    <div className="border p-5 w-full rounded-md">
      <p>
        Tunggu <span className="font-bold">{count}</span> detik untuk mengecek
      </p>
    </div>
  );
}

export default CountDown;
