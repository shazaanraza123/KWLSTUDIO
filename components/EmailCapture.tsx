"use client";

import { motion, useInView } from "framer-motion";
import { FormEvent, useRef, useState } from "react";

export default function EmailCapture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-25%" });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim() || phone.trim()) setSubmitted(true);
  }

  return (
    <section
      id="notify"
      ref={ref}
      className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm"
      >
        {submitted ? (
          <p className="text-center text-[9px] tracking-[0.4em] text-[#0D0D0D]/50">
            NOTIFIED
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER EMAIL"
              className="w-full border-b border-[#0D0D0D]/15 bg-transparent pb-3 text-center text-[9px] tracking-[0.3em] text-[#0D0D0D] placeholder:text-[#0D0D0D]/25 outline-none transition-colors duration-500 focus:border-[#0D0D0D]/40"
            />

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="ENTER NUMBER"
              className="w-full border-b border-[#0D0D0D]/15 bg-transparent pb-3 text-center text-[9px] tracking-[0.3em] text-[#0D0D0D] placeholder:text-[#0D0D0D]/25 outline-none transition-colors duration-500 focus:border-[#0D0D0D]/40"
            />

            <button
              type="submit"
              className="w-full pt-2 text-[9px] tracking-[0.45em] text-[#0D0D0D]/60 transition-colors duration-500 hover:text-[#0D0D0D]"
            >
              NOTIFY ME
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
