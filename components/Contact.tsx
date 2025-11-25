"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Send, Mail, MapPin, Phone } from "lucide-react";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [popupType, setPopupType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [focusedInput, setFocusedInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async () => {
    try {
      const res = await fetch("https://formspree.io/f/manaydjq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Pesan berhasil dikirim!");
        setPopupType("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Gagal mengirim pesan. Coba lagi nanti.");
        setPopupType("error");
      }
      setShowPopup(true);
    } catch (err) {
      setStatus("Terjadi kesalahan jaringan.");
      setPopupType("error");
      setShowPopup(true);
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const sosialMedia = [
    {
      name: "Github",
      icon: Github,
      link: "https://github.com/freedyest",
      color: "hover:bg-gray-800",
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/freedy-estiawan-bbb98b244/",
      color: "hover:bg-blue-600",
    },
    {
      name: "Mail",
      icon: Mail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=freedyjob@gmail.com",
      color: "hover:bg-orange-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/freedyestiw?igsh=MTB4enFiN2NocTNhYg==",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500",
    },
  ];

  const contactInfo = [
    { icon: Mail, text: "freedyjob@gmail.com", color: "text-orange-600" },
    { icon: MapPin, text: "Pekanbaru, Riau", color: "text-red-600" },
    { icon: Phone, text: "085265559396", color: "text-rose-600" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen relative py-20 bg-warmyellow/70 text-primary px-6 "
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 text-primary "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Mari Terhubung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-700 text-lg max-w-2xl mx-auto"
          >
            Punya proyek menarik atau ingin berkolaborasi? Jangan ragu untuk
            menghubungi saya!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 hidden md:flex md:flex-col justify-between h-full"
          >
            <div className="bg-white/70  rounded-3xl p-8 shadow-xl  border-2 border-peach">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-colors"
                    >
                      <div
                        className={`${info.color} bg-white p-3 rounded-full shadow-md`}
                      >
                        <IconComponent size={24} />
                      </div>
                      <span className="text-slate-700 font-medium">
                        {info.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border-2 border-peach"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">
                Media Sosial
              </h3>
              <div className="flex gap-4 justify-center flex-wrap">
                {sosialMedia.map((sosmed, index) => {
                  const IconComponent = sosmed.icon;
                  return (
                    <motion.a
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      href={sosmed.link}
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden group bg-white border-2 border-orange-200 text-slate-700"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <motion.div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${sosmed.color} transition-opacity duration-300`}
                      />
                      <IconComponent
                        size={28}
                        className="pointer-events-none relative z-10 group-hover:text-white  transition-colors duration-300"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-white/70 h-full rounded-3xl p-8 shadow-xl border-2 border-peach ">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Kirim Pesan
              </h3>
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <p className="text-slate-700 text-lg p-1">Nama</p>
                  <input
                    name="name"
                    type="text"
                    placeholder="Nama Lengkap"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput("")}
                    className="w-full p-4 rounded-xl bg-white/80 border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400"
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedInput === "name" ? 1 : 0 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 origin-left"
                  />
                </div>

                <div className="relative">
                  <p className="text-slate-700 text-lg p-1">Email</p>
                  <input
                    name="email"
                    type="email"
                    placeholder="Alamat Email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput("")}
                    className="w-full p-4 rounded-xl bg-white/80 border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400"
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedInput === "email" ? 1 : 0 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 origin-left"
                  />
                </div>

                <div className="relative">
                  <p className="text-slate-700 text-lg p-1">Message</p>
                  <textarea
                    name="message"
                    placeholder="Tulis pesan Anda di sini..."
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput("")}
                    className="w-full p-4 rounded-xl bg-white/80 border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-all duration-300 text-slate-800 placeholder:text-slate-400 h-40 resize-none"
                  ></textarea>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedInput === "message" ? 1 : 0 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 origin-left"
                  />
                </div>

                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(234, 88, 12, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-lg rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Kirim Pesan</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send
                      size={20}
                      className="group-hover:rotate-45 transition-transform duration-300"
                    />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col md:hidden bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border-2 border-peach"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              Media Sosial
            </h3>
            <div className="flex gap-4 justify-center flex-wrap">
              {sosialMedia.map((sosmed, index) => {
                const IconComponent = sosmed.icon;
                return (
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    href={sosmed.link}
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden group bg-white border-2 border-orange-200 text-slate-700"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <motion.div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${sosmed.color} transition-opacity duration-300`}
                    />
                    <IconComponent
                      size={28}
                      className="pointer-events-none relative z-10 group-hover:text-white  transition-colors duration-300"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success/Error Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`p-8 rounded-3xl shadow-2xl text-white flex flex-col items-center max-w-md w-full ${
                popupType === "success"
                  ? "bg-gradient-to-br from-green-500 to-emerald-600"
                  : "bg-gradient-to-br from-red-500 to-rose-600"
              }`}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                {popupType === "success" ? (
                  <CheckCircle size={64} className="mb-4" />
                ) : (
                  <XCircle size={64} className="mb-4" />
                )}
              </motion.div>
              <p className="text-xl font-bold text-center">{status}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
