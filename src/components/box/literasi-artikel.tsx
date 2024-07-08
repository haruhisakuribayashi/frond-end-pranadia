import Link from "next/link";
import React from "react";

function BoxLiterasiArtikel({
  id,
  src,
  title,
  category,
}: {
  id: number;
  src: string;
  title: string;
  category: string;
}) {
  return (
    <Link href={"/articels/" + id}>
      <div
        className="bg-blue-500 rounded-lg h-52 flex relative overflow-hidden"
        style={{
          background: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-full h-1/2 bg-white absolute bottom-0 px-2 flex flex-col justify-end py-2 gap-2"
          style={{
            background:
              "linear-gradient(181.46deg, rgba(0, 0, 0, 0) 1.24%, #D41F13 98.75%)",
          }}
        >
          <span className="bg-red-50 text-red-500 w-fit px-3 rounded-full text-xs">
            {category}
          </span>
          <p className="text-xs text-white font-medium line-camp-2">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default BoxLiterasiArtikel;
