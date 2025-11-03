"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Github, Linkedin, Mail, Instagram } from "lucide-react";
export default function Hero() {
  const myAbility = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Node.js",
    "Express",
  ];
  return (
    <section className="bg-warmyellow relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center py-12 pt-24 px-6">
      {/* content */}
      <div className="relative z-10 max-w-4xl mx-auto items-center flex flex-col">
        <motion.div
          className="relative inline-block mb-4 "
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
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Code2 size={20} className="text-warmyellow" />
          </motion.div>
        </motion.div>
        {/* greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" border-peach  text-primary font-semibold bg-amber-500/10 inline-flex gap-2 px-4 py-2 rounded-full mb-2 border-2"
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
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <p className="max-w-md  text-secondary">
            Saya seorang Full Stack Developer yang fokus pada pengembangan
            dengan berbagai bahasa pemrograman.
          </p>
        </motion.div>

        {/* button link */}
        <motion.div
          className="flex flex-col md:flex-row  gap-4 mt-3 mb-4 w-full md:w-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-xl font-bold text-lg bg-primary text-warmyellow shadow-lg relative"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Lihat Proyek
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.25, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-xl font-bold text-lg text-primary bg-transparent border-2 border-solid border-peach  shadow-lg relative"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Hubungi Saya
          </motion.a>
        </motion.div>
        {/* sosmed */}
        <motion.div
          className="flex gap-5 justify-center items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" },
            { icon: Instagram, href: "#", label: "Instagram" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all border-peach border-2 border-solid text-primary bg-warmyellow hover:bg-primary hover:text-warmyellow"
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
