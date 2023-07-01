import { useState  } from "react";
import { DashboardCads } from "../Components/Cards/Cards";
import { BarGraph } from "../Components/Charts/BarChart";
import { LineChart } from "../Components/Charts/LineChart";

import range from "../Assets/Icons/range.svg";
import energy from "../Assets/Icons/energy.svg";
import fluid from "../Assets/Icons/fluid.svg";
import tire from "../Assets/Icons/tire.svg";

import car1 from '../Assets/Cars/car1.svg';
import car2 from '../Assets/Cars/car2.svg';
import car3 from '../Assets/Cars/car3.svg';
import Recommended from "../Components/Cards/Recommended";

const Dashboard = () => {
  const [active, setActive] = useState(0);
  const [activeOne, setActiveOne] = useState(0);

  const cardsData = [
    {
      text: "Energy",
      amount: "45",
      icon: energy,
      progressColor: "#A162F7",
      color: "#A66FF0",
      pathColor: "255, 255, 255",
    },
    {
      text: "Range",
      amount: "61",
      icon: range,
      color: "#FF7E861A",
      progressColor: "#FF7E86",
      pathColor: "255, 126, 134",
    },
    {
      text: "Break fluid",
      amount: "9",
      icon: fluid,
      progressColor: "#A162F7",
      color: "#A162F71A",
      pathColor: "161, 98, 247",
    },
    {
      text: "Tire Wear",
      amount: "25",
      icon: tire,
      progressColor: "#F6CC0D",
      color: "#F6CC0D1A",
      pathColor: "246, 204, 13",
    },
  ];


  const cars = [
    {
      name: "Toyota Corrolla",
      color: "#E1DFA4",
      image: car1
    },
    {
      name: "Mini Cooper",
      color: "#E3ECF1",
      image: car2
    },
    {
      name: "Porsche 911 Carrera",
      color: "#F4E3E5",
      image: car3
    },
  ]

  const data = {
    labels: ["1 pm", "2 am", "3 pm", "4 am", "5 pm", "6 pm", "7 pm"],
    datasets: [
      {
        data: [5, 10, 10, 15, 10.5, 6, 8, 20],
        borderColor: "rgb(255,118,76)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        fill: "start",
      },
    ],
  };

  data.datasets[0].backgroundColor = (context) => {
    const ctx = context.chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    gradient.addColorStop(0, "rgba(255,118,76, 0.2)");
    gradient.addColorStop(0.6, "#ffffff ");
    return gradient;
  };


  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-4 gap-8">
        {cardsData.map((c, i) => (
          <DashboardCads
            icon={c.icon}
            text={c.text}
            percentage={c.amount}
            color={c.color}
            key={i}
            index={i}
            pathColor={c.pathColor}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="w-full bg-white p-8 rounded-2xl">
          <h2 className="text-lg text-primaryGray font-[500]">
            <span className="font-semibold text-primaryDark">Miles</span>{" "}
            Statistics
          </h2>

          <div className="flex flex-row items-center justify-between text-primaryGray mb-4 mt-6">
            <div className="flex flex-row items-center space-x-8">
              {["Day", "Week", "Month"].map((item, index) => (
                <p
                  className={`text-[14px]  cursor-pointer font-[500] ${
                    index === active
                      ? `bg-primaryBlue text-white py-1 px-5 rounded-full`
                      : ``
                  }`}
                  key={index}
                  onClick={() => setActive(index)}
                >
                  {item}
                </p>
              ))}
            </div>
            <h2 className="font-semibold">256 Miles</h2>
          </div>
          <div className="h-56">
          <BarGraph />
          </div>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
          <h2 className="text-lg text-primaryGray font-[500]">
            <span className="font-semibold text-primaryDark">Car</span>{" "}
            Statistics
          </h2>

          <div className="flex flex-row-reverse items-center justify-between text-primaryGray mb-4 mt-6">
            <div className="flex flex-row items-center bg-[#F5F4F6] rounded-full">
              {["Day", "Week", "Month"].map((item, index) => (
                <p
                  className={`text-[14px]  cursor-pointer px-8 py-1.5 font-[500] ${
                    index === activeOne
                      ? `bg-primaryOrange text-white rounded-full`
                      : ``
                  }`}
                  key={index}
                  onClick={() => setActiveOne(index)}
                >
                  {item}
                </p>
              ))}
            </div>
            <h2 className="font-semibold">20 February 2023</h2>
          </div>
          <div className="h-56">
          <LineChart data={data}/>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {cars.map((car, i) => (
          <Recommended key={i} image={car.image} name={car.name} color={car.color}/>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
