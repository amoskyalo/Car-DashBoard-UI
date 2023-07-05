import arrowDown from '../../Assets/Icons/arrowDown.svg'
import FlexLayout from '../DisplayLayouts/FlexLayout';

const DropDownButtons = ({ containerStyles, className, text, ...props }) => {
  return (
    <FlexLayout
      {...props}
      className={`bg-white px-6 cursor-pointer py-1.5 rounded-full !space-x-2 ${containerStyles}`}
    >
      <h2 className={`text-primaryGray text-[14px] font-[500] ${className}`}>
        {text}
      </h2>
      <img src={arrowDown} alt="" />
    </FlexLayout>
  );
};

export default DropDownButtons;
