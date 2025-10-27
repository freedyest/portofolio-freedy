"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-20 bg-gray-950 text-white px-6">
      <motion.img
        src="/tes.png"
        alt="Foto Freedy"
        className="w-32 h-32 rounded-full mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-4xl font-bold mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Halo 👋, Saya <span className="text-blue-400">Freedy</span>
      </motion.h1>

      <p className="text-gray-400 max-w-md">
        Saya seorang Web Developer yang fokus pada desain UI modern dan
        pengembangan dengan React & Next.js.
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href="#projects"
          className="bg-blue-600 px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Lihat Proyek
        </a>
        <a
          href="#contact"
          className="border border-gray-500 px-5 py-2 rounded hover:bg-gray-800 transition"
        >
          Hubungi Saya
        </a>
      </div>
    </section>
  );
}
