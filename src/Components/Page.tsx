import { ArrowRight } from "lucide-react";

function Page() {
  const categories = ["Innovation", "Technology", "Experience"];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 text-white light:text-black space-y-8 sm:space-y-12 lg:space-y-16">
      {/* SECTION TITLE */}
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
        LIMITLESS POSSIBILITIES
        <br className="hidden sm:inline" /> WITH SAMVISION
      </h2>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* CATEGORY TAGS */}
        <div className="lg:col-span-2 flex flex-row lg:flex-col flex-wrap gap-2 sm:gap-4">
          {categories.map((cat, idx) => (
            <span
              key={cat}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm md:text-base font-medium cursor-pointer transition-all ${
                idx === 0
                  ? "bg-white/20 light:bg-black/10 text-white light:text-black"
                  : "text-white/50 light:text-black/50 hover:text-white light:hover:text-black hover:bg-white/10 light:hover:bg-black/5"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* IMAGE CONTAINER */}
        <div className="lg:col-span-6 w-full">
          <div className="w-full aspect-16/10 sm:aspect-16/9 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 light:border-black/10 shadow-xl group">
            <img
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              src="/Images/pick.jpg"
              alt="Visual Reality in action"
            />
          </div>
        </div>

        {/* DETAILS COLUMN */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-3xl font-light leading-snug">
              How VR is Transforming Our Digital World
            </h3>
            <p className="text-sm sm:text-base text-white/70 light:text-black/70 font-light leading-relaxed">
              Virtual Reality (VR) is no longer a distant concept of the future — it's a dynamic reality reshaping how we collaborate, work, and entertain ourselves across every digital touchpoint.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white light:text-black hover:text-blue-400 light:hover:text-blue-600 transition-colors cursor-pointer group"
            >
              <span>Learn More</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-white/10 light:border-black/10 text-xs sm:text-sm text-white/60 light:text-black/60 font-light">
            <span>06 September 2027</span>
            <span className="font-medium text-white/80 light:text-black/80">
              Sammy NBA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
