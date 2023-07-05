import Container from "../Components/Container/Container";
import Heading from "../Components/Heading/Heading";
import FlexLayout from "../Components/DisplayLayouts/FlexLayout";
import DropDownButtons from "../Components/DropDownMenu/DropDownButtons";
import GridLayout from "../Components/DisplayLayouts/GridLayout";
import Offers from "../Components/Cards/Offers";

import carImage from "../Assets/Cars/audi.svg";
import gradient from "../Assets/Gradients/gra1.svg";

import { BarGraph } from "../Components/Charts/BarChart";

const SellCars = () => {
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [10, 7, 17, 23, 17, 13, 19, 30],
        backgroundColor: "#FF7E861A",
        barPercentage: 1,
        hoverBackgroundColor: "#FF6370",
        borderRadius: { topLeft: 50, topRight: 50 },
        hovered: 3,
      },
    ],
  };

  return (
    <Container>
      <Heading title="Sell Cars" />
      <GridLayout colCount={3} className="font-bold text-xl text-primaryDark">
        <div className="bg-white rounded-2xl p-6 pb-20 col-span-2 relative -z-50">
          <h2 className="text-2xl">2022 Audi Q6</h2>
          <div className="absolute left-0 w-full z-50">
            <img src={carImage} alt="" className="mx-auto" />
          </div>
          <div className="relative">
            {Array(2)
              .fill(0)
              .map((__, i) => (
                <img
                  alt=""
                  src={gradient}
                  key={i}
                  className={`mx-auto object-cover ${
                    i !== 0
                      ? `absolute mx-auto -z-10 left-[15%] -mt-32`
                      : `mt-24`
                  }`}
                />
              ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 w-full space-y-8">
          <h2>Tracking History</h2>
          <div className="h-[80%]">
            <BarGraph data={barData} gridY={false} gridX={false} />
          </div>
        </div>
      </GridLayout>

      <div className="!mt-10">
        <FlexLayout>
          <h2 className="font-bold text-2xl">Offers</h2>
          <FlexLayout>
            {["New", "Toyota"].map((el, i) => (
              <DropDownButtons
                text={el}
                key={i}
                className="!text-primaryColor"
              />
            ))}
          </FlexLayout>
        </FlexLayout>

        <div className="!mt-8 space-y-4">
          {Array(2)
            .fill(0)
            .map((__, i) => (
              <Offers key={i} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default SellCars;
