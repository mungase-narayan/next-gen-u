import { Button } from "@/components/ui/button";
import { ArrowUpWideNarrow } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="container mx-auto px-4 py-10 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            <ArrowUpWideNarrow />
          </span>
        </div>
        <div className="flex items-center">
          <NavLink to={"/"} className="text-2xl text-white font-bold flex items-center">
            NextGen
            <span className="text-[#f5923e] relative">
              U
              <span className="absolute top-1 right-0 w-1.5 h-1.5 bg-[#f5923e] rounded-full"></span>
            </span>
          </NavLink>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link
          to={"/dashboard"}
          className="text-white hover:text-amber-300 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/explore"
          className="text-white  hover:text-amber-300 transition"
        >
          Explore
        </Link>
        <Link
          to="/product"
          className="text-white  hover:text-amber-300 transition"
        >
          Product
        </Link>
        <Link
          to="/developer"
          className="text-white  hover:text-amber-300 transition"
        >
          Developer
        </Link>
        <Link
          to="/signin"
          className="text-white  hover:text-amber-300 transition"
        >
          Sign in
        </Link>
      </nav>

      <Button
        variant="outline"
        size="sm"
        className="md:hidden mr-4 text-white border-white"
      >
        Menu
      </Button>
    </header>
  );
}

export default Navbar;
