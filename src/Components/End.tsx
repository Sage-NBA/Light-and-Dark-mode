function End() {
  const testimonials = [
    {
      img: "/Images/chat.jpeg",
      quote: "Don't stop just yet.",
      author: "Product Strategy",
    },
    {
      img: "/Images/com.jpeg",
      quote: "Keep trying, keep up.",
      author: "Core Architecture",
    },
    {
      img: "/Images/white.jpeg",
      quote: "Innovating with purpose.",
      author: "Emmanuel Samuel",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 text-white light:text-black">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-16">
        {/* HEADING */}
        <div className="text-center lg:text-left space-y-3 sm:space-y-4 max-w-lg">
          <span className="text-xs sm:text-sm uppercase tracking-wider text-blue-400 light:text-blue-600 font-semibold">
            Testimonials & Insights
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            Voices of the
            <br className="hidden sm:inline" /> Future
          </h2>
          <p className="text-sm sm:text-base text-white/70 light:text-black/70 font-light">
            Hear from leaders and builders pioneering decentralized tech experiences.
          </p>
        </div>

        {/* LIST */}
        <div className="w-full max-w-lg space-y-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/10 light:bg-black/5 border border-white/10 light:border-black/10 hover:border-white/25 light:hover:border-black/20 hover:bg-white/15 light:hover:bg-black/10 transition-all duration-200 shadow-sm group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-white/15 light:border-black/15">
                <img
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  src={item.img}
                  alt={item.author}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base sm:text-lg font-medium text-white light:text-black truncate">
                  "{item.quote}"
                </p>
                <p className="text-xs sm:text-sm text-white/60 light:text-black/60 font-light">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default End;
