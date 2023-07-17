import { RiSendPlaneFill } from "react-icons/ri";
import FlexLayout from "../DisplayLayouts/FlexLayout";
import Avatar from "../Avatar/Avatar";

const ConnectedUser = ({ username }) => {
  return (
    <FlexLayout className="cursor-pointer">
      <Avatar avatarUrl="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg">
        <div>
          <h2 className="font-semibold text-sm">{username}</h2>
          <p className="text-[11px] text-primaryGreen italic">
            Click to start a chat with {username}
          </p>
        </div>
      </Avatar>

      <div className="bg-[#F2F6F8] p-2 rounded-full cursor-pointer">
        <RiSendPlaneFill className="text-primaryGreen" />
      </div>
    </FlexLayout>
  );
};

export default ConnectedUser;
