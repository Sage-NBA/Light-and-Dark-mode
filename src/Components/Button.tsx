import { ArrowRight } from "lucide-react";

interface ButtonProp {
  text: string;
}

function Button({ text }: ButtonProp) {
  return (
    <button className="flex gap-2 font-light item-center">
      {text}
      <span>
        <ArrowRight />
      </span>
    </button>
  );
}

export default Button;
