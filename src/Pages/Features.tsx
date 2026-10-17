import { User, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import Button from "../Components/Button.tsx";

const cards = [
  {
    title: "Individual Therapy",
    description: "Private therapy sessions personalized to your mental health and personal growth needs.",
    icon: User,
    buttonText: "More Details",
  },
  {
    title: "Group Sessions",
    description: "Shared healing environments guided by accredited facilitators and peer support.",
    icon: HeartPulse,
    buttonText: "More Details",
  },
  {
    title: "Crisis Support",
    description: "24/7 dedicated rapid response pathways providing calm, immediate, licensed assistance.",
    icon: ShieldCheck,
    buttonText: "More Details",
  },
  {
    title: "Specialized Programs",
    description: "Targeted evidence-based programs designed for anxiety, neurodiversity, and life transitions.",
    icon: Sparkles,
    buttonText: "More Details",
  },
];

function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 md:py-20 text-white light:text-black space-y-8 sm:space-y-12">
      {/* HEADER SECTION */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-white/10 light:border-black/10">
        <div>
          <span className="text-xs sm:text-sm uppercase tracking-wider text-blue-400 light:text-blue-600 font-semibold">
            Dedicated Care
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mt-1">
            Support That Fits
            <br />
            <span className="text-white/50 light:text-black/50">Your Journey</span>
          </h1>
        </div>

        <p className="text-sm sm:text-base text-white/70 light:text-black/70 font-light max-w-md leading-relaxed">
          A team committed to fostering your emotional well-being through the guidance of licensed professionals, providing the care and support you need every step of the way.
        </p>
      </section>

      {/* CONTENT GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* CARDS LIST */}
        <div className="lg:col-span-7 space-y-2">
          {cards.map((card, i) => (
            <div key={card.title}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 sm:py-6 group">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 light:bg-black/10 flex items-center justify-center shrink-0 border border-white/10 light:border-black/10 group-hover:scale-105 transition-transform">
                    <card.icon size={22} className="text-blue-400 light:text-blue-600" />
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white light:text-black">
                      {card.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-white/70 light:text-black/70 font-light leading-relaxed max-w-md">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="self-end sm:self-center shrink-0 pt-2 sm:pt-0">
                  <Button text={card.buttonText} />
                </div>
              </div>

              {i !== cards.length - 1 && (
                <div className="w-full h-px bg-white/10 light:bg-black/10" />
              )}
            </div>
          ))}
        </div>

        {/* FEATURE IMAGE */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
          <div className="aspect-4/3 sm:aspect-16/10 lg:aspect-4/5 rounded-3xl overflow-hidden border border-white/15 light:border-black/15 shadow-2xl group">
            <img
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              src="/Images/black.jpeg"
              alt="Professional support"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
