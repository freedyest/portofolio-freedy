"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Code2, Sparkles, Menu, X } from "lucide-react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="fixed top-0 left-0 right-0 z-50  bg-warmyellow/40 backdrop-blur-md  text-primary shadow-md  px-6 py-4">
      <div className=" flex px-0 mx-auto md:px-4 text-center justify-between items-center">
        <h1 className="text-3xl font-bold">Freedy</h1>
        <div className="hidden md:flex items-center text-lg font-bold gap-6">
          <Button
            variant="ghost"
            className="transition-all px-2 text-lg font-semibold duration-300 hover:bg-warmyellow-40 hover:text-current hover:scale-125 hover:font-bold"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="transition-all px-2 text-lg font-semibold duration-300 hover:bg-warmyellow-40 hover:text-current hover:scale-125 hover:font-bold"
          >
            About
          </Button>
          <Button
            variant="ghost"
            className="transition-all px-2 text-lg font-semibold duration-300 hover:bg-warmyellow-40 hover:text-current hover:scale-125 hover:font-bold"
          >
            Portfolio
          </Button>
          <Button
            variant="ghost"
            className="transition-all px-2 text-lg font-semibold duration-300 hover:bg-warmyellow-40 hover:text-current hover:scale-125 hover:font-bold"
          >
            Contact
          </Button>
        </div>
        <a
          href="#contact"
          className="transition-all hidden md:block px-6 py-2.5 rounded-lg font-bold shadow-lg bg-primary text-white duration-300 hover:bg-third hover:scale-105"
        >
          {" "}
          Hire Me
        </a>
        {/* // Mobile Menu Toggle */}
        <motion.div
          className="md:hidden bg-primary  w-10 h-10 flex items-center justify-center rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <X size={24} color="white" />
          ) : (
            <Menu size={24} color="white" />
          )}
        </motion.div>

        {isMenuOpen && (
          <motion.div className="absolute text-start top-full left-0 right-0 md:hidden mt-4 mx-auto w-11/12 p-6 rounded-2xl border-2 border-peach bg-white ">
            <div>
              <a
                href="#home"
                className="block py-3  rounded-lg font-semibold text-lg text-primary hover:bg-warmyellow active:bg-warmyellow "
              >
                Home
              </a>{" "}
              <a
                href="#about"
                className="block py-3 rounded-lg  font-semibold text-lg text-primary hover:bg-warmyellow active:bg-warmyellow "
              >
                About
              </a>
              <a
                href="#Portofolio"
                className="block py-3 rounded-lg  font-semibold text-lg text-primary hover:bg-warmyellow active:bg-warmyellow "
              >
                Portofolio
              </a>
              <a
                href="#Contact"
                className="block py-3 rounded-lg  font-semibold text-lg text-primary hover:bg-warmyellow active:bg-warmyellow "
              >
                Contact
              </a>
              <motion.a
                href="#contact"
                className="w-full text-center block rounded-lg py-3 font-bold bg-primary text-white"
                whileTap={{ scale: 0.9 }}
              >
                Hire me!
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
