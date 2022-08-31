const About = () => {
  return (
    <div
      className="flex items-center justify-center py-20 md:py-[91px]"
      id="about"
    >
      <div className="px-14 md:max-w-md lg:max-w-[515px]">
        <div className="mb-5 font-roboto-slab text-2xl font-extrabold text-accent-lighter md:text-4xl lg:text-5xl">
          <span>Why Hire Me for Your Next Project?</span>
        </div>
        <div className="mb-5 text-justify font-poppins text-[13px] font-medium text-light lg:text-[15px]">
          <span>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </span>
        </div>
        <button className="rounded-md bg-accent/80 py-2 px-4 font-roboto text-xs font-semibold text-white transition-all hover:bg-accent md:rounded-lg md:px-5 md:text-[13px] lg:text-[15px]">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
