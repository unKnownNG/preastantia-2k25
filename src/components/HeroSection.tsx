"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen">
      {/* 🔹 Fullscreen Fixed Background */}
      <div className="fixed inset-0 -z-10 ml-19">
        <Image
          src="/img/bg/bg1.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 🔹 Dark Overlay (covers entire page) */}
      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen px-4 text-center">
        
        {/* First Logo */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
          <Image
            src="/logo/logo2.png"
            alt="Logo 1"
            fill
            className="object-contain"
          />
        </div>

        {/* Optional text */}
        <div className="text-primaryColor font-bold text-xs sm:text-sm md:text-base lg:text-lg max-w-xl mt-6 text-center">
          Proudly Presents
        </div>

        {/* Second Logo */}
        <div className="flex-shrink-0 relative w-70 h-46 md:w-86 md:h-50 lg:w-132 lg:h-76 mt-6">
          <Image
            src="/logo/logo.png"
            alt="Logo 2"
            fill
            className="object-contain animate-float"
          />
        </div>

        {/* Main Text */}
        <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mt-6 drop-shadow-lg">
          DEPARTMENT OF <br />
          ELECTRONICS AND COMMUNICATION ENGINEERING
        </p>
      </div>
    </div>
  );
}
