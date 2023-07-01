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

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        display: false,
      },
      grid: {
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
    },
  },
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"];

export const data = {
  labels,
  datasets: [
    {
      data: [9, 6, 12, 5, 9, 3, 7],
      backgroundColor: "rgba(244, 245, 249, 1)",
      barPercentage: 0.6,
      hoverBackgroundColor: "rgba(40, 132, 266, 1)",
    },
  ],
};

export const BarGraph = () => {
  return <Bar options={options} data={data} />;
};
