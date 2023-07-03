import { MdOutlineRepeat } from "react-icons/md";
import { AiOutlineUser, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import FlexLayout from "../DisplayLayouts/FlexLayout";

const BookingCar = ({ carName, carImage, liked, likeFn }) => {
  return (
    <div className="bg-white rounded-2xl p-4 text-primaryGray space-y-1">
      <div>
        <FlexLayout>
          <h2 className="font-semibold text-lg text-pimryDark">{carName}</h2>
          {!liked ? (
            <AiOutlineHeart className="text-2xl cursor-pointer" onClick={likeFn} />
          ) : (
            <AiFillHeart className="text-primaryRed text-2xl" onClick={likeFn}/>
          )}
        </FlexLayout>
        <p>Coupe</p>
      </div>
      <img src={carImage} alt={carName} className="mx-auto object-contain" />
      <FlexLayout>
        <FlexLayout>
          {[
            { val: Math.floor(Math.random() * 10), icon: AiOutlineUser },
            { val: "Manual", icon: MdOutlineRepeat },
          ].map((el, i) => (
            <FlexLayout key={i} className="space-x-1">
              <el.icon className="text-primaryColor" />
              <p>{el.val}</p>
            </FlexLayout>
          ))}
        </FlexLayout>
        <p>
          <span className="text-primaryDark font-semibold">
            {(Math.random() * 1000).toLocaleString("en", {
              style: "currency",
              currency: "USD",
            })}
          </span>
          /day
        </p>
      </FlexLayout>
    </div>
  );
};

export default BookingCar;
