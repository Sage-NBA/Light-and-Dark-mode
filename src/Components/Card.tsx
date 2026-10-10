interface props {
  text: string;
  children: React.ReactNode;
  head: string;
}

function Card({ text, children, head }: props) {
  return (
    <div className="md:w-100 w-fit light:bg-black/30 light:text-black aspect-square bg-white/20 rounded-[20px] p-5 text-center text-white space-y-5">
      <h1 className="md:text-2xl font-bold py-5">{text}</h1>
      <h2>{children}</h2>
      <p className="mt-30"> {head}</p>
    </div>
  );
}

export default Card;
