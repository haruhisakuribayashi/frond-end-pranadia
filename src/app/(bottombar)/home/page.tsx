import Search from "@/components/input/search";
import Category from "@/components/box/category";
import BannerHome from "@/components/banner/banner-home";
import Poliklinik from "@/components/sections/home/poliklinik";
import Dokter from "@/components/sections/home/dokter";
import LiterasiArtikel from "@/components/sections/home/literasi-artikel";
import HomeBar from "@/components/appbar/home-bar";

export default function Home() {
  return (
    <main className="p-5 pb-20">
      <HomeBar />
      <Search />
      <Category />

      <BannerHome />
      <Poliklinik />
      <Dokter />
      <LiterasiArtikel />
    </main>
  );
}
