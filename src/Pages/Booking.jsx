import Heading from "../Components/Heading/Heading";
import Container from "../Components/Container/Container";
import GridLayout from "../Components/DisplayLayouts/GridLayout";
import FlexLayout from "../Components/DisplayLayouts/FlexLayout";
import { bookingCars } from "../_DB/db";

import arrowDown from "../Assets/Icons/arrowDown.svg";
import dash from "../Assets/Icons/dash.svg";
import filter from "../Assets/Icons/filter.svg";
import BookingCar from "../Components/Cards/BookingCar";
import { useState } from "react";

const Booking = () => {
  const [allCars, setAllCars] = useState(bookingCars);

  const handleLike = (obj) => {
    const index = allCars.indexOf(obj);
    const likedObj = Object.defineProperty(obj, "liked", {
      value: !obj.liked,
      writable: true,
    });
    setAllCars(allCars.splice(index, 1, likedObj));
  };

  return (
    <Container>
      <Heading title="Booking" />
      <FlexLayout>
        <FlexLayout>
          {["New", "Toyota"].map((el, i) => (
            <FlexLayout
              key={i}
              className="bg-white px-4 cursor-pointer py-2 rounded-full !space-x-2"
            >
              <h2 key={i} className="text-primaryGray text-[14px] font-[500]">
                {el}
              </h2>
              <img src={arrowDown} alt="" />
            </FlexLayout>
          ))}
        </FlexLayout>
        <FlexLayout>
          {[dash, filter].map((el, i) => (
            <FlexLayout
              key={i}
              className={`h-9 w-9 rounded-full cursor-pointer ${
                i === 0 ? `bg-white` : `bg-primaryColor`
              }`}
            >
              <img src={el} alt="" className="mx-auto h-4" />
            </FlexLayout>
          ))}
        </FlexLayout>
      </FlexLayout>
      <GridLayout colCount={4} rowGap={16} columnGap={16} className="!mt-10">
        {bookingCars.map((car, i) => (
          <BookingCar
            carImage={car.carImage}
            carName={car.name}
            liked={car.liked}
            key={i}
            likeFn={() => handleLike(car)}
          />
        ))}
      </GridLayout>
    </Container>
  );
};

export default Booking;
