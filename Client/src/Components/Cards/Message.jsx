import Avatar from "../Avatar/Avatar";
import FlexLayout from "../DisplayLayouts/FlexLayout";

const Message = ({ index, ...props }) => {
  return (
    <FlexLayout
      {...props}
      className={`!items-start ${
        index % 2 !== 0 ? `ml-auto flex-row-reverse w-[52%]` : `w-1/2`
      }`}
    >
      <Avatar />
      <div className="flex-1">
        <div
          className={`${
            index % 2 !== 0
              ? `bg-primaryColor text-white rounded-tr-none mr-4`
              : `bg-[#F2F6F8] text-primaryDark rounded-tl-none`
          } p-2 rounded-xl`}
        >
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            libero? Lorem ipsum dolor sit amet.
          </p>
        </div>
        <p
          className={`text-[10px] font-[500] mt-1 ${
            index % 2 !== 0 ? `text-left` : `text-right`
          }`}
        >
          4:30PM
        </p>
      </div>
    </FlexLayout>
  );
};

export default Message;
