import car from "../../Assets/Icons/blueCar.svg";
import share from "../../Assets/Icons/orangeShare.svg";
import dollar from "../../Assets/Icons/dollar.svg";

import FlexLayout from "../DisplayLayouts/FlexLayout";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Offers = () => {
  const icons = [
    {
      icon: car,
      color: "#407EF9",
      backgroundColor: "#407EF91A",
    },
    {
      icon: share,
      color: "#FF6370",
      backgroundColor: "#FF7E861A",
    },
    {
      icon: dollar,
      color: "#A162F7",
      backgroundColor: "#A162F71A",
    },
  ];

  return (
    <FlexLayout className="bg-white py-4 px-8 rounded-2xl">
      <div className="space-y-2">
        <div>
          <h2 className="font-semibold text-xl">Amos Kyalo</h2>
          <p className="text-primaryRed font-[500]">
            $16,605.00{" "}
            <span className="text-[12px] text-primaryGray font-normal italic">
              average price
            </span>
          </p>
          <p className="text-sm text-primaryGray font-[500]">
            market average is $16,224.00
          </p>
        </div>
        <FlexLayout className="px-5 py-1 bg-primaryRed text-white rounded-full w-max">
          <HiOutlineArrowNarrowRight />
        </FlexLayout>
      </div>

      <div className="font-bold">
        <div className="w-20 mx-auto">
          <CircularProgressbar
            value={45}
            text={"45%"}
            strokeWidth={16}
            counterClockwise={true}
            styles={buildStyles({
              pathColor: "#70CF97",
              trailColor: "#F4F5F9",
              textColor: "#242731",
            })}
          />
        </div>
        <h2 className="text-primaryGray text-[14px] font-[500]">
          Impression Share
        </h2>
      </div>

      <div className="font-bold">
        <div className="w-20 mx-auto">
          <CircularProgressbar
            value={81}
            text={"$811"}
            strokeWidth={8}
            styles={buildStyles({
              pathColor: "#A162F7",
              trailColor: "#F4F5F9",
              textColor: "#242731",
            })}
          />
        </div>
      </div>

      {icons.map((ic, i) => (
        <div key={i}>
          <div
            style={{ backgroundColor: ic.backgroundColor }}
            className="p-1 rounded-lg flex flex-row items-enter justify-center w-max"
          >
            <img src={ic.icon} alt="" />
          </div>
          <h2 className="font-semibold text-lg" style={{ color: ic.color }}>
            $11, 178.00
          </h2>
          <p className="text-sm text-primaryGray">Model Spend</p>
        </div>
      ))}
    </FlexLayout>
  );
};

export default Offers;
