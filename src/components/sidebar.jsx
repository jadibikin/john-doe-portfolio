import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ show, handleSidebar }) => {
  const sidebarMenu = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];

  return (
    <div
      className={`fixed inset-y-0 z-20 flex w-[320px] flex-col bg-dark py-[20px] pl-[40px] pr-[20px] text-white transition-all ${
        show ? "right-0" : "-right-full"
      }`}
    >
      <div className="mb-[30px] text-right">
        <FontAwesomeIcon
          icon={faXmark}
          className="text-2xl"
          onClick={handleSidebar}
        />
      </div>
      <div className="space-y-[30px] font-roboto text-[20px] font-semibold">
        {sidebarMenu.map((menu, i) => (
          <a href={menu.link} key={i} className="block">
            {menu.name}
          </a>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-x-4">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-darkest">
          <FontAwesomeIcon icon={faPhone} className="-rotate-90" />
        </div>
        <a
          href="#contact-me"
          className="block rounded-lg bg-accent/90 px-4 py-2 font-poppins text-[15px] font-bold"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
