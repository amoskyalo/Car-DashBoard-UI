import Arrow from "../../Assets/Icons/arrowDown.svg";
import { Checkbox } from "@mui/material";
import { BsGraphUp } from "react-icons/bs";
import DeaultButton from "../Buttons/Deault";

const AvailableSensors = () => {
  return (
    <div className="bg-white p-6 rounded-2xl space-y-2">
      <div className="flex flex-row items-center justify-between border-b pb-1">
        <h2 className="font-semibold text-lg">Available Sensors</h2>
        <div className="flex flex-row items-center gap-3 cursor-pointer">
          <h2 className="text-[14px] font-[500]">Assets</h2>
          <img src={Arrow} alt="" />
        </div>
      </div>

      <div className="!mb-4">
        {[
          "Fuel Consumed (10Ltr)",
          "Odometer (km)",
          "Runtime (km)",
          "Speed (hr)",
          "Engine Temeperatures (deg C)",
        ].map((el, i) => (
          <div
            className={`flex flex-row items-center justify-between font-[500] ${
              i === 0 ? `text-primaryRed` : ``
            }`}
          >
            <div className="flex flex-row items-center">
              <Checkbox className={`${i === 0 ? `!text-primaryRed` : ``}`} />
              <h2 className="ont-semibold">
                {i !== 4 ? "Asset-" : ""}
                {el}
              </h2>
            </div>
            <BsGraphUp />
          </div>
        ))}
      </div>

      <DeaultButton title="See All" color="#FF6370" />
    </div>
  );
};

export default AvailableSensors;
