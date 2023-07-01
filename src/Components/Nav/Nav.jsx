import { BiSearch } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";

const Nav = () => {
  return (
    <div className="bg-white px-6 py-2 space-y-3 sticky top-0 z-50 shadow md:px-8 md:space-y-0">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-gray-500 text-[12px] font-semibold">
            Hello Amos 👋
          </h1>
          <h2 className="font-bold text-gray-700 text-lg -mt-1">Happy to see you back!</h2>
        </div>

        <div className="hidden flex-row items-center bg-[#F5F4F6] gap-2 p-2 rounded-lg md:flex">
          <BiSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none lg:min-w-[300px]"
          />
        </div>

        <div className="flex flex-row items-center gap-5">
          {[BsFillSunFill, IoIosNotifications, HiOutlineLogout].map(
            (Item, i) => (
              <div
                className="bg-gray-200 rounded-xl p-2 cursor-pointer flex flex-row items-center"
                key={i}
              >
                <Item />
              </div>
            )
          )}
        </div>
      </div>

      {/* search bar fro mobile */}
      <div className="flex flex-row items-center bg-gray-200 gap-2 p-2 rounded-xl md:hidden">
        <BiSearch className="text-xl text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default Nav;
