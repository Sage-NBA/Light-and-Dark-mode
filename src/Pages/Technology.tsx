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
      {/* Boxes */}
      <section className=" ">
        <div className="md:w-120 md:p-10 p-5 w-fit rounded-[30px] p-3 light:border-black border-2 border-white">
          <button className="w-fit rounded-[100px] text-black text-[13px] light:text-white bg-white light:bg-black p-2 ">
            01
          </button>
          <h1 className="mt-40">Web Development</h1>
          <p className="font-light">
            Our expert team crafts bespoke websites tailored to
            <br /> your brand's need. ensuring seamless functionality
            <br />
            and stunning design to captivate your audience.
          </p>
        </div>
        {/* 02 */}
        <div className="md:w-170 md:p-10 p-5 w-fit rounded-[30px] p-3 light:border-black border-2 border-white">
          <button className="w-fit rounded-[100px] text-black text-[13px] light:text-white bg-white light:bg-black p-2 ">
            02
          </button>
          <h1 className="mt-20">Digital Marketting Strategies</h1>
          <p className="font-light">
            Harness the power of targeted digital campainge designed to maximize
            your
            <br /> online reach and drive conversions. with our data-driven
            appraoch delivery
            <br />
            measurable results every time.
          </p>
        </div>
        {/* 03 */}
        <div className="md:w-110 md:p-10 p-5 w-fit rounded-[30px] p-3 light:border-black border-2 border-white">
          <button className="w-fit rounded-[100px] text-black text-[13px] light:text-white bg-white light:bg-black p-2 ">
            03
          </button>
          <h1 className="mt-10">Creative Design Service</h1>
          <p className="font-light">
            from eye-catching visuals to intuitive user experiences, our
            <br /> creative design services breath life into your brand,
            ensuring
            <br />
            measurable interactions that resonate with your audience.
          </p>
        </div>
        {/* 04 */}
        <div className="md:w-80 md:p-10 p-5 w-fit rounded-[30px] p-3 light:border-black border-2 border-white">
          <button className="w-fit rounded-[100px] text-black text-[13px] light:text-white bg-white light:bg-black p-2 ">
            04
          </button>
          <h1 className="mt-10">E-Commerce</h1>
          <p className="font-light">
            Elevate your online metal experience
            <br />
            with our comprehensive e-commece
            <br />
            solutions, from user-friendly
            <br />
            intuituion to secure payment
            <br />
            gateways, we empower businesses to
            <br />
            threive in the digital marketplace.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
