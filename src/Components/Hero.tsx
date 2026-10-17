import { Astroid } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative text-white light:text-black text-center py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8">
      {/* BADGE */}
      <div className="inline-flex items-center gap-2 bg-white/15 light:bg-black/10 border border-white/20 light:border-black/15 py-1.5 px-4 rounded-full text-xs sm:text-sm font-medium shadow-sm transition-transform hover:scale-105">
        <Astroid className="w-4 h-4 text-blue-400" />
        <span>Trusted Platform</span>
      </div>

      {/* HEADLINE & SUBTITLE */}
      <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
          Revolutionize Your Transactions
          <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 light:from-blue-600 light:to-purple-600">
            with Secure Blockchain Solutions
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/75 light:text-black/75 max-w-2xl mx-auto font-light leading-relaxed px-2">
          Experience the future of digital transactions with our state-of-the-art blockchain technology. Our secure, decentralized platform ensures your data is protected, transparent, immutable, and safeguarded against fraud.
        </p>
      </div>

      {/* CTA BUTTON */}
      <div className="pt-2 sm:pt-4">
        <Link
          to="/Create"
          className="inline-block text-sm sm:text-base md:text-lg font-medium text-black bg-white light:bg-black light:text-white py-3 sm:py-3.5 px-7 sm:px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Hero;
