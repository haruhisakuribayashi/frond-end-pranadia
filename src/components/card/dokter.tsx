import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/legacy/image";
import Link from "next/link";

type Props = {
  id: number;
  image: StaticImport | string;
  children: string | JSX.Element | JSX.Element[];
};
function CardDokter({ image, children, id }: Props) {
  return (
    <Link
      href={"/dokter/" + id}
      className="bg-white p-4 rounded-lg flex flex-col justify-start items-center"
      style={{
        boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
      }}
    >
      <Image src={image} alt={"Dokter"} width={75} height={75} />
      {children}
    </Link>
  );
}

export default CardDokter;
