"use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen"; 
import Footer from "@/components/Footer";




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
      
      {/* <Footer/> */}
    </>
  );
}
