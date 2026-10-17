import { User } from "lucide-react";
import Button from "../Components/Button.tsx";

const cards = [
  {
    title: "Individual therapy",
    description:
      "Private therapy sessions personalized to your mental health needs.",
    icon: User,
    buttonText: "More Details",
  },
  {
    title: "Group sessions",
    description:
      "Private therapy sessions personalized to your mental health needs.",
    icon: User,
    buttonText: "More Details",
  },

  {
    title: "Crises support",
    description:
      "Private therapy sessions personalized to your mental health needs.",
    icon: User,
    buttonText: "More Details",
  },
  {
    title: "Specialized programs",
    description:
      "Private therapy sessions personalized to your mental health needs.",
    icon: User,
    buttonText: "More Details",
  },
];

function Features() {
  return (
    <div>
      <section className="md:flex p-5 md:p-10 justify-between">
        <h1 className="text-3xl font-light">
          Support That Fits
          <br />
          <span className="text-white/50 light:text-black/50">
            Your Journey
          </span>
        </h1>
        <p className="text-white/50 light:text-black/50">
          A team commited to featuring your <br />
          emotional well-being through the guidance of
          <br />
          licensed proffesionals,providing the care and support you need.
        </p>
      </section>

      {/* Array card */}
      <section className="md:flex md:gap-10 gap-5 p-5 md:p-10 justify-between">
        <div className="space-y-10">
          {cards.map((ebere, i) => (
            <div>
              <div
                key={i}
                className="flex gap-5 font-light space-y-10  items-center"
              >
                <div className="flex gap-5 items-center space-y-5">
                  <ebere.icon
                    size={30}
                    className="bg-white/50 w-fit  rounded"
                  />
                  <div>
                    <h1 className="text-xl font-bold">{ebere.title}</h1>
                    <p>{ebere.description}</p>
                  </div>
                </div>
                <Button text={ebere.buttonText} />
              </div>
              {i !== cards.length - 1 && (
                <div className="w-fit md:w-150 h-px bg-white/30 light:bg-black/30"></div>
              )}
            </div>
          ))}
        </div>
        <p className="w-fit  md:w-90 md:aspect-6/7">
          <img
            className="w-full h-full object-cover object-center"
            src="/Images/black.jpeg"
          ></img>
        </p>
      </section>
    </div>
  );
}

export default Features;
