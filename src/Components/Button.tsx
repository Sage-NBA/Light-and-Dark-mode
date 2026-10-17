import { ArrowRight } from "lucide-react";

interface ButtonProp {
  text: string;
  onClick?: () => void;
  className?: string;
}

function Button({ text, onClick, className = "" }: ButtonProp) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white light:text-black hover:text-blue-400 light:hover:text-blue-600 transition-all cursor-pointer ${className}`}
    >
      <span>{text}</span>
      <ArrowRight
        size={18}
        className="group-hover:translate-x-1 transition-transform duration-200"
      />
    </button>
  );
}

export default Button;
