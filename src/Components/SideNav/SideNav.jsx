import { useState } from "react";
import { Link } from "react-router-dom";
import dash from "../../Assets/Icons/dash.svg";
import user from "../../Assets/Icons/user.svg";
import car from "../../Assets/Icons/car.svg";
import bag from "../../Assets/Icons/bag.svg";
import cart from "../../Assets/Icons/cart.svg";
import services from "../../Assets/Icons/services.svg";
import calendar from "../../Assets/Icons/calender.svg";
import messages from "../../Assets/Icons/messages.svg";

import logo from "../../Assets/Logo/logo.svg";

const SideNav = () => {
  const [activeNavLink, setActiveNavLink] = useState(0);

  const navLinks = [
    {
      name: "Dashboard",
      icon: dash,
      path: "/",
    },
    {
      name: "Assets",
      icon: user,
      path: "/assets",
    },
    {
      name: "Booking",
      icon: car,
      path: "/booking",
    },
    {
      name: "Sell Cars",
      icon: bag,
      path: "/sell",
    },
    {
      name: "Buy Cars",
      icon: cart,
      path: "/buy",
    },
    {
      name: "Services",
      icon: services,
      path: "/services",
    },
    {
      name: "Calender",
      icon: calendar,
      path: "/calender",
    },
    {
      name: "Messages",
      icon: messages,
      path: "/messages",
    },
  ];

  return (
    <div className="bg-white py-8 space-y-8 px-4 w-max h-screen top-0 z-50 !sticky">
      <div>
        <img src={logo} alt="" className="h-10 mx-auto" />
      </div>

      <div className="space-y-4 relative">
        {navLinks.map((navLink, index) => (
          <Link
            to={`${navLink.path}`}
            className={`px-4 py-2 rounded duration-400 block cursor-pointer relative text-[#5F6165] duration-500 ${
              activeNavLink === index
                ? `bg-[#F3F5F8]`
                : `bg-transparent hover:bg-[#F3F5F8]`
            }`}
            key={index}
            onClick={() => setActiveNavLink(index)}
          >
            {activeNavLink === index && (
              <p className="content before:top-[0.1rem] lg:before:top-[0.3rem]"></p>
            )}
            <div className="flex flex-row items-center justify-center gap-3 lg:justify-start lg:px-4">
              <img src={navLink.icon} alt="" />
              <h2 className="font-semibold text-[16px] md:hidden lg:block">
                {navLink.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      {/* <div className="px-4 absolute bottom-8 w-full left-0 hidden lg:block">
        <div className="bg-gradient-to-tr from-[#294b4f] from-30% cursor-pointer to-primaryGreen rounded-3xl p-4 text-center text-white">
          <img src={profile} alt="" className="h-10 rounded-full mx-auto" />
          <h2 className="font-semibold text-[14px]">Amos Kyalo</h2>
          <p className="text-[12px]">Software Engineer</p>
        </div>
      </div> */}
    </div>
  );
};

export default SideNav;
