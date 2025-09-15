import React from "react";
import Image from "next/image";

export default function Sponsors() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 p-6">
        <h1 className="text-4xl">Our Sponsors</h1>

        <div className="flex flex-col gap-6 items-center">
          <a
            href="https://primititinfra.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sponsors/primit.png"
              alt="Sponsor 1"
              width={340}   // adjust size
              height={210}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform p-6"
            />
          </a>

          <a
            href="https://brixen.co.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sponsors/BrixEn.jpg"
              alt="Sponsor 2"
              width={160}
              height={80}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </a>

          <a
            href="https://www.capitalcranes.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sponsors/sponsor3.jpg"
              alt="Sponsor 1"
              width={640}   // adjust size
              height={310}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform p-6"
            />
          </a>
        </div>
      </div>
    </>
  );
}
