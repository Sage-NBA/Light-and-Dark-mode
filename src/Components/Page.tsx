function Page() {
  return (
    <div className="md:ml-10 p-10 space-y-20">
      <div className="text-white light:text-black md:text-7xl text-5xl font-light">
        LIMITLESS POSSIBILITES
        <br />
        WITH SAMVISION
      </div>
      {/* head end */}
      <section className="md:flex gap-10  ">
        <div className="light:text-black  text-white/50">
          <p className="light:hover:text-black/50  transition-colors duration-300 hover:scale-110 hover:text-white cursor-pointer">
            innovation
          </p>
          <p className="light:hover:text-black/50  transition-colors duration-300 hover:scale-110 hover:text-white cursor-pointer">
            Technology
          </p>
          <p className="light:hover:text-black/50 transition-colors duration-300 hover:scale-110 hover:text-white cursor-pointer">
            Experience
          </p>
        </div>
        {/* image */}
        <div>
          <p className="md:w-150 w-fit aspect-16/9">
            <img
              className="rounded-[20px] w-full h-full object-center object-center"
              src="Images/pick.jpg"
              alt="comic"
            />
          </p>
        </div>
        {/* image */}
        <div>
          <h1 className=" text-2xl light:text-black text-white">
            How VR is Transforming
            <br />
            Our Digital World
          </h1>
          <p className="text-white/50 light:text-black/50 py-10">
            Visual Reality (VR) is no longer a concept of the <br />
            future-it's a reality reshaping how we interact,
            <br />
            work, and entertain ourselves.
          </p>
          <p className="text-white light:text-black">Learn More</p>
          <div className="flex md:mt-19 gap-30 text-white font-light">
            <p className="text-white/50 light:text-black/60">
              06 september .007
            </p>
            <p className="light:text-black">Sammy NBA</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
