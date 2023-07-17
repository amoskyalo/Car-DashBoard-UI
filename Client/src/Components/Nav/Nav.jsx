import { useState, useRef, useEffect } from "react";
import { BiHelpCircle } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { AiTwotoneSetting, AiOutlineLogout } from "react-icons/ai";
import { MdTipsAndUpdates } from "react-icons/md";
import { handleClickOutside } from "../../_Functions/Functions";
import { useNavigate } from "react-router-dom";
import DropDownComponent from "../DropDownComponent/DropDownComponent";
import FlexLayout from "../DisplayLayouts/FlexLayout";
import SearchInput from "../Inputs/SearchInput";

const Nav = () => {
  const navigate = useNavigate();
  const optionsRef = useRef(null);
  const [options, setOptions] = useState(false);

  useEffect(() => {
    handleClickOutside((event) => {
      if (optionsRef && !event.target.contains(optionsRef.current)) {
        setOptions(false);
      }
    });
  }, []);

  const profileOptions = [
    {
      type: "Settings",
      icon: AiTwotoneSetting,
    },
    {
      type: "Updates",
      icon: MdTipsAndUpdates,
    },
    {
      type: "Help",
      icon: BiHelpCircle,
    },
    {
      type: "Logout",
      icon: AiOutlineLogout,
    },
  ];

  return (
    <div className="bg-white px-6 py-2 space-y-3 sticky top-0 z-50 shadow md:px-8 md:space-y-0">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-gray-500 text-[12px] font-semibold">
            Hello Amos 👋
          </h1>
          <h2 className="font-bold text-gray-700 text-lg -mt-1">
            Happy to see you back!
          </h2>
        </div>

        <div className="hidden md:block">
          <SearchInput />
        </div>

        <div className="flex flex-row items-center gap-5">
          {[BsFillSunFill, IoIosNotifications].map((Item, i) => (
            <div
              className="bg-gray-200 rounded-xl p-2 cursor-pointer flex flex-row items-center"
              key={i}
            >
              <Item />
            </div>
          ))}

          <div
            className="h-9 w-9 cursor-pointer relative"
            onClick={(e) => {
              e.stopPropagation();
              setOptions(!options);
            }}
            ref={optionsRef}
          >
            <img
              src="https://avatars.githubusercontent.com/u/91586973?v=4"
              alt=""
              className="h-full w-full rounded-full"
            />
            {options && (
              <DropDownComponent className="right-0 mt-14 py-2">
                {profileOptions.map((opt, i) => (
                  <FlexLayout
                    key={i}
                    onClick={() => navigate("/settings")}
                    className="!justify-start py-2 px-4 text-primaryGray font-[500] text-[14px] hover:bg-gray-200"
                  >
                    <opt.icon className="text-xl text-primaryGray" />
                    <p>{opt.type}</p>
                  </FlexLayout>
                ))}
              </DropDownComponent>
            )}
          </div>
        </div>
      </div>

      {/* search bar fro mobile */}
      <div className="md:hidden">
        <SearchInput />
      </div>
    </div>
  );
};

export default Nav;
