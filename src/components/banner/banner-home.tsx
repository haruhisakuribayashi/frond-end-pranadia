import Link from "next/link";
import Image from "next/legacy/image";
import BannerDokter from "@/assets/banner/banner-dokter.png";

function BannerHome() {
  return (
    <div className="bg-gradient-to-r from-[#D52013] to-[#F7490D] p-7 rounded-xl mt-5 relative overflow-hidden">
    <div className="absolute w-40 h-40 bg-[#FFFFFF] bg-opacity-20 rounded-full -top-20 right-0">
    </div>
    <div className="absolute w-40 h-40 bg-[#FFFFFF] bg-opacity-20 rounded-full -top-2 -left-28">
    </div>
    <div className="absolute w-40 h-40 bg-[#FFFFFF] bg-opacity-20 rounded-full -bottom-20 -left-9">
    </div>


    <div className="absolute right-0 -bottom-2">
      <Image src={BannerDokter} objectFit="cover" />
    </div>
    
    <div className="text-white relative">
      <h1 className="font-bold text-xl">Medical Check</h1>
      <p className="text-xs w-[70%] mt-2">Check your health contidition regulary to minimize incidine of disease in future</p>
      <Link href={'/'} className="block mt-2 max-w-fit text-[#F7490D] bg-white rounded-full px-7 py-1 font-bold text-sm">
        Check Now
      </Link>
    </div>

  </div>
  )
}

export default BannerHome