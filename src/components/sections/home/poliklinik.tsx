import Link from "next/link";
// asset svg
import Stethoscope from "@/assets/logo/home/stehethoscope";
import Heart from "@/assets/logo/poli/heart";
import Emphatize from "@/assets/logo/poli/emphatize";
import Lungs from "@/assets/logo/poli/lungs";
import Tooth from "@/assets/logo/poli/tooth";
import Hospital from "@/assets/logo/poli/hospital";

function Poliklinik() {
  return (
    <>
      <div className="flex justify-between mt-5">
        <h1 className="font-bold">Poliklinik</h1>
        <Link href={'/medrek'} className="text-[#F7490D] font-medium text-sm">Lihat Semua</Link>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-5">
        <Link href={'/'} className="bg-white border px-2 py-2 rounded-md flex divide-x">
          <div className="w-[40%] flex justify-center items-center">
            <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
              <Heart />
            </div>
          </div>
          <div className="px-2 w-[60%] flex justify-center items-center">
            <p className="text-[10px] font-medium text-[#505050]">Poliklinik Jantung</p>
          </div>
        </Link>

        <Link href={'/'} className="bg-white border px-2 py-2 rounded-md flex divide-x">
          <div className="w-[40%] flex justify-center items-center">
            <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
              <Emphatize />
            </div>
          </div>
          <div className="px-2 w-[60%] flex justify-center items-center">
            <p className="text-[10px] font-medium text-[#505050]">Poliklinik Penyakit Dalam</p>
          </div>
        </Link>

        <Link href={'/'} className="bg-white border px-2 py-2 rounded-md flex divide-x">
          <div className="w-[40%] flex justify-center items-center">
            <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
              <Lungs />
            </div>
          </div>
          <div className="px-2 w-[60%] flex justify-center items-center">
            <p className="text-[10px] font-medium text-[#505050]">Poliklinik Paru</p>
          </div>
        </Link>

        <Link href={'/'} className="bg-white border px-2 py-2 rounded-md flex divide-x">
          <div className="w-[40%] flex justify-center items-center">
            <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
              <Tooth />
            </div>
          </div>
          <div className="px-2 w-[60%] flex justify-center items-center">
            <p className="text-[10px] font-medium text-[#505050]">Poliklinik Gigi & Mulut</p>
          </div>
        </Link>

        <Link href={'/'} className="bg-white border px-2 py-2 rounded-md flex divide-x">
          <div className="w-[40%] flex justify-center items-center">
            <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
              <Stethoscope />
            </div>
          </div>
          <div className="px-2 w-[60%] flex justify-center items-center">
            <p className="text-[10px] font-medium text-[#505050]">Poliklinik Umum</p>
          </div>
        </Link>

        <Link href={'/'} className="bg-white border px-2 py-2 rounded-md flex divide-x">
          <div className="w-[40%] flex justify-center items-center">
            <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
              <Hospital />
            </div>
          </div>
          <div className="px-2 w-[60%] flex justify-center items-center">
            <p className="text-[10px] font-medium text-[#505050]">Instalasi Gawat Darurat</p>
          </div>
        </Link>

      </div>
    </>
  )
}

export default Poliklinik