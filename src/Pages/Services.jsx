import Container from "../Components/Container/Container";
import GridLayout from "../Components/DisplayLayouts/GridLayout";
import FlexLayout from "../Components/DisplayLayouts/FlexLayout";
import DeaultButton from "../Components/Buttons/Deault";
import Radio from "@mui/material/Radio";
import CarStatus from "../Components/Cards/CarStatus";
import { DoughnutChart } from "../Components/Charts/Doughnut";

import care from "../Assets/Icons/care.svg";
import diagnostics from "../Assets/Icons/diagnostics.svg";
import cleaning from "../Assets/Icons/cleaning.svg";

import oil from "../Assets/Services/oil.svg";
import brake from "../Assets/Services/brake.svg";
import steering from "../Assets/Services/steering.svg";

const Services = () => {
  var aArray = [];
  var bArray = [];
  for (let i = 0; i < 12; i++) {
    aArray.push(`A${i + 1}`);
    bArray.push(`B${i + 1}`);
  }

  const services = [
    {
      name: "Brake fluid",
      price: Math.floor(Math.random() * 50),
    },
    {
      name: "Diagnostics",
      price: Math.floor(Math.random() * 50),
    },
    {
      name: "External Washing",
      price: Math.floor(Math.random() * 50),
    },
  ];

  const totalServiceFee = services.reduce(
    (acc, service) => acc + service.price,
    0
  );

  const servicesRequired = [
    {
      name: "Center Care",
      price: Math.floor(Math.random() * 100),
      processingTime: Math.floor(Math.random() * 10),
      icon: care,
      color: "#70CF971A",
    },
    {
      name: "Diagnostics",
      price: Math.floor(Math.random() * 100),
      processingTime: Math.floor(Math.random() * 10),
      icon: diagnostics,
      color: "#A162F71A",
    },
    {
      name: "Inner Cleaning",
      price: Math.floor(Math.random() * 100),
      processingTime: Math.floor(Math.random() * 10),
      icon: cleaning,
      color: "#FF7E861A",
    },
  ];

  const scheduledServices = [
    {
      text: "Upgrade your favorite car periodically",
      time: Math.floor(Math.random() * 24),
      fixPrice: Math.floor(Math.random() * 10000),
    },
    {
      text: "Buy spare parts for suspension",
      time: Math.floor(Math.random() * 24),
      fixPrice: Math.floor(Math.random() * 10000),
    },
  ];

  const carStatus = [
    {
      title: "Oil Level",
      part: "Engine",
      color: "#A162F7",
      percentage: Math.floor(Math.random() * 100),
      image: oil,
    },
    {
      title: "Brake Pads",
      part: "Wheels",
      color: "#70CF97",
      percentage: Math.floor(Math.random() * 100),
      image: brake,
    },
    {
      title: "Steering",
      part: "Drivetrain",
      percentage: Math.floor(Math.random() * 100),
      image: steering,
    },
    {
      title: "Oil Level",
      part: "Engine",
      color: "#FF764C",
      percentage: Math.floor(Math.random() * 100),
      image: oil,
    },
  ];

  return (
    <Container>
      <GridLayout colCount={3}>
        <div className="col-span-2 space-y-6">
          <h2 className="font-semibold text-lg text-primaryDark">
            Service Station
          </h2>
          <FlexLayout>
            {aArray.map((station, index) => (
              <div
                key={index}
                className={`text-center shadow-lg px-3 py-5 rounded-lg font-[500] w-full cursor-pointer duration-700 hover:scale-95 ${
                  index === 3 || index === aArray.length - 1
                    ? `bg-primaryOrange text-white`
                    : `bg-white text-primaryGray`
                }`}
              >
                <p>{station}</p>
              </div>
            ))}
          </FlexLayout>

          <FlexLayout>
            {bArray.map((station, index) => (
              <div
                key={index}
                className={`text-center shadow-lg px-3 py-5 rounded-lg font-[500] w-full cursor-pointer duration-700 hover:scale-95 ${
                  index === 0 || index === 6
                    ? `bg-primaryOrange text-white`
                    : index === bArray.length - 2
                    ? `bg-primaryColor text-white`
                    : `bg-white text-primaryGray`
                }`}
              >
                <p>{station}</p>
              </div>
            ))}
          </FlexLayout>

          <FlexLayout className="!justify-center !space-x-10">
            {["Ready", "Booked", "Current Station"].map((el, i) => (
              <FlexLayout key={i} className="!space-x-1">
                <div
                  className={`p-1.5 rounded-full ${
                    i === 0
                      ? `bg-white border border-gray-400`
                      : i === 1
                      ? `bg-primaryRed`
                      : `bg-primaryColor`
                  }`}
                />
                <p className="text-sm text-primaryGray">{el}</p>
              </FlexLayout>
            ))}
          </FlexLayout>

          <div>
            <GridLayout colCount={3}>
              <div className="space-y-5">
                <div className="bg-white p-4 rounded-2xl space-y-3 text-center h-max">
                  <h2 className="font-semibold text-lg">Your Order</h2>
                  <div className="h-32 w-32 mx-auto relative">
                    <DoughnutChart />
                    <div className="absolute top-0 left-0 w-full h-full p-6">
                      <div className="h-full w-full bg-[#F3F4F6] rounded-full flex flex-col items-center justify-center">
                        <p className="text-[10px]">
                          Service
                          <br />
                          Time
                        </p>
                        <h2 className="text-primaryColor font-semibold">
                          5, 2 <span className="text-[10px]">h</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 space-y-4">
                {services.map((el, i) => (
                  <FlexLayout key={i} className="bg-white p-3 rounded-lg">
                    <FlexLayout>
                      <div
                        className={`${
                          i === 0
                            ? `bg-primaryGreen`
                            : i === 1
                            ? `bg-primaryRed`
                            : `bg-primaryColor`
                        } p-2 rounded-full`}
                      />
                      <h2 className="font-semibold text-gray-500">{el.name}</h2>
                    </FlexLayout>
                    <h2 className="bg-[#A162F7] bg-opacity-30 py-1 px-3 rounded text-primaryColor font-semibold text-[12px]">
                      {el.price.toLocaleString("en", {
                        style: "currency",
                        currency: "usd",
                      })}
                    </h2>
                  </FlexLayout>
                ))}
                <FlexLayout>
                  <DeaultButton
                    title={`Pay ${totalServiceFee.toLocaleString("en", {
                      style: "currency",
                      currency: "usd",
                    })}`}
                    color="#A162F7"
                    className="!w-full"
                  />
                  <div className="w-full bg-[#D8D2E7] cursor-pointer py-2 text-center border border-dotted border-[#D8D2E7] rounded-lg font-semibold text-primaryGray">
                    <p>Add Service</p>
                  </div>
                </FlexLayout>
              </div>
            </GridLayout>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="font-semibold text-lg text-primaryDark">
              Services required
            </h2>

            <div className="bg-white rounded-2xl p-6 space-y-10">
              {servicesRequired.map((service, i) => (
                <FlexLayout key={i} className="!justify-start">
                  <FlexLayout
                    className="h-10 w-10 rounded-full"
                    style={{ background: service.color }}
                  >
                    <img src={service.icon} alt="" className="mx-auto" />
                  </FlexLayout>

                  <div className="space-y-2">
                    <h2 className="font-semibold text-primaryGray text-[16px]">
                      {service.name}
                    </h2>
                    <h2 className="text-[14px]">
                      <span className="font-semibold text-primaryDark">
                        Price :{" "}
                        {service.price.toLocaleString("en", {
                          style: "currency",
                          currency: "usd",
                        })}
                      </span>
                      <span className="text-gray-400 mx-4">|</span>
                      <span className="font-[500] text-primaryGray">
                        Processing : {service.processingTime} hours
                      </span>
                    </h2>
                  </div>
                </FlexLayout>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-semibold text-lg text-primaryDark">
              Service Schedule
            </h2>
            <div className="space-y-3">
              {scheduledServices.map((el, i) => (
                <FlexLayout key={i} className="!justify-start !items-start">
                  <Radio name="radio-buttons" className="!text-primaryColor" />
                  <div className="space-y-3 w-full">
                    <h2 className="font-semibold text-[16px] text-primaryGray w-3/4">
                      {el.text}
                    </h2>

                    <FlexLayout className="text-sm font-[500] text-primaryGray">
                      <p>Today, {el.time}.00</p>
                      <p>
                        Fix Price :{" "}
                        {el.time.toLocaleString("en", {
                          style: "currency",
                          currency: "usd",
                        })}
                      </p>
                    </FlexLayout>
                  </div>
                </FlexLayout>
              ))}
            </div>
          </div>
        </div>
      </GridLayout>

      <div className="bg-white rounded-2xl p-8 !mt-10">
        <GridLayout columnGap={56}>
          {carStatus.map((el, i) => (
            <CarStatus element={el} key={i} />
          ))}
        </GridLayout>
      </div>
    </Container>
  );
};

export default Services;
