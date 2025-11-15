"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [popupType, setPopupType] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(form.action, {
        method: form.method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Pesan berhasil dikirim!");
        setPopupType("success");
        form.reset();
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

  return (
    <section
      id="contact"
      className="min-h-screen relative py-20 bg-peach/90 text-primary text-center px-8"
    >
      <h2 className="text-3xl text-primary font-bold mb-6">Hubungi Saya</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto"
        action="https://formspree.io/f/manaydjq"
        method="POST"
      >
        <input
          name="name"
          type="text"
          placeholder="Nama"
          required
          className="p-3 focus:outline-none rounded bg-warmyellow border border-primary/80 focus:border-2 focus:border-primary"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="p-3 focus:outline-none rounded bg-warmyellow border border-primary/80 focus:border-2 focus:border-primary"
        />
        <textarea
          name="message"
          placeholder="Pesan"
          required
          className="p-3 focus:outline-none rounded border-primary/80 bg-warmyellow border h-32 focus:border-2 focus:border-primary"
        ></textarea>

        <button
          type="submit"
          className="text-lg bg-primary text-white py-2 rounded hover:scale-105 transition font-semibold h-16"
        >
          Kirim Pesan
        </button>
      </form>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          >
            <motion.div
              className={`p-6 rounded-2xl shadow-lg text-white flex flex-col items-center ${
                popupType === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {popupType === "success" ? (
                <CheckCircle size={50} className="mb-3" />
              ) : (
                <XCircle size={50} className="mb-3" />
              )}
              <p className="text-lg font-semibold">{status}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
