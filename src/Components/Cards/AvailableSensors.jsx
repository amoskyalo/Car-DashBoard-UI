import Arrow from "../../Assets/Icons/arrowDown.svg";
import { Checkbox } from "@mui/material";
import { BsGraphUp } from "react-icons/bs";
import DeaultButton from "../Buttons/Deault";
import FlexLayout from "../DisplayLayouts/FlexLayout";

const AvailableSensors = () => {
  return (
    <div className="bg-white p-6 rounded-2xl space-y-2">
      <FlexLayout className="border-b pb-1">
        <h2 className="font-semibold text-lg">Available Sensors</h2>
        <FlexLayout className="cursor-pointer">
          <h2 className="text-[14px] font-[500]">Assets</h2>
          <img src={Arrow} alt="" />
        </FlexLayout>
      </FlexLayout>

      <div className="!mb-4">
        {[
          "Fuel Consumed (10Ltr)",
          "Odometer (km)",
          "Runtime (km)",
          "Speed (hr)",
          "Engine Temeperatures (deg C)",
        ].map((el, i) => (
          <FlexLayout
            className={`font-[500] ${i === 0 ? `text-primaryRed` : ``}`}
          >
            <div className="flex flex-row items-center">
              <Checkbox
                defaultChecked={i === 0 ? true : false}
                className={`${i === 0 ? `!text-primaryRed` : ``}`}
              />
              <h2 className="ont-semibold">
                {i !== 4 ? "Asset-" : ""}
                {el}
              </h2>
            </div>
            <BsGraphUp />
          </FlexLayout>
        ))}
      </div>

      <DeaultButton title="See All" color="#FF6370" />
    </div>
  );
};

export default AvailableSensors;
