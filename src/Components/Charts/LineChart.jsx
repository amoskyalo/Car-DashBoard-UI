import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
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
        color: "rgba(244, 245, 249, 0.9)",
      },
    },
  },
};

export const LineChart = ({ data }) => {
  return (
    <div className="h-full">
      <Line options={options} data={data} />
    </div>
  );
};
