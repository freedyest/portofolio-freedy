export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-950 text-white text-center px-8"
    >
      <h2 className="text-3xl font-bold mb-6">Hubungi Saya</h2>
      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Nama"
          className="p-3 rounded bg-gray-800 border border-gray-700"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-gray-800 border border-gray-700"
        />
        <textarea
          placeholder="Pesan"
          className="p-3 rounded bg-gray-800 border border-gray-700 h-32"
        ></textarea>
        <button className="bg-blue-600 py-2 rounded hover:bg-blue-700 transition">
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}
