export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-peach/90 text-primary text-center px-8"
    >
      <h2 className="text-3xl text-primary font-bold mb-6">Hubungi Saya</h2>
      <form className="flex flex-col gap-4 max-w-md mx-auto  ">
        <input
          type="text"
          placeholder="Name"
          className="p-3 focus:outline-none rounded bg-warmyellow border border-primary/80 focus:border-2 focus:border-primary"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 focus:outline-none rounded bg-warmyellow border border-primary/80 focus:border-2 focus:border-primary"
        />
        <textarea
          placeholder="Pesan"
          className="p-3 focus:outline-none rounded border-primary/80 bg-warmyellow border  h-32 focus:border-2 focus:border-primary"
        ></textarea>
        <button className=" text-lg bg-primary text-white py-2 rounded hover:scale-105 transition font-semibold h-16">
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}
