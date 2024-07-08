import Link from "next/link";

// asset
import lifestyle from "@/assets/literasi/life-style.png";
import BoxLiterasiArtikel from "@/components/box/literasi-artikel";

import articels from "@/constant/data/artikel";

function LiterasiArtikel() {
  return (
    <>
      <div className="flex justify-between mt-5">
        <h1 className="font-bold">Literasi & Artikel</h1>
        <Link href={"/articels"} className="text-[#F7490D] font-medium text-sm">
          Lihat Semua
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {articels
          .filter((_, index) => index < 2)
          .map((articel, index) => (
            <BoxLiterasiArtikel
              key={index}
              id={index + 1}
              src={articel.thumbnail}
              title={articel.title}
              category={articel.category}
            />
          ))}
      </div>
    </>
  );
}

export default LiterasiArtikel;
