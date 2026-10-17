import { useState } from "react";
import { Check } from "lucide-react";

function Create() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24 text-white light:text-black">
      <div className="p-6 sm:p-10 rounded-3xl bg-white/10 light:bg-black/5 border border-white/15 light:border-black/10 backdrop-blur-md shadow-2xl space-y-6">
        {/* HEADER */}
        <div className="text-center space-y-2">
          <span className="text-xs sm:text-sm uppercase tracking-wider text-blue-400 light:text-blue-600 font-semibold">
            Get Started
          </span>
          <h1 className="text-2xl sm:text-4xl font-light tracking-tight">
            Create an Account
          </h1>
          <p className="text-xs sm:text-sm text-white/70 light:text-black/70 font-light">
            Fill in your details to begin your decentralized journey.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* FIRST & LAST NAME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-xs sm:text-sm font-medium mb-1.5 text-white/80 light:text-black/80"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                required
                className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-white/20 light:border-black/20 bg-white/5 light:bg-black/5 text-white light:text-black placeholder:text-white/40 light:placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
                placeholder="John"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-xs sm:text-sm font-medium mb-1.5 text-white/80 light:text-black/80"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                required
                className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-white/20 light:border-black/20 bg-white/5 light:bg-black/5 text-white light:text-black placeholder:text-white/40 light:placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-medium mb-1.5 text-white/80 light:text-black/80"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-white/20 light:border-black/20 bg-white/5 light:bg-black/5 text-white light:text-black placeholder:text-white/40 light:placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
              placeholder="john.doe@example.com"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs sm:text-sm font-medium mb-1.5 text-white/80 light:text-black/80"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-white/20 light:border-black/20 bg-white/5 light:bg-black/5 text-white light:text-black placeholder:text-white/40 light:placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
              placeholder="••••••••"
            />
          </div>

          {/* TERMS AND CONDITIONS */}
          <div className="flex items-start gap-3 pt-2">
            <button
              type="button"
              role="checkbox"
              aria-checked={agreed}
              onClick={() => setAgreed(!agreed)}
              className={`w-5 h-5 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                agreed
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-white/40 light:border-black/40 hover:border-white light:hover:border-black"
              }`}
            >
              {agreed && <Check size={14} strokeWidth={3} />}
            </button>
            <label
              onClick={() => setAgreed(!agreed)}
              className="text-xs sm:text-sm text-white/70 light:text-black/70 cursor-pointer select-none leading-relaxed"
            >
              By creating an account, you agree to our{" "}
              <a
                href="#terms"
                onClick={(e) => e.stopPropagation()}
                className="text-blue-400 light:text-blue-600 hover:underline font-medium"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#privacy"
                onClick={(e) => e.stopPropagation()}
                className="text-blue-400 light:text-blue-600 hover:underline font-medium"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-medium text-sm sm:text-base transition-all cursor-pointer shadow-lg hover:shadow-blue-500/25"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
