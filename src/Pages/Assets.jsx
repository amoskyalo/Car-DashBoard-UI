import car from "../Assets/Cars/assetCar.svg";
import { LineChart } from "../Components/Charts/LineChart";
import Noties from "../Components/Cards/Noties";
import AvailableSensors from "../Components/Cards/AvailableSensors";
import Reminders from "../Components/Cards/Reminders";

const Assets = () => {
  const dummyData = [
    {
      name: "Fule Usage",
      value: "2903.89 Ltr",
    },
    {
      name: "Fule Usage",
      value: "1200.89 Km",
    },
    {
      name: "Fule Usage",
      value: "$3,000,290.00",
    },
    {
      name: "Fule Usage",
      value: "186 Km/hr",
    },
  ];

  const data = {
    labels: Array(12).fill("12/9"),
    datasets: [
      {
        data: [8, 12, 14, 15, 13.5, 16, 17, 19, 20, 23, 22, 25, 30],
        borderColor: "#8678e1",
        tension: 0.4,
        borderWidth: 1.5,
        pointRadius: 0,
        fill: "start",
      },
    ],
  };

  data.datasets[0].backgroundColor = (context) => {
    const ctx = context.chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    gradient.addColorStop(0, "#8668E9");
    gradient.addColorStop(0.7, "#ffffff ");
    return gradient;
  };

  return (
    <div className="p-8 space-y-4 relative">
      <h2 className="font-semibold text-2xl text-primaryDark">Assets</h2>
      <div className="flex flex-row gap-8">
        <div className="w-[30%] sticky top-24 bg-primaryBlue text-white py-8 px-6 rounded-2xl h-[500px]">
          <div className="flex flex-row flex-wrap gap-y-4">
            {dummyData.map((d, i) => (
              <div
                key={i}
                className="w-1/2 space-y-2 font-semibold border-[#579BFF] even:pl-10 even:border-l-2 odd:border-r-2"
              >
                <h2 className="opacity-90">{d.name}</h2>
                <h1 className="text-xl">{d.value}</h1>
              </div>
            ))}
          </div>
          <div className="w-full">
            <img src={car} alt="" className="mx-auto h-[450px]" />
          </div>
        </div>

        <div className="flex-1 space-y-8 text-primaryGray">
          <div className="p-8 bg-white rounded-2xl h-80 space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h2 className="font-semibold text-lg">Activity</h2>
              <p className="text-primaryGray border-b border-gray-300 text-[14px] px-2 font-[500] cursor-pointer">
                View All
              </p>
            </div>
            <div className="h-full pb-8">
            <LineChart data={data} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <Noties />
            <AvailableSensors />
          </div>

          <Reminders />
        </div>
      </div>
    </div>
  );
};

export default Assets;
