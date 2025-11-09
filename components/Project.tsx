"use client";
import { motion } from "framer-motion";

export default function Project() {
  const project = [
    {
      title: "Interactive Online Learning Platform",
      img: "../img/videobelajar.png",
      desc: "An engaging e-learning platform built with React and Node.js, featuring interactive video lessons.",
      link: "https://mission8-fe-4.vercel.app/#/Home",
    },
    {
      title: "Modern Web Local Company Profile",
      img: "../img/mitraa.png",
      desc: "A clean and responsive personal portfolio website designed using pure JavaScript and CSS.",
    },
    {
      title: "To-Do List Application",
      img: "../img/todolist.png",
      desc: "A simple yet effective task management app developed with JavaScript for better daily productivity.",
    },
    {
      title: "Responsive POS Web System",
      img: "../img/kasirweb.png",
      desc: "A responsive point-of-sale web application built with Bootstrap for seamless user experience.",
    },
    {
      title: "Digital Guestbook App",
      img: "../img/tamu.png",
      desc: "A lightweight CRUD-based guestbook built with Local Storage for efficient visitor data management.",
    },
    {
      title: "Online Book Management System",
      img: "../img/bklib.png",
      desc: "A full-stack web application integrated with MongoDB to manage and organize book collections dynamically.",
    },
  ];

  return (
    <section id="project" className="py-20 bg-peach/70 text-primary px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Proyek Saya</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {project.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <motion.div
              className="flex flex-col justify-between h-full p-6 bg-warmyellow rounded-xl 
                   hover:shadow-2xl hover:shadow-yellow-500/40 hover:border-2 
                   hover:border-primary cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{
                scale: 1.05,
                y: -3,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              whileTap={{
                scale: 0.97,
                transition: { duration: 0.08, ease: "easeInOut" },
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-peach-400 line-clamp-3">{p.desc}</p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
