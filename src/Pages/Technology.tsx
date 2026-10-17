import { ArrowRight } from "lucide-react";

function Technology() {
  const services = [
    {
      num: "01",
      title: "Web Development",
      colSpan: "lg:col-span-5",
      desc: "Our expert team crafts bespoke websites tailored to your brand's needs, ensuring seamless functionality and stunning design to captivate your audience.",
    },
    {
      num: "02",
      title: "Digital Marketing Strategies",
      colSpan: "lg:col-span-7",
      desc: "Harness the power of targeted digital campaigns designed to maximize your online reach and drive conversions, with a data-driven approach delivering measurable results.",
    },
    {
      num: "03",
      title: "Creative Design Services",
      colSpan: "lg:col-span-7",
      desc: "From eye-catching visuals to intuitive user experiences, our creative design services breathe life into your brand, ensuring memorable interactions that resonate.",
    },
    {
      num: "04",
      title: "E-Commerce Solutions",
      colSpan: "lg:col-span-5",
      desc: "Elevate your online retail experience with comprehensive e-commerce architectures, from user-friendly checkout flows to secure multi-currency payment gateways.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 md:py-20 text-white light:text-black space-y-12 sm:space-y-16">
      {/* EDITORIAL STAGGERED HEADLINE */}
      <div className="text-center sm:text-left flex flex-col font-light text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none select-none">
        <span className="sm:pl-0">THE TECH</span>
        <span className="text-blue-500 sm:pl-10 md:pl-20 lg:pl-32">WEB</span>
        <span className="sm:pl-4 md:pl-8 lg:pl-16">PRODUCTION</span>
        <span className="text-blue-500 sm:pl-16 md:pl-32 lg:pl-56">AGENCY</span>
      </div>

      {/* INTRO SUMMARY & ACTION */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 max-w-4xl ml-auto pt-6 border-t border-white/10 light:border-black/10">
        <p className="text-sm sm:text-base text-white/75 light:text-black/75 font-light leading-relaxed max-w-xl">
          Unlock your digital potential with our web production agency. We deliver innovative solutions in web development, digital marketing, and creative design to elevate your online presence and drive measurable results.
        </p>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <div className="text-xs sm:text-sm font-semibold bg-white text-black light:bg-black light:text-white py-2.5 px-5 rounded-full">
            <span>Services</span>
          </div>
          <button
            type="button"
            aria-label="Explore services"
            className="w-10 h-10 rounded-full bg-white text-black light:bg-black light:text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* SERVICES HEADER */}
      <div className="space-y-2 pt-6 sm:pt-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight">
          Our Services
        </h2>
        <p className="text-sm sm:text-base text-white/70 light:text-black/70 font-light max-w-2xl">
          Explore our array of services from web development to e-commerce solutions designed to elevate your online presence and drive success in the digital landscape.
        </p>
      </div>

      {/* RESPONSIVE ASYMMETRIC GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
        {services.map((item) => (
          <div
            key={item.num}
            className={`${item.colSpan} w-full p-6 sm:p-8 rounded-3xl border border-white/20 light:border-black/20 bg-white/5 light:bg-black/5 hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] cursor-pointer group`}
          >
            <div className="w-10 h-10 rounded-full text-black light:text-white bg-white light:bg-black flex items-center justify-center text-xs sm:text-sm font-semibold shadow-sm group-hover:scale-110 transition-transform">
              {item.num}
            </div>

            <div className="mt-8 sm:mt-12 space-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white light:text-black">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-white/70 light:text-black/70 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Technology;
