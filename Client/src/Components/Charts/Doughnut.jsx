import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export const data = {
  datasets: [
    {
      data: [5, 5, 5],
      backgroundColor: ["#FF764C", "#70CF97", "#A162F7"],
      borderColor: "transparent",
      weight: 80,
      borderJoinStyle: "round"
    },
  ],
};

const options = {
  cutout: "85%",
};

export function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
