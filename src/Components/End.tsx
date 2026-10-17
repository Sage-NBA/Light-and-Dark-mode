import Card from "./Card";
function End() {
  const cards = [
    { text: "fuck me hard", head: "give me head naw", children: "yes daddy" },

    {
      text: "kosi fuck me hard",
      head: "spyce give me head naw",
      children: "i shouted yes daddy",
    },
  ];

  return (
    <div className="md:flex text-white light:text-black p-5 items-center md:ml-30 gap-50 justtify-center">
      <h1 className="md:text-7xl text-5xl font-light">
        Voices of the
        <br /> Future
      </h1>
      <section className=" space-y-5 mt-20">
        <div className="flex items-center light:bg-black/30 bg-white/20 rounded p-5 justify-center gap-5">
          {" "}
          <p className="w-20 h-20">
            <img
              className="w-full h-full object-cover object-center"
              src="Images/chat.jpeg"
            />
          </p>
          <p>Don't stop just yet.</p>
        </div>
        {/* another*/}
        <div className="flex items-center light:bg-black/30 bg-white/20 rounded p-5 justify-center gap-5">
          {" "}
          <p className="w-20 h-20">
            <img
              className="w-full h-full object-cover object-center"
              src="Images/com.jpeg"
            />
          </p>
          <p>Keep trying, keep up.</p>
        </div>
        {/* another */}
        <div className="flex items-center light:bg-black/30 bg-white/20 rounded p-5 justify-center gap-5">
          {" "}
          <p className="w-20 h-20">
            <img
              className="w-full h-full object-cover object-center"
              src="Images/white.jpeg"
            />
          </p>
          <p>Emmanuel Samuel.</p>
        </div>
      </section>
    </div>
  );
}

export default End;
