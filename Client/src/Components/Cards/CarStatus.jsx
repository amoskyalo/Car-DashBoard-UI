const CarStatus = ({ element }) => {
  return (
    <div className="space-y-2">
      <img src={element.image} alt="" />
      <h2 className="font-semibold text-primaryDark">{element.title}</h2>
      <h2 className="text-primaryGray font-[500] text-[12px]">
        <span>{element.part}</span>
        <span className="text-gray-400 mx-4"> | </span>
        <span>
          {element.percentage > 70
            ? `Dont replace`
            : element.percentage <= 70 && element.percentage >= 50
            ? `Still Good`
            : `Need Change`}
        </span>
      </h2>
      <div className="relative bg-gray-300 w-full p-[2px] rounded-full !mt-4">
        <div
          className="absolute left-0 p-[3px] bg-primaryColor -top-[1px] rounded-full"
          style={{
            width: `${element.percentage}%`,
            backgroundColor: element.color,
          }}
        />
      </div>
    </div>
  );
};

export default CarStatus;
