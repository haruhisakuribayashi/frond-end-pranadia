import AppBarBack from "@/components/appbar/appbar";
import React from "react";

function Page() {
  return (
    <main className="pb-20">
      <AppBarBack menu="Kebijakan" />
      <div className="mx-6 mt-5 space-y-8">
        <div className="py-3 border-b mb-8">
          <h1 className="text-lg font-normal text-[#D41F13]">
            Berikut Kebijakan dan Privasi Aplikasi care.pranadiamedika.id
          </h1>
        </div>

        <p className="text-xs">
          Selamat datang di Klinik Pranadia Medika! Kami menghargai kepercayaan
          Anda dan kami berkomitmen untuk melindungi informasi pribadi Anda
          dengan sangat serius. Kebijakan privasi ini dirancang untuk memberikan
          pemahaman yang jelas tentang bagaimana kami mengumpulkan, menggunakan,
          mengungkap, dan melindungi informasi pribadi Anda ketika Anda
          menggunakan aplikasi e-patient atau layanan rekam medis kami.
        </p>

        <h1 className="text-xs font-semibold">
          1. Pengumpulan Informasi Pribadi
        </h1>

        <p className="text-xs">
          Kami dapat mengumpulkan berbagai jenis informasi pribadi, termasuk
          namun tidak terbatas pada nama, alamat, nomor telepon, alamat email,
          dan informasi medis saat Anda menggunakan aplikasi e-patient atau
          layanan rekam medis kami. Kami hanya akan mengumpulkan informasi yang
          diperlukan untuk menyediakan layanan kami dan sesuai dengan hukum yang
          berlaku.
        </p>

        <h1 className="text-xs font-semibold">
          2. Penggunaan Informasi Pribadi
        </h1>

        <div>
          <p className="text-xs">
            Informasi pribadi yang kami kumpulkan akan digunakan untuk tujuan
            berikut:
          </p>
          <ul
            className="list-discs text-xs"
            style={{
              listStyle: "disc",
              listStylePosition: "inside",
            }}
          >
            <li className="list-discs">
              Menyediakan layanan medis dan perawatan yang sesuai.
            </li>
            <li>Mengelola dan memelihara catatan medis Anda.</li>
            <li>
              Mengirimkan pemberitahuan dan pengingat terkait perjanjian dan
              janji temu medis..
            </li>
            <li>
              Melakukan analisis data untuk meningkatkan kualitas layanan kami.
            </li>
            <li>
              Menghubungi Anda terkait layanan atau informasi medis yang
              relevan.
            </li>
          </ul>
        </div>

        <h1 className="text-xs font-semibold">3. Keamanan Informasi</h1>

        <p className="text-xs">
          Kami mengambil langkah-langkah keamanan yang sesuai untuk melindungi
          informasi pribadi Anda dari akses yang tidak sah, pengungkapan,
          perubahan, atau penghancuran yang tidak sah. Kami mematuhi standar
          keamanan data yang ketat dan hanya memberikan akses ke informasi
          pribadi Anda kepada personel yang membutuhkannya untuk memberikan
          layanan yang tepat.
        </p>

        <h1 className="text-xs font-semibold">
          4. Pengungkapan Informasi Pribadi
        </h1>

        <p className="text-xs">
          Kami tidak akan mengungkapkan informasi pribadi Anda kepada pihak
          ketiga tanpa izin Anda, kecuali dalam situasi yang diizinkan oleh
          hukum atau jika diperlukan untuk menyediakan layanan medis yang tepat.
        </p>

        <h1 className="text-xs font-semibold">
          5. Akses dan Koreksi Informasi Pribadi
        </h1>

        <p className="text-xs">
          Anda memiliki hak untuk mengakses dan memperbarui informasi pribadi
          Anda yang kami simpan. Jika Anda ingin mengakses atau mengoreksi
          informasi Anda, silakan hubungi kami melalui kontak yang tersedia di
          aplikasi e-patient.
        </p>

        <h1 className="text-xs font-semibold">
          6. Perubahan pada Kebijakan Privasi
        </h1>

        <p className="text-xs">
          Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk
          mencerminkan perubahan dalam praktik kami atau perubahan hukum yang
          berlaku. Pembaruan akan diposting di aplikasi e-patient kami, dan kami
          mendorong Anda untuk secara berkala memeriksa kebijakan privasi ini.
        </p>

        <p className="text-xs">
          Kami berkomitmen untuk melindungi privasi dan keamanan informasi
          pribadi Anda. Jika Anda memiliki pertanyaan atau kekhawatiran tentang
          kebijakan privasi kami atau bagaimana kami mengelola informasi Anda,
          jangan ragu untuk menghubungi kami.
        </p>

        <p className="text-xs">
          Terima kasih telah menggunakan aplikasi e-patient kami di Klinik
          Pranadia Medika.
        </p>

        <p className="text-xs text-gray-500">
          **Terakhir diperbarui pada 10 Oktober 2023**
        </p>
      </div>
    </main>
  );
}

export default Page;
