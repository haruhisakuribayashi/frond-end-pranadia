"use client";
import Image from "next/legacy/image";
import Pranadia from "@/assets/prandia-logo.png";
import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

function HomeBar() {
  const [session, setSession] = useState<Session | null>(null);

  const loadSession = async () => {
    const session = await getSession();
    setSession(session);
  };

  useEffect(() => {
    loadSession();
  }, []);
  return (
    <div>
      {session ? (
        <div className="flex gap-4 w-full justify-between">
          <div className="flex gap-4">
            <div className="h-10 w-10 bg-slate-300 rounded-full"></div>
            <div>
              <h3 className="text-xs">Good Morning,</h3>
              <h1 className="text-sm font-bold">{session.user.user.name}</h1>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="30"
            fill="none"
            viewBox="0 0 26 30"
          >
            <g filter="url(#filter0_d_95_1719)">
              <path
                stroke="#3A3A3A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 17v1a3 3 0 006 0v-1M11 5a2 2 0 114 0 7 7 0 014 6v3a4 4 0 002 3H5a4 4 0 002-3v-3a7 7 0 014-6z"
              ></path>
              <circle cx="17" cy="7" r="3" fill="#FFC700"></circle>
            </g>
            <defs>
              <filter
                id="filter0_d_95_1719"
                width="32"
                height="32"
                x="-3"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_95_1719"
                ></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_95_1719"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
      ) : (
        <Image src={Pranadia} />
      )}
    </div>
  );
}

export default HomeBar;
