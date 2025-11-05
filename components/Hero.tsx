"use client";
import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail, Instagram } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType | string> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Tailwind CSS": SiTailwindcss,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
};

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

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center py-12 pt-36 px-6"
      style={{ backgroundColor: "#fdf2d4" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #fca931 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #fd8b2f 0%, transparent 70%)",
            bottom: "-10%",
            right: "-10%",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto items-center flex flex-col">
        {/* Icons and Profile Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          {/* Left Icons - Hidden on mobile */}
          <div className="hidden lg:flex relative w-64 h-64 items-center justify-center">
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
                  whileHover={{
                    scale: 1.2,
                    rotate: pos.rotate + 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
                    style={{ borderColor: "#fca931", borderWidth: "2px" }}
                  >
                    {typeof Icon === "string" ? (
                      <img src={Icon} alt={skill} className="w-12 h-12" />
                    ) : (
                      <Icon size={40} style={{ color: "#d02008" }} />
                    )}
                    <span
                      className="text-xs font-semibold mt-2"
                      style={{ color: "#d02008" }}
                    >
                      {skill}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center items-center">
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              {/* Outer glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full z-0"
                style={{ backgroundColor: "#fca931" }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating border effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, #fca931, #fd8b2f, #d02008, #fca931)`,
                  padding: "4px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: "#fdf2d4" }}
                />
              </motion.div>

              <motion.img
                src="/tes.png"
                alt="Foto Freedy"
                className="w-56 h-56 lg:w-64 lg:h-64 z-10 rounded-full relative object-cover"
                style={{ borderColor: "#fca931", borderWidth: "4px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              />

              {/* Rotating icon badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                style={{
                  backgroundColor: "#d02008",
                  borderColor: "#fdf2d4",
                  borderWidth: "4px",
                }}
                animate={{
                  rotate: 360,
                  y: [-2, 2, -2],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Code2 size={28} style={{ color: "#fdf2d4" }} />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Icons - Hidden on mobile */}
          <div className="hidden lg:flex relative w-64 h-64 items-center justify-center">
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
                  whileHover={{
                    scale: 1.2,
                    rotate: pos.rotate - 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
                    style={{ borderColor: "#fca931", borderWidth: "2px" }}
                  >
                    {typeof Icon === "string" ? (
                      <img src={Icon} alt={skill} className="w-12 h-12" />
                    ) : (
                      <Icon size={40} style={{ color: "#d02008" }} />
                    )}
                    <span
                      className="text-xs font-semibold mt-2"
                      style={{ color: "#d02008" }}
                    >
                      {skill}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Skills Grid */}
        <motion.div
          className="lg:hidden grid grid-cols-3 gap-4 mt-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {myAbility.slice(0, 6).map((skill, index) => {
            const Icon = iconMap[skill];
            return (
              <motion.div
                key={`mobile-${skill}`}
                className="flex flex-col items-center justify-center bg-white rounded-xl p-3 shadow-md"
                style={{ borderColor: "#fca931", borderWidth: "2px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {typeof Icon === "string" ? (
                  <img src={Icon} alt={skill} className="w-8 h-8" />
                ) : (
                  <Icon size={32} style={{ color: "#d02008" }} />
                )}
                <span
                  className="text-xs font-semibold mt-2 text-center"
                  style={{ color: "#d02008" }}
                >
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Text Content */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-8"
          style={{ color: "#fd8b2f" }}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Halo{" "}
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            style={{ display: "inline-block", transformOrigin: "70% 70%" }}
          >
            👋
          </motion.span>
          , Saya{" "}
          <span className="relative inline-block" style={{ color: "#d02008" }}>
            Freedy
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
              style={{ backgroundColor: "#fca931" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg md:text-xl mb-8 leading-relaxed"
          style={{ color: "#ce5e4b" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Saya seorang{" "}
          <span className="font-semibold" style={{ color: "#d02008" }}>
            Full Stack Developer
          </span>{" "}
          yang fokus pada pengembangan aplikasi web modern dengan berbagai
          bahasa pemrograman dan teknologi terkini.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto px-4 sm:px-0"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="#projects"
            className="relative px-8 py-4 rounded-2xl font-bold text-lg shadow-xl overflow-hidden group"
            style={{ backgroundColor: "#d02008", color: "#fdf2d4" }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{ background: "linear-gradient(45deg, #fd8b2f, #fca931)" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Lihat Proyek
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="relative px-8 py-4 rounded-2xl font-bold text-lg shadow-xl overflow-hidden group bg-transparent"
            style={{
              borderColor: "#fca931",
              borderWidth: "3px",
              color: "#d02008",
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              backgroundColor: "#fca931",
              color: "#fdf2d4",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Hubungi Saya
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 justify-center items-center flex-wrap"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { icon: Github, href: "#", label: "GitHub", color: "#d02008" },
            { icon: Linkedin, href: "#", label: "LinkedIn", color: "#d02008" },
            { icon: Mail, href: "#", label: "Email", color: "#d02008" },
            {
              icon: Instagram,
              href: "#",
              label: "Instagram",
              color: "#d02008",
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="relative w-14 h-14 rounded-xl flex items-center justify-center shadow-lg overflow-hidden group"
              style={{
                backgroundColor: "#fdf2d4",
                borderColor: "#fca931",
                borderWidth: "2px",
                color: social.color,
              }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: "#d02008" }}
                transition={{ duration: 0.3 }}
              />
              <social.icon
                size={24}
                className="relative z-10 group-hover:text-[#fdf2d4] transition-colors"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
            style={{ borderColor: "#fca931", borderWidth: "2px" }}
          >
            <motion.div
              className="w-1.5 h-2 rounded-full"
              style={{ backgroundColor: "#d02008" }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
