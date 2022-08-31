import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  const serviceList = [
    {
      name: "Website Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: faDisplay,
    },
    {
      name: "Mobile App Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: faMobileScreen,
    },
    {
      name: "Game Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: faGamepad,
    },
  ];

  return (
    <div
      className="overflow-x-hidden bg-darker pt-20 pb-14 md:pt-32 md:pb-44"
      id="services"
    >
      <div className="mb-10 text-center font-roboto-slab text-2xl font-extrabold text-accent-lighter md:text-4xl lg:mb-[70px] lg:text-5xl">
        <span>What I Do?</span>
      </div>
      <div className="flex flex-col items-center justify-center px-14 text-center md:px-0 lg:flex-row xl:gap-x-10">
        {serviceList.map((service, i) => (
          <div key={i} className="group relative">
            <div className="relative z-10 rounded-md py-8 px-6 transition-all md:w-[280px] md:py-16 md:group-hover:bg-dark lg:w-[330px]">
              <div>
                <div className="mb-6 text-white md:mb-9">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-5xl md:text-6xl"
                  />
                </div>
                <div className="mb-[10px] font-roboto-slab text-[15px] font-bold text-white md:text-lg lg:text-xl">
                  <span>{service.name}</span>
                </div>
                <div className="font-poppins text-[13px] font-semibold text-secondary lg:text-[15px]">
                  <span>{service.description}</span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 z-0 hidden h-full w-full rounded-lg bg-accent/0 transition-all group-hover:top-[12px] group-hover:left-[12px] group-hover:bg-accent/100 md:block" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
