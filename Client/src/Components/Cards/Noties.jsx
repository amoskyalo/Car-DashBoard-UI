import service from "../../Assets/Icons/service.svg";
import message from "../../Assets/Icons/message2.svg";
import alert from "../../Assets/Icons/alert.svg";
import FlexLayout from "../DisplayLayouts/FlexLayout";

const Noties = () => {
  const dummyData = [
    {
      day: "Monday, 6th April 2023",
      description: "Book for General Service",
      done: true,
      type: "general",
    },
    {
      day: "Monday, 6th April 2023",
      description: "Book for General Service",
      done: false,
      type: "alert",
    },
    {
      day: "Monday, 6th April 2023",
      description: "Book for General Service",
      done: false,
      type: "maintainance",
    },
  ];

  return (
    <div className="bg-white p-6 space-y-4 rounded-2xl">
      <h2 className="font-semibold text-lg">Noties</h2>
      <div className="space-y-4">
        {dummyData.map((d, i) => (
          <FlexLayout key={i}>
            <FlexLayout className="!items-center !justify-center shadow-2xl bg-white h-12 w-12 rounded-full">
              <img
                src={
                  d.type === "alert"
                    ? alert
                    : d.type === "general"
                    ? message
                    : service
                }
                alt=""
              />
            </FlexLayout>
            <div className="flex-1">
              <h2 className="font-semibold text-[16px]">{d.day}</h2>
              <p className="text-[14px]">{d.description}</p>
              <p
                className={`w-max py-1 rounded px-2 font-[500] cursor-pointer ${
                  d.done
                    ? `bg-primaryGreen text-white`
                    : `bg-[#ECEEF0] text-primaryDark`
                } text-[12px]`}
              >
                {d.done ? "COMPLETED" : "04:48-01/07/2023"}
              </p>
            </div>
          </FlexLayout>
        ))}
      </div>
    </div>
  );
};

export default Noties;
