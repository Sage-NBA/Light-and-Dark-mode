import { User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Technology", path: "/Technology" },
    { label: "Features", path: "/Features" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/75 light:bg-white/80 border-b border-white/10 light:border-black/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 group"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/20 light:border-black/20 shrink-0">
              <img
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                src="/Images/sam.jpg"
                alt="Webtrix Logo"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white light:text-black">
              Webtrix.
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm lg:text-base font-medium transition-colors hover:text-blue-400 light:hover:text-blue-600 ${
                  isActive(link.path)
                    ? "text-blue-400 light:text-blue-600 font-semibold"
                    : "text-white/80 light:text-black/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/Create"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 light:bg-black/10 light:hover:bg-black/15 text-white light:text-black text-sm lg:text-base font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-full border border-white/15 light:border-black/15 transition-all hover:scale-105 active:scale-95"
            >
              <User size={18} />
              <span>Create Account</span>
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="p-2 sm:p-2.5 rounded-xl bg-white/15 light:bg-black/10 text-white light:text-black hover:bg-white/25 transition-colors cursor-pointer"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <nav className="md:hidden py-4 px-2 border-t border-white/10 light:border-black/10 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-blue-600 text-white"
                      : "text-white/90 light:text-black/90 hover:bg-white/10 light:hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 light:border-black/10">
              <Link
                to="/Create"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-white/20 light:bg-black/10 text-white light:text-black font-medium py-3 px-4 rounded-xl border border-white/15 light:border-black/15 hover:bg-white/30 transition-all text-base"
              >
                <User size={18} />
                <span>Create Account</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
