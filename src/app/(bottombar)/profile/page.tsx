"use client";
import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi2";
import AppBar from "@/components/appbar/appbar";
import Header from "@/components/sections/profile/header";
import Image from "next/image";
import Right from "@/assets/profile/right.png";
import Left from "@/assets/profile/left.png";
import { signOut } from "next-auth/react";

function Profile() {
  return (
    <main className="pb-16">
      <AppBar menu="Profile" notif={true} />
      <Header />
      <div className="relative bg-[#FAFAFA] mx-5 mt-5 rounded-3xl overflow-hidden h-20">
        <div className="absolute px-4 py-2 w-full mt-5 rounded-3xl overflow-hidden grid grid-cols-2 divide-x">
          <div className="flex flex-col text-center">
            <h3 className="text-[#001533] font-semibold text-base">2</h3>
            <p className="text-[10px] text-[#B7B7B7]">Anggota Keluarga</p>
          </div>
          <div className="flex flex-col text-center">
            <h3 className="text-[#001533] font-semibold text-base">6</h3>
            <p className="text-[10px] text-[#B7B7B7]">Kunjungan</p>
          </div>
        </div>
        <Image src={Left} alt="" className="absolute bottom-0 right-0" />
        <Image src={Right} alt="" className="absolute top-0 left-0" />
      </div>

      <div className="flex flex-col gap-2 mt-5 mx-5">
        <Link
          href={"/profile/anggota-keluarga"}
          className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg"
        >
          <div className="flex justify-center items-center gap-3">
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V20L12 17L7 20V6C7 5.46957 7.21071 4.96086 7.58579 4.58579C7.96086 4.21071 8.46957 4 9 4Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-normal">Anggota Keluarga</span>
          </div>
          <HiOutlineChevronRight color="#B7B7B7" size={24} />
        </Link>

        <Link
          href={"/profile"}
          className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg"
        >
          <div className="flex justify-center items-center gap-3">
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H13.5M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7ZM18.42 15.61C18.615 15.415 18.8465 15.2603 19.1013 15.1547C19.3561 15.0492 19.6292 14.9949 19.905 14.9949C20.1808 14.9949 20.4539 15.0492 20.7087 15.1547C20.9635 15.2603 21.195 15.415 21.39 15.61C21.585 15.805 21.7397 16.0365 21.8452 16.2913C21.9508 16.5461 22.0051 16.8192 22.0051 17.095C22.0051 17.3708 21.9508 17.6439 21.8452 17.8987C21.7397 18.1535 21.585 18.385 21.39 18.58L18 22H15V19L18.42 15.61Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-normal">Update Profil</span>
          </div>
          <HiOutlineChevronRight color="#B7B7B7" size={24} />
        </Link>

        <Link
          href={"/history"}
          className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg"
        >
          <div className="flex justify-center items-center gap-3">
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8V12L14 14M3.0498 11.0001C3.2739 8.80013 4.30007 6.75968 5.93254 5.26803C7.56501 3.77639 9.6895 2.93795 11.9007 2.9127C14.1119 2.88744 16.255 3.67713 17.9211 5.1311C19.5872 6.58507 20.6597 8.60155 20.934 10.7958C21.2083 12.99 20.6651 15.2085 19.4082 17.0278C18.1512 18.8472 16.2684 20.1401 14.1191 20.6599C11.9697 21.1797 9.70421 20.89 7.7548 19.8461C5.80539 18.8022 4.30853 17.0772 3.5498 15.0001M3.0498 20.0001V15.0001H8.0498"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-normal">History</span>
          </div>
          <HiOutlineChevronRight color="#B7B7B7" size={24} />
        </Link>

        <Link
          href={"/profile/help-center"}
          className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg"
        >
          <div className="flex justify-center items-center gap-3">
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8H17M15 12H17M7 16H17M3 7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H18C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V17C21 17.7956 20.6839 18.5587 20.1213 19.1213C19.5587 19.6839 18.7956 20 18 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V7ZM7 10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12C9.53043 12 10.0391 11.7893 10.4142 11.4142C10.7893 11.0391 11 10.5304 11 10C11 9.46957 10.7893 8.96086 10.4142 8.58579C10.0391 8.21071 9.53043 8 9 8C8.46957 8 7.96086 8.21071 7.58579 8.58579C7.21071 8.96086 7 9.46957 7 10Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-normal">Help Center</span>
          </div>
          <HiOutlineChevronRight color="#B7B7B7" size={24} />
        </Link>

        <Link
          href={"/profile/kebijakan"}
          className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg"
        >
          <div className="flex justify-center items-center gap-3">
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-normal">Kebijakan</span>
          </div>
          <HiOutlineChevronRight color="#B7B7B7" size={24} />
        </Link>

        <Link
          href={"/tentang-aplikasi"}
          className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg"
        >
          <div className="flex justify-center items-center gap-3">
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V9C10 9.26522 9.89464 9.51957 9.70711 9.70711C9.51957 9.89464 9.26522 10 9 10H5C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V5Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 5C14 4.73478 14.1054 4.48043 14.2929 4.29289C14.4804 4.10536 14.7348 4 15 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V9C20 9.26522 19.8946 9.51957 19.7071 9.70711C19.5196 9.89464 19.2652 10 19 10H15C14.7348 10 14.4804 9.89464 14.2929 9.70711C14.1054 9.51957 14 9.26522 14 9V5Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 15C4 14.7348 4.10536 14.4804 4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14H9C9.26522 14 9.51957 14.1054 9.70711 14.2929C9.89464 14.4804 10 14.7348 10 15V19C10 19.2652 9.89464 19.5196 9.70711 19.7071C9.51957 19.8946 9.26522 20 9 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 15C14 14.7348 14.1054 14.4804 14.2929 14.2929C14.4804 14.1054 14.7348 14 15 14H19C19.2652 14 19.5196 14.1054 19.7071 14.2929C19.8946 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H15C14.7348 20 14.4804 19.8946 14.2929 19.7071C14.1054 19.5196 14 19.2652 14 19V15Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-normal">Tentang Aplikasi</span>
          </div>
          <HiOutlineChevronRight color="#B7B7B7" size={24} />
        </Link>

        <button
          onClick={() => signOut()}
          className="flex justify-between py-2 items-center px-2 bg-red-400 hover:bg-red-500 text-white rounded-lg"
        >
          <div className="flex justify-center items-center gap-3">
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V9C10 9.26522 9.89464 9.51957 9.70711 9.70711C9.51957 9.89464 9.26522 10 9 10H5C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V5Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 5C14 4.73478 14.1054 4.48043 14.2929 4.29289C14.4804 4.10536 14.7348 4 15 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V9C20 9.26522 19.8946 9.51957 19.7071 9.70711C19.5196 9.89464 19.2652 10 19 10H15C14.7348 10 14.4804 9.89464 14.2929 9.70711C14.1054 9.51957 14 9.26522 14 9V5Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 15C4 14.7348 4.10536 14.4804 4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14H9C9.26522 14 9.51957 14.1054 9.70711 14.2929C9.89464 14.4804 10 14.7348 10 15V19C10 19.2652 9.89464 19.5196 9.70711 19.7071C9.51957 19.8946 9.26522 20 9 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 15C14 14.7348 14.1054 14.4804 14.2929 14.2929C14.4804 14.1054 14.7348 14 15 14H19C19.2652 14 19.5196 14.1054 19.7071 14.2929C19.8946 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H15C14.7348 20 14.4804 19.8946 14.2929 19.7071C14.1054 19.5196 14 19.2652 14 19V15Z"
                  stroke="#D41F13"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-normal">Keluar Aplikasi</span>
          </div>
          <HiOutlineChevronRight color="#B7B7B7" size={24} />
        </button>
      </div>

      <div className="h-6"></div>
    </main>
  );
}

export default Profile;
