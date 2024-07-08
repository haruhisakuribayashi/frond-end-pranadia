import AppBarBack from "@/components/appbar/appbar";
import React from "react";

function Notifikasi() {
  return (
    <main className="pb-16">
      <AppBarBack menu="Notifikasi" />

      <div className="flex flex-col gap-2">
        {/* section day */}
        <div className="flex flex-col px-6 mt-5 gap-2">
          <h3 className="text-sm">Hari Ini</h3>

          <div className="px-1 py-4 flex gap-1">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-red-400"></div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h1 className="text-xs font-bold">Appintment Success</h1>
                <p className="text-xs text-[#767676]">1h</p>
              </div>
              <p className="text-[10px] text-[#484C52]">
                Selamat - Booking untuk jadwal konsultasi telah terkonfirmasi
                pada tanggal 20 April 2023 08:00
              </p>
            </div>
          </div>

          <div className="px-1 py-4 flex gap-1">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-red-400"></div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h1 className="text-xs font-bold">Appintment Success</h1>
                <p className="text-xs text-[#767676]">1h</p>
              </div>
              <p className="text-[10px] text-[#484C52]">
                Selamat - Booking untuk jadwal konsultasi telah terkonfirmasi
                pada tanggal 20 April 2023 08:00
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-6 mt-5 gap-2">
          <h3 className="text-sm">Kemarin</h3>

          <div className="px-1 py-4 flex gap-1">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-red-400"></div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h1 className="text-xs font-bold">Appintment Success</h1>
                <p className="text-xs text-[#767676]">1h</p>
              </div>
              <p className="text-[10px] text-[#484C52]">
                Selamat - Booking untuk jadwal konsultasi telah terkonfirmasi
                pada tanggal 20 April 2023 08:00
              </p>
            </div>
          </div>

          <div className="px-1 py-4 flex gap-1">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-red-400"></div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h1 className="text-xs font-bold">Appintment Success</h1>
                <p className="text-xs text-[#767676]">1h</p>
              </div>
              <p className="text-[10px] text-[#484C52]">
                Selamat - Booking untuk jadwal konsultasi telah terkonfirmasi
                pada tanggal 20 April 2023 08:00
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-6 mt-5 gap-2">
          <h3 className="text-sm">Hari Ini</h3>

          <div className="px-1 py-4 flex gap-1">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-red-400"></div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h1 className="text-xs font-bold">Appintment Success</h1>
                <p className="text-xs text-[#767676]">1h</p>
              </div>
              <p className="text-[10px] text-[#484C52]">
                Selamat - Booking untuk jadwal konsultasi telah terkonfirmasi
                pada tanggal 20 April 2023 08:00
              </p>
            </div>
          </div>

          <div className="px-1 py-4 flex gap-1">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-red-400"></div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h1 className="text-xs font-bold">Appintment Success</h1>
                <p className="text-xs text-[#767676]">1h</p>
              </div>
              <p className="text-[10px] text-[#484C52]">
                Selamat - Booking untuk jadwal konsultasi telah terkonfirmasi
                pada tanggal 20 April 2023 08:00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </main>
  );
}

export default Notifikasi;
