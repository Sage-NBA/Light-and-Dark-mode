import { Astroid } from "lucide-react";

function Hero() {
  return (
    <div className="text-white light:text-black text-center md:py-20 space-y-5 items-center justify-center">
      {/* button */}
      <p className="hidden md:ml-150 md:flex light:bg-black/30 items-center gap-2 w-fit h-fit bg-white/20 py-1 px-4 rounded-[20px]">
        <Astroid />
        <p>Trusted Platform</p>
      </p>
      {/* main */}
      <section className="space-y-7">
        <h1 className="text-2xl md:text-6xl font-light ">
          Revolutionize Your Trasactions
          <br /> with Secure Blockchain Solutions
        </h1>
        <p className="text-[10px] md:text-[15px]">
          Experience the future of digital transactions with our
          State-of-the-art blocklist technology. Our Secure,
          <br />
          decentralized platform ensures your data is protected, transparent,
          immutable, and protected against fraud.
        </p>
      </section>
      <div>
        <button className="md:text-[20px] md:font-semibold w-fit h-fit text-black bg-white py-2 px-5 md:px-10 rounded-[50px]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
