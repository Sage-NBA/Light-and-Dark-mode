import Card from "./Card";
import { ChevronRight, ChevronLeft } from "lucide-react";

function CardPage() {
  return (
    <div>
      <section className="text-white md:ml-10 p-5 md:p-10 light:text-black space-y-10">
        <h3 className="flex items-center md:justify-between">
          <h1 className="md:text-7xl text-5xl font-light">Our Services</h1>

          <div className="md:flex hidden gap-5">
            <p className="w-fit h-fit bg-white/20 text-7xl rounded-[100px]">
              <ChevronLeft />
            </p>
            <p className="w-fit h-fit bg-white/20 rounded-[100px]">
              <ChevronRight />
            </p>
          </div>
        </h3>

        <div className="md:flex md:gap-10 space-y-10 md:space-y-0">
          <Card
            text="Reality Development"
            children={
              <p>
                Step into the future with our VR
                <br />
                development services. designed to create
                <br />
                immerssive digital experience.
              </p>
            }
            head="Learn more"
          />

          {/* card two */}
          <Card
            text="Digital Assistance"
            children={
              <p>
                Enhance customer engagement and operational
                <br />
                efficiency with our AI-powered digital
                <br />
                These intelligent Avatars
              </p>
            }
            head="Learn more"
          />
          {/* card three  */}
          <Card
            text="Gaming Solutions"
            children={
              <p>
                Step into the future with our VR
                <br />
                development services. designed to create
                <br />
                immerssive digital experience.
              </p>
            }
            head="Learn more"
          />
        </div>
      </section>
    </div>
  );
}

export default CardPage;
