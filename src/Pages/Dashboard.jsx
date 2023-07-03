import { useState } from "react";
import { DashboardCads } from "../Components/Cards/Cards";
import { BarGraph } from "../Components/Charts/BarChart";
import { LineChart } from "../Components/Charts/LineChart";
import Container from "../Components/Container/Container";
import Heading from "../Components/Heading/Heading";
import Recommended from "../Components/Cards/Recommended";
import GridLayout from "../Components/DisplayLayouts/GridLayout";
import FlexLayout from "../Components/DisplayLayouts/FlexLayout";
import { cars, cardsData } from "../_DB/db";

const Dashboard = () => {
  const [active, setActive] = useState(0);
  const [activeOne, setActiveOne] = useState(0);

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
    <Container>
      <Heading title="Dashboard" />
      <GridLayout gap={32}>
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
      </GridLayout>

      <GridLayout gap={32}>
        <div className="w-full bg-white p-8 rounded-2xl">
          <h2 className="text-lg text-primaryGray font-[500]">
            <span className="font-semibold text-primaryDark">Miles</span>{" "}
            Statistics
          </h2>

          <FlexLayout className="text-primaryGray mb-4 mt-6">
            <FlexLayout className="space-x-8">
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
            </FlexLayout>
            <h2 className="font-semibold">256 Miles</h2>
          </FlexLayout>
          <div className="h-56">
            <BarGraph />
          </div>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
          <h2 className="text-lg text-primaryGray font-[500]">
            <span className="font-semibold text-primaryDark">Car</span>{" "}
            Statistics
          </h2>

          <FlexLayout className="flex-row-reverse text-primaryGray mb-4 mt-6">
            <FlexLayout className="bg-[#F5F4F6] rounded-full !space-x-0">
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
            </FlexLayout>
            <h2 className="font-semibold">20 February 2023</h2>
          </FlexLayout>
          <div className="h-56">
            <LineChart data={data} />
          </div>
        </div>
      </GridLayout>

      <GridLayout gap={32}>
        {cars.map((car, i) => (
          <Recommended
            key={i}
            image={car.image}
            name={car.name}
            color={car.color}
          />
        ))}
      </GridLayout>
    </Container>
  );
};

export default Dashboard;
