import repeat1 from "../../Assets/Icons/repeat.svg";
import repeat2 from "../../Assets/Icons/repeate2.svg";
import settings from "../../Assets/Icons/settings.svg";
import energy from "../../Assets/Icons/energy2.svg";

const Recommended = ({ image, name, color }) => {
  return (
    <div
      style={{ background: color }}
      className="p-6 rounded-2xl font-semibold text-primaryDark space-y-2 cursor-pointer"
    >
      <div className="flex flex-row items-center gap-5">
        <img src={repeat1} alt="" />
        <h2>{Math.floor(Math.random() * 100)}% Recommended</h2>
      </div>

      <img src={image} alt="" className="mx-auto"/>

      <div>
        <h2 className="text-lg">{name}</h2>
        <div className="flex flex-row items-center justify-between text-primaryGray font-[500]">
          <div className="flex flex-row items-center gap-3">
            <img src={repeat2} alt="" />
            <p className="text-[14px]">{Math.floor(Math.random() * 1000)}K</p>
            <img src={settings} alt="" />
            <img src={energy} alt="" />
          </div>
          <p>
            {Math.floor(Math.random() * 100).toLocaleString("en", {
              style: "currency",
              currency: "USD",
            })}/h
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
