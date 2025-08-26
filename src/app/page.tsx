"use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen"; 
import Footer from "@/components/Footer";

const CountDown = dynamic(() => import("../components/CountDown"), {
  ssr: false,
});

const images = [
  { src: "/img1.jpg", alt: "Image 1" },
  { src: "/img2.jpg", alt: "Image 2" },
  { src: "/img3.jpg", alt: "Image 3" }
];


export default function Home() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loading after 3s
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {loading ? <LoadingScreen /> : <HeroSection />}
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <HeroSection/> */}
      <div className="relative">
        <CountDown launchDate="2025-09-23T10:00:00" />
      </div>
      <Footer/>
    </>
  );
}
