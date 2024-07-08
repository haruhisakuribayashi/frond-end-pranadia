import Link from "next/link";
// dokter
import Nindya from "@/assets/dokter/nindya.png";
import Bagus from "@/assets/dokter/bagus.png";
import Riana from "@/assets/dokter/riana.png";
import Mulfi from "@/assets/dokter/mulfi.png";
import CardDokter from "@/components/card/dokter";
import dokter from "@/constant/data/dokter";

function Dokter() {
  return (
    <>
      <div className="flex justify-between mt-5">
        <h1 className="font-bold">Dokter Kami</h1>
        <Link href={"/dokter"} className="text-[#F7490D] font-medium text-sm">
          Lihat Semua
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {dokter
          .filter((_, index) => index < 4)
          .map((person, index) => (
            <CardDokter image={person.photo} key={index} id={index + 1}>
              <p className="text-[10px] mt-3 text-center">{person.name}</p>
              <p className="text-[10px] text-center text-red-600">
                {person.specialist}
              </p>
            </CardDokter>
          ))}
      </div>
    </>
  );
}

export default Dokter;
