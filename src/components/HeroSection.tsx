"use client";
import React from "react";
import Image from "next/image";


const words = [
  
  {
    text: "Praestantia",
    className: "text-primaryColor text-2xl md:text-3xl lg:text-5xl dark:text-primaryColor customfont",
  },
];

export default function HeroSection() {
  return (
    <>
      <div className="mx-auto rounded-md w-full h-[40rem] mb-20 overflow-hidden z-30 p-0 m-0">

          <div className="flex items-center flex-col justify-center px-2 m-0 md:px-10 py-4 w-full h-full">
            <div className="flex-shrink-0">
            <Image 
              src="/logo/logo.png" 
              alt="Logo" 
              width={250} 
              height={250} 
              className="w-36 h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 object-contain animate-float" 
            />
          </div>

          
          <p className="text-primaryColor text - bold text-sm md:text-base lg:text-lg max-w-xl mt-6 text-center ">
            DEPARTMENT OF <br />
            ELECTRONICS AND COMMUNICATION ENGINEERING
          </p>
      </div>
      </div>
    </>
  );
}
