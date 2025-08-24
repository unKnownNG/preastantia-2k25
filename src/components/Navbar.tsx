"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  const [isClick, setisClick] = useState(false);
  const toggleNavBar = () => {
    setisClick(!isClick);
  };

  return (
    <nav className="bg-yellow-500/30 rounded-2xl backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <div className="flex items-center ">
            <div className="flex-shrink-0">
            <Image src = "/logo.png" alt="" width={50} height={50} />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/"
                className="text-white hover:bg-primaryColor hover:text-black rounded-lg p-2"
              >
                Home
              </Link>
              <Link
                href="/event"
                className="text-white hover:bg-primaryColor hover:text-black rounded-lg p-2"
              >
                Event
              </Link>
              <Link
                href="/team"
                className="text-white hover:bg-primaryColor hover:text-black rounded-lg p-2"
              >
                Team
              </Link>
              <Link
                href="/sponsor"
                className="text-white hover:bg-primaryColor hover:text-black rounded-lg p-2"
              >
                Sponsors
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavBar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={() => setisClick(false)}
              className="text-white block hover:bg-primaryColor hover:text-black rounded-lg p-2"
            >
              Home
            </Link>
            <Link
              href="/event"
              onClick={() => setisClick(false)}
              className="text-white block hover:bg-primaryColor hover:text-black rounded-lg p-2"
            >
              Event
            </Link>
            <Link
              href="/team"
              className="text-white block hover:bg-primaryColor hover:text-black rounded-lg p-2"
              onClick={() => setisClick(false)}
            >
              Team
            </Link>
             <Link
              href="/sponsor"
              className="text-white block hover:bg-primaryColor hover:text-black rounded-lg p-2"
              onClick={() => setisClick(false)}
            >
              Sponsors
            </Link> 
          </div>
        </div>
      )}
    </nav>
  );
}
