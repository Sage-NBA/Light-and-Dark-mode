import Card from "./Card";
import { ChevronRight, ChevronLeft } from "lucide-react";

function CardPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 text-white light:text-black space-y-8 sm:space-y-12">
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
        <div>
          <span className="text-xs sm:text-sm uppercase tracking-wider text-blue-400 light:text-blue-600 font-semibold">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight mt-1">
            Our Services
          </h2>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto">
          <button
            type="button"
            aria-label="Previous slide"
            className="p-2 sm:p-2.5 rounded-full bg-white/10 light:bg-black/10 hover:bg-white/20 light:hover:bg-black/20 border border-white/10 light:border-black/10 transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="p-2 sm:p-2.5 rounded-full bg-white/10 light:bg-black/10 hover:bg-white/20 light:hover:bg-black/20 border border-white/10 light:border-black/10 transition-colors cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* RESPONSIVE CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <Card text="Reality Development" head="Learn more">
          <p>
            Step into the future with our VR development services, designed to create immersive, high-fidelity digital experiences for enterprises and creators worldwide.
          </p>
        </Card>

        <Card text="Digital Assistance" head="Learn more">
          <p>
            Enhance customer engagement and operational efficiency with our AI-powered digital assistance and conversational avatars built for modern interfaces.
          </p>
        </Card>

        <Card text="Gaming Solutions" head="Learn more">
          <p>
            Immerse players in next-gen interactive gaming ecosystems with cutting-edge real-time 3D rendering and distributed server architecture.
          </p>
        </Card>
      </div>
    </section>
  );
}

export default CardPage;
