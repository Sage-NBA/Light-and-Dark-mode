import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <div>
      <h1 className="md:text-9xl text-5xl text-center font-light">
        {" "}
        <span className="pr-40">THE TECH</span>
        <br />
        <span className="text-blue-500 md:pl-30">WEB</span>
        <br />
        PRODUCTION
        <br />
        <span className="text-blue-500 md:pl-100">AGENCY</span>
      </h1>
      {/* Headends */}
      <div className="w-fit ml-auto md:mr-50">
        <p className="text-[13px]">
          Unlock your digital potential with tech web production agency. We
          offer
          <br /> innotice solutions in web development, degital marketing and
          creative design
          <br />
          to elevate your online presence and drive measurable results.
        </p>
        {/* Buttons */}
        <section className="flex gap-1">
          <div className="w-fit text-[13px] text-black light:text-white bg-white light:bg-black py-2 px-4 rounded-[30px]">
            <p>Services</p>
          </div>
          <button className="w-fit rounded-[100px] text-black light:text-white bg-white light:bg-black p-2 ">
            <ArrowRight />
          </button>
        </section>
      </div>
      {/* services */}
      <div className="p-10">
        {" "}
        <h1 className="md:text-5xl text-3xl font-light">Our Services</h1>
        <p className="font-light">
          Explore our array of sevices from web development to e-commerce
          <br />
          Solutions designed to elevate your online presence and drive success
          in
          <br />
          the digital landscape.
        </p>
      </div>
    </div>
  );
}

export default Home;
