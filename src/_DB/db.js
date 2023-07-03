import range from "../Assets/Icons/range.svg";
import energy from "../Assets/Icons/energy.svg";
import fluid from "../Assets/Icons/fluid.svg";
import tire from "../Assets/Icons/tire.svg";

import car1 from "../Assets/Cars/car1.svg";
import car2 from "../Assets/Cars/car2.svg";
import car3 from "../Assets/Cars/car3.svg";

export const cardsData = [
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


export const cars = [
  {
    name: "Toyota Corrolla",
    color: "#E1DFA4",
    image: car1,
  },
  {
    name: "Mini Cooper",
    color: "#E3ECF1",
    image: car2,
  },
  {
    name: "Porsche 911 Carrera",
    color: "#F4E3E5",
    image: car3,
  },
];
