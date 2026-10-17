import { ArrowUpRight } from "lucide-react";

interface CardProps {
  text: string;
  children: React.ReactNode;
  head: string;
}

function Card({ text, children, head }: CardProps) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/10 light:bg-black/5 border border-white/10 light:border-black/10 hover:border-white/25 light:hover:border-black/20 text-white light:text-black transition-all duration-300 hover:-translate-y-1 group shadow-sm">
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white light:text-black">
          {text}
        </h3>
        <div className="text-sm sm:text-base text-white/75 light:text-black/75 font-light leading-relaxed">
          {children}
        </div>
      </div>

      <div className="pt-6 sm:pt-8 flex items-center justify-between border-t border-white/10 light:border-black/10 mt-6 sm:mt-8">
        <span className="text-sm sm:text-base font-medium group-hover:text-blue-400 light:group-hover:text-blue-600 transition-colors">
          {head}
        </span>
        <div className="w-8 h-8 rounded-full bg-white/10 light:bg-black/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
}

export default Card;
