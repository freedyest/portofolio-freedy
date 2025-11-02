"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2 } from "lucide-react";
export default function Hero() {
  return (
    <section className="bg-warmyellow relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center py-16 pt-32 px-6">
      {/* content */}
      <div className="relative z-10 max-w-4xl mx-auto items-center flex flex-col">
        <motion.div
          className="relative inline-block mb-8 "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full z-0 bg-peach"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src="/tes.png"
            alt="Foto Freedy"
            className="w-48 h-48 z-10 rounded-full border-4 border-peach relative object-cover "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="border-warmyellow bg-primary absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center border-4 shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Code2 size={20} className="text-warmyellow" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" border-peach bg- text-primary bg-amber-500/10 inline-flex gap-2 px-4 py-2 rounded-full mb-8 border-2"
        >
          {"Welcome to my portfolio!"} <motion.span>✨</motion.span>
        </motion.div>
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
      </div>
    </section>
  );
}
