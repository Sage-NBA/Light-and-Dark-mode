import { User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section>
      {/* DESKTOP */}
      <div className="hidden  md:flex justify-between items-center px-4 py-2 text-white light:text-black">
        <h2 className="flex items-center gap-2">
          <p className="w-20 h-20">
            <img className="w-full h-full object-center" src="Images/sam.jpg" />
          </p>

          <h1 className="text-2xl font-bold">Webtrix.</h1>
        </h2>

        <section className="flex gap-4">
          <p className="cursor-pointer">
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/Technology">Technology</Link>
          </p>
          <p>Features</p>
          <p>Pricing</p>
          <p>FAQ</p>
        </section>

        <div className="flex items-center gap-2 w-fit h-fit bg-white/20 light:bg-black/10 py-3 px-4 rounded-[30px]">
          <User />
          <p>Create Account</p>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden relative px-4 py-2 text-white light:text-black">
        {/* TOP */}
        <div className="flex justify-between items-center">
          <h2 className="flex items-center gap-2">
            <p className="w-16 h-16">
              <img
                className="w-full h-full object-center"
                src="Images/sam.jpg"
              />
            </p>

            <h1 className="text-2xl font-bold">Webtrix.</h1>
          </h2>

          {/* MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-white/20 light:bg-black/10"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mt-5 flex flex-col items-center gap-5 py-6 bg-white/10 light:bg-black/5 rounded-[20px]">
            <p>Home</p>
            <p>Technology</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>FAQ</p>

            <div className="flex items-center gap-2 bg-white/20 light:bg-black/10 py-3 px-4 rounded-[30px]">
              <User size={20} />
              <p>Create Account</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Navbar;
