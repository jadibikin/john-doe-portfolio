import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";

const Contact = () => {
  const contacts = [
    {
      text: "Call Me Now",
      value: "+1 234 5678 901",
      icon: faPhone,
    },
    {
      text: "Chat with Me",
      value: "john@doe.com",
      icon: faEnvelope,
    },
    {
      text: "Get Me Here",
      value: "45/B, London, UK",
      icon: faMugHot,
    },
  ];

  return (
    <div id="contact-me">
      <div className="-mt-[15px] md:-mt-[25px] lg:-mt-[30px]">
        <img
          src={Logo}
          alt="Logo"
          className="mx-auto h-[30px] w-[30px] rounded-lg md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]"
        />
      </div>
      <div className="mx-10 flex max-w-xs flex-col justify-center gap-y-14 py-20 text-white sm:mx-auto md:max-w-xl md:gap-y-20 md:py-24 lg:max-w-none lg:flex-row lg:gap-x-14 lg:py-36 xl:gap-x-24">
        <div>
          <div className="mb-8 font-roboto-slab text-2xl font-extrabold md:text-[30px] lg:mb-16 lg:text-[45px] xl:text-5xl">
            <span>Talk Or Meet With Me</span>
          </div>
          <div className="flex flex-col gap-y-10">
            {contacts.map((list, i) => (
              <div key={i} className="flex items-center gap-x-4 md:gap-x-8">
                <div>
                  <FontAwesomeIcon
                    icon={list.icon}
                    className="text-4xl text-accent-lighter lg:text-[40px] xl:text-[50px]"
                  />
                </div>
                <div>
                  <div className="font-roboto-slab text-sm text-[10px] font-semibold text-secondary lg:text-[12px] xl:text-[15px]">
                    <span>{list.text}</span>
                  </div>
                  <div className="font-poppins text-[15px] font-semibold md:text-2xl lg:text-3xl xl:text-[32px]">
                    <span>{list.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-8 font-roboto-slab text-2xl font-semibold md:text-[30px] lg:mb-16 lg:text-[45px] xl:text-5xl">
            <span>Let Me Know Here</span>
          </div>
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full rounded-md bg-dark px-5 py-4 pr-11 font-poppins text-[12px] font-semibold text-input placeholder:text-secondary md:text-sm lg:text-base"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute top-5 right-5 text-accent-lightest"
            />
          </div>
          <div className="relative mb-3">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full rounded-md bg-dark px-5 py-4 pr-11 font-poppins text-[12px] font-semibold text-input placeholder:text-secondary md:text-sm lg:text-base"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute top-5 right-5 text-accent-lightest"
            />
          </div>
          <div className="relative mb-6">
            <textarea
              rows={3}
              placeholder="Tell me details about your project..."
              className="h-28 w-full rounded-md bg-dark px-5 py-4 pr-11 font-poppins text-[12px] font-semibold text-input placeholder:text-secondary md:h-full md:text-sm lg:text-base"
            />
            <FontAwesomeIcon
              icon={faStickyNote}
              className="absolute top-5 right-5 text-accent-lightest"
            />
          </div>
          <button className="rounded-lg bg-accent/80 py-2 px-4 font-roboto text-xs font-semibold transition-all hover:bg-accent md:px-6 md:text-sm lg:px-8 lg:text-base">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
