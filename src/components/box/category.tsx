// asset svg
import Nurse from "@/assets/logo/home/nurse";
import Stethoscope from "@/assets/logo/home/stehethoscope";
import Booking from "@/assets/logo/home/booking";
import Literasi from "@/assets/logo/home/literasi";

function Category() {
  return (
    <div className="bg-white shadow-xl rounded-xl py-3 px-5 mt-5 border border-gray-100 flex text-[12px] justify-between text-[#3A3A3A]">
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="w-12 h-12 border rounded-md flex justify-center items-center">
        <Nurse />
      </div>
      <p className="font-semibold">Jadwal</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="w-12 h-12 border rounded-md flex justify-center items-center">
        <Stethoscope />
      </div>
      <p className="font-semibold">Konsultasi</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="w-12 h-12 border rounded-md flex justify-center items-center">
        <Booking/>
      </div>
      <p className="font-semibold">Booking</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="w-12 h-12 border rounded-md flex justify-center items-center">
        <Literasi/>
      </div>
      <p className="font-semibold">Literasi</p>
    </div>
  </div>
  )
}

export default Category