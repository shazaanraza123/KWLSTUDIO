"use client";

import { motion } from "framer-motion";
import SpinningStar from "./SpinningStar";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        <SpinningStar size={280} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mt-16 text-center md:mt-20"
        >
          <p className="text-[9px] tracking-[0.5em] text-[#0D0D0D]">KWL STUDIO</p>
          <p className="mt-5 text-[8px] tracking-[0.35em] text-[#0D0D0D]/40">DROP 001</p>
          <p className="mt-2 text-[8px] tracking-[0.25em] text-[#0D0D0D]/25">001 / 100</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
