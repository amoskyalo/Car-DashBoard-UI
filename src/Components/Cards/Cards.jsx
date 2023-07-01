import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const DashboardCads = ({
  icon,
  text,
  percentage,
  color,
  index,
  pathColor,
}) => {
  return (
    <div
      className={`${
        index === 0 ? `bg-[#A162F7] text-white` : `bg-white text-[#242731]`
      } p-8 flex flex-row justify-between items-center font-bold rounded-2xl cursor-pointer duration-500 hover:scale-105`}
    >
      <div className="text-center space-y-2">
        <div
          className="p-2 h-10 w-10 mx-auto rounded-full flex flex-row items-center"
          style={{ backgroundColor: color }}
        >
          <img src={icon} alt="" className="mx-auto" />
        </div>
        <h2 className="font-semibold text-lg">{text}</h2>
      </div>
      <div className="w-1/2 items-center">
        <div className="w-[80px] mx-auto">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              trailColor: index === 0 ? "#B37EFC" : "#F4F5F9",
              textColor: index === 0 ? "white" : "#242731",
              pathColor: `rgba(${pathColor})`,
            })}
          />
        </div>
      </div>
    </div>
  );
};
