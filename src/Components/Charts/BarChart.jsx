import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export const BarGraph = ({
  data,
  ticks = true,
  gridY = true,
  gridX = true,
}) => {
  return (
    <Bar
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              display: ticks,
            },
            grid: {
              display: gridY,
            },
            border: {
              display: false,
            },
          },
          x: {
            border: {
              display: false,
            },
            grid: {
              display: gridX,
            },
          },
        },
        plugins: {
          title: {
            display: false,
            text: "Chart.js Bar Chart",
          },
        },
      }}
      data={data}
    />
  );
};
