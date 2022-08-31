const Hire = () => {
  return (
    <div className="flex items-center justify-center bg-darker pt-10 pb-14 md:py-32">
      <div className="text-center">
        <div className="font-roboto-slab text-[10px] font-semibold text-secondary md:text-sm lg:text-base">
          <span>Have any Project in Mind?</span>
        </div>
        <div className="mb-5 font-roboto-slab text-2xl font-extrabold text-accent-lighter md:text-4xl lg:text-5xl">
          <span>Just Say Hello!</span>
        </div>
        <button className="rounded-lg bg-accent/80 py-2 px-4 font-roboto text-xs font-semibold uppercase text-white transition-all hover:bg-accent md:px-8 md:text-[13px] lg:text-[15px]">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Hire;
