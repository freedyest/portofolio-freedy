import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <section className=" bg-warmyellow text-primary  px-6 border-b-4 border-primary">
      <div className="container flex mx-auto px-4 text-center justify-between items-center">
        <h1 className="text-3xl py-3 font-bold">Freedy</h1>
        <div className=" flex text-lg font-bold ">
          <Button
            variant="ghost"
            className="transition-all px-2 text-lg font-semibold duration-300 hover:bg-peach hover:text-current hover:scale-105 hover:font-bold"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="transition-all px-2 text-lg font-semibold duration-300 hover:bg-peach hover:text-current hover:scale-105 hover:font-bold"
          >
            About
          </Button>
          <Button
            variant="ghost"
            className="transition-all px-2 text-lg font-semibold duration-300 hover:bg-peach hover:text-current hover:scale-105 hover:font-bold"
          >
            Portfolio
          </Button>
          <Button
            variant="ghost"
            className="transition-all px-2 text-lg font-semibold duration-300 hover:bg-peach hover:text-current hover:scale-105 hover:font-bold"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
