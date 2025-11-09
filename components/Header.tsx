"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warmyellow/40 backdrop-blur-md text-primary shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo  */}
        <div className="w-40">
          <h1 className="text-3xl font-bold">Freedy</h1>
        </div>

        {/* Navigationr */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-between gap-2">
          {["Home", "Project", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-lg font-semibold transition-all duration-300  hover:scale-110 rounded-lg"
              whileTap={{ scale: 0.9 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/*  Button  */}
        <div className="w-40 flex justify-end items-center gap-2">
          <motion.a
            href="#contact"
            className="hidden md:block px-6 py-2.5 rounded-lg font-bold shadow-lg bg-primary text-white transition-all duration-300 hover:bg-third hover:scale-105 whitespace-nowrap"
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden bg-primary w-10 h-10 flex items-center justify-center rounded-lg shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X size={24} color="white" />
            ) : (
              <Menu size={24} color="white" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute text-start top-full left-0 right-0 md:hidden mt-4 mx-auto w-11/12 p-6 rounded-2xl border-2 border-orange-300 bg-white shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex flex-col gap-2">
            {["Home", "About", "Project", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 rounded-lg font-semibold text-lg text-primary hover:bg-amber-50 active:bg-amber-100 transition-colors"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="w-full text-center block rounded-lg py-3 mt-2 font-bold bg-primary text-white hover:bg-third active:bg-third transition-colors"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Hire me!
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
