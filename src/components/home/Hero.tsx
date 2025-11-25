"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";


export function Hero() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold tracking-tighter mb-6 drop-shadow-2xl"
        >
          Hide<span className="text-primary">X</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 font-light tracking-wide drop-shadow-lg"
        >
          Masterfully handcrafted leather goods designed to age gracefully with
          you. Timeless elegance meets modern durability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="text-lg shadow-2xl">
            Shop Collection
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg border-2 border-white text-white hover:bg-white hover:text-black shadow-2xl backdrop-blur-sm"
          >
            Our Story
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </div>
  );
}
