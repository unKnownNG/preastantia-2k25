"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Logo with scale-up animation */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }} // very small
        animate={{ scale: 1, opacity: 1 }}   // full size
        transition={{
          duration: 1,       // 1 sec
          ease: "easeOut",   // smooth
        }}
        className="relative"
      >
        <Image
          src="/logo/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="drop-shadow-lg"
        />

        {/* Crack effect overlay */}
        <motion.img
          src="/crack.png"
          alt="crack"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
}
