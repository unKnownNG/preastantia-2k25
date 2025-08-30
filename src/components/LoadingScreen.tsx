"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            className="max-w-[600px] w-full h-auto"
            autoPlay
            muted
            playsInline
            onEnded={() => setIsLoading(false)} // hide after video finishes
          >
            <source src="/video/loading.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
