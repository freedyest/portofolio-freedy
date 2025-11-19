"use client";
import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail, Instagram } from "lucide-react";
import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiOpenjdk,
  SiCplusplus,
  SiBootstrap,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  PHP: SiPhp,
  "Tailwind CSS": SiTailwindcss,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "OpenJDK (Java)": SiOpenjdk,
  "C++": SiCplusplus,
  Bootstrap: SiBootstrap,
};

export default function Hero() {
  const myAbility = [
    "JavaScript",
    "TypeScript",
    "Python",
    "PHP",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "OpenJDK (Java)",
    "C++",
    "Bootstrap",
  ];

  const positionsRight = [
    { x: -30, y: -100, rotate: -15 },
    { x: 50, y: 0, rotate: 0 },
    { x: -30, y: 100, rotate: 15 },
  ];

  const positionsLeft = [
    { x: 30, y: -100, rotate: 15 },
    { x: -50, y: 0, rotate: 0 },
    { x: 30, y: 100, rotate: -15 },
  ];
  const sosialMedia = [
    { name: "Github", icon: Github, link: "#" },
    { name: "Linkedin", icon: Linkedin, link: "#" },
    { name: "Mail", icon: Mail, link: "#" },
    { name: "Instagram", icon: Instagram, link: "#" },
  ];

  return (
    <section
      id="home"
      className="relative bg-warmyellow min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center py-12 pt-36 px-6"
    >
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          {/* LEFT ICONS */}
          <div className="hidden lg:flex relative w-64 h-64 items-center justify-center ">
            {myAbility.slice(0, 3).map((skill, index) => {
              const Icon = iconMap[skill];
              const pos = positionsLeft[index];
              return (
                <motion.div
                  key={`left-${skill}`}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: pos.x,
                    y: pos.y,
                    scale: 1,
                    rotate: pos.rotate,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 80,
                  }}
                  whileHover={{ scale: 1.2, rotate: pos.rotate + 10 }}
                >
                  <div className="flex w-24 h-24 rounded-full flex-col items-center justify-center bg-white  p-4 shadow-lg hover:shadow-xl transition-shadow border-2 border-peach">
                    {typeof Icon === "string" ? (
                      <img src={Icon} alt={skill} className="w-12 h-12" />
                    ) : (
                      <Icon size={40} className="text-primary" />
                    )}
                    <span className="text-xs font-semibold mt-2 text-primary">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* PROFILE PIC */}
          <div className="flex justify-center items-center">
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full z-0 bg-peach"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#fca931,#fd8b2f,#d02008,#fca931)] p-[4px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-warmyellow" />
              </motion.div>

              <motion.img
                src="/tes.png"
                alt="Foto Freedy"
                className="w-56 h-56 lg:w-64 lg:h-64 z-10 rounded-full relative object-cover border-4 border-peach"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              />

              {/* Rotating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl bg-primary border-4 border-warmyellow"
                animate={{ rotate: 360, y: [-2, 2, -2] }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Code2 size={28} className="text-warmyellow" />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT ICONS */}
          <div className="hidden rounded-full lg:flex relative w-64 h-64 items-center justify-center">
            {myAbility.slice(3, 6).map((skill, index) => {
              const Icon = iconMap[skill];
              const pos = positionsRight[index];
              return (
                <motion.div
                  key={`right-${skill}`}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: pos.x,
                    y: pos.y,
                    scale: 1,
                    rotate: pos.rotate,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.15 + 0.45,
                    type: "spring",
                    stiffness: 80,
                  }}
                  whileHover={{ scale: 1.2, rotate: pos.rotate - 10 }}
                >
                  <div className="flex w-24 h-24 rounded-full flex-col items-center justify-center bg-white  p-4 shadow-lg hover:shadow-xl transition-shadow border-2 border-peach">
                    {typeof Icon === "string" ? (
                      <img src={Icon} alt={skill} className="w-12 h-12" />
                    ) : (
                      <Icon size={40} className="text-primary" />
                    )}
                    <span className="text-xs font-semibold mt-2 text-primary">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* TEXT  */}
        <motion.h1
          className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-8 text-third"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Halo{" "}
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block origin-[70%_70%]"
          >
            👋
          </motion.span>
          , Saya{" "}
          <span className="relative inline-block text-primary">Freedy</span>
        </motion.h1>

        <motion.p
          className="font-poppins max-w-2xl text-lg md:text-xl mb-8 leading-relaxed text-secondary"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Saya seorang{" "}
          <span className="font-semibold text-primary">
            Full Stack Developer
          </span>{" "}
          yang fokus pada pengembangan aplikasi web modern dengan berbagai
          bahasa pemrograman dan teknologi terkini.
        </motion.p>

        {/*  BUTTONS */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto px-4 sm:px-0"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="#projects"
            className="relative px-8 py-4 rounded-2xl font-bold text-lg shadow-xl overflow-hidden group bg-primary text-warmyellow"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-third to-peach" />
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Lihat Proyek{" "}
              <motion.span animate={{ x: [0, 5, 0] }}>→</motion.span>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="relative px-8 py-4 rounded-2xl font-bold text-lg shadow-xl overflow-hidden group border-4 border-peach text-primary bg-transparent hover:bg-peach hover:text-warmyellow transition-colors"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            Hubungi Saya
          </motion.a>
        </motion.div>

        {/* SOCIAL  */}
        <motion.div
          className="flex gap-4 justify-center items-center flex-wrap"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {sosialMedia.map((sosmed, index) => {
            const IconComponent = sosmed.icon;
            return (
              <motion.a
                key={index}
                href={sosmed.link}
                className="relative w-14 h-14 rounded-xl flex items-center justify-center shadow-lg overflow-hidden group bg-warmyellow border-2 border-peach text-primary"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary" />

                <IconComponent
                  size={24}
                  className="relative z-10 group-hover:text-warmyellow"
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
