"use client"
import Head from "next/head";
import dynamic from "next/dynamic";

const CountDown = dynamic(() => import("../components/ui/CountDown"), {
  ssr: false,
});

const images = [
  { src: "/img1.jpg", alt: "Image 1" },
  { src: "/img2.jpg", alt: "Image 2" },
  { src: "/img3.jpg", alt: "Image 3" }
];


export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <CountDown launchDate="2025-09-23T10:00:00" />
      </div>
    </>
  );
}
