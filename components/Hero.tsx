"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-warmyellow min-h-screen flex flex-col items-center justify-center text-center py-16 px-6">
      <motion.img
        src="/tes.png"
        alt="Foto Freedy"
        className="w-48 h-48 rounded-full mb-6 border-4 border-peach"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-4xl font-bold mb-2 text-third"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Halo 👋, Saya <span className="text-primary">Freedy</span>{" "}
      </motion.h1>
      <p className="max-w-md text- text-secondary">
        Saya seorang Web Developer yang fokus pada desain UI modern dan
        pengembangan dengan React & Next.js.
      </p>
      <div className="flex gap-4 mt-6">
        <a
          href="#projects"
          className="px-5 py-2 rounded hover:opacity-90 transition font-semibold"
          style={{
            backgroundColor: "#d02008",
            color: "#fdf2d4",
          }} /* primary bg */
        >
          Lihat Proyek
        </a>
        <a
          href="#contact"
          className="px-5 py-2 rounded hover:opacity-90 transition font-semibold"
          style={{
            border: "2px solid #fca931",
            color: "#d02008",
            backgroundColor: "transparent",
          }}
        >
          Hubungi Saya
        </a>
      </div>
    </section>
  );
}
