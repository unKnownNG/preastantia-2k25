"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="mx-auto rounded-md w-full h-[40rem] mb-20 overflow-hidden z-30 p-0 m-0">
        <div className="flex items-center flex-col justify-center px-2 m-0 md:px-10 py-4 w-full h-full">
          
          {/* First Logo (small square) */}
          <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36">
            <Image
              src="/logo/logo2.png"
              alt="ece"
              fill
              className="object-contain z-10"
            />
          </div>

          {/* Second Logo (16:9 and larger than first) */}
          <div className="flex-shrink-0 relative w-56 h-32 md:w-72 md:h-40 lg:w-96 lg:h-54 mt-6">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              fill
              className="object-contain animate-float"
            />
          </div>

          {/* Text */}
          <p className="text-primaryColor font-bold text-sm md:text-base lg:text-lg max-w-xl mt-6 text-center">
            DEPARTMENT OF <br />
            ELECTRONICS AND COMMUNICATION ENGINEERING
          </p>
        </div>
      </div>
    </>
  );
}
