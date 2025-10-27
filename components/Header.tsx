export default function Header() {
  return (
    <section className="bg-gray-950 text-white py-6 px-6">
      <div className="container flex mx-auto px-4 text-center justify-between items-center">
        <h1 className="text-3xl font-bold">Freedy</h1>
        <div className="gap-3 px-2 flex font-semibold">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Portofolio</a>
          <a href="">Contact</a>
        </div>
      </div>
    </section>
  );
}
