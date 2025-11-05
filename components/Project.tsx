"use client";
import { motion } from "framer-motion";

export default function Project() {
  const project = [
    {
      title: "Website Kursus Online",
      desc: "Platform belajar interaktif dengan React & Node.js",
    },
    {
      title: "To-Do List App",
      desc: "CRUD sederhana menggunakan Local Storage",
    },
    {
      title: "Portfolio Pribadi",
      desc: "Dibangun dengan Next.js dan Tailwind CSS",
    },
  ];

  return (
    <section id="project" className="py-20 bg-peach/70 text-primary px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Proyek Saya</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {project.map((p, i) => (
          <motion.div
            key={i}
            className="p-6 bg-warmyellow rounded-xl hover:scale-105 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-peach-400 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
