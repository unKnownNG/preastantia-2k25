"use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen"; 

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <HeroSection />
          {/* Video only visible at the bottom, showing top part */}
          <div className="fixed bottom-0 left-0 w-full h-full my-50vh overflow-hidden -z-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-top"
              src="/video/smoke.mp4" // Make sure this path is correct in the public folder
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      )}
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
