import Container from "../Components/Container/Container";
import FlexLayout from "../Components/DisplayLayouts/FlexLayout";
import GridLayout from "../Components/DisplayLayouts/GridLayout";
import Heading from "../Components/Heading/Heading";
import SearchInput from "../Components/Inputs/SearchInput";
import Avatar from "../Components/Avatar/Avatar";
import { BiMessageSquareDetail, BiVideo, BiPhone } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { HiStatusOnline } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";

import edit from "../Assets/Icons/edit.svg";
import Message from "../Components/Cards/Message";
import { truncateText } from "../_Functions/Functions";
import ConnectedUser from "../Components/Cards/ConnectedUser";

const Messages = ({ connectedUsers }) => {
  function removeDuplicates() {
    const connectedArray = [];
    for (const user of connectedUsers) {
      const index = connectedArray.findIndex((x) => x.userId === user.userId);
      if (index === -1) {
        connectedArray.push(user);
      }
    }
    return connectedArray;
  }

  return (
    <Container className="h-[92vh] overflow-hidden">
      <div className="bg-white p-8 h-full rounded">
        <GridLayout colCount={3} className="h-full">
          <div className="space-y-8 h-full overflow-scroll">
            <div className="space-y-3 sticky z-50 backdrop-blur-[16px] top-0">
              <FlexLayout>
                <Heading title="Messages" />
                <img src={edit} alt="" />
              </FlexLayout>
              <SearchInput />
            </div>

            <div className="space-y-6">
              <FlexLayout className="!justify-start text-primaryGray font-[500] text-[16px]">
                <BiMessageSquareDetail />
                <p>All Messages</p>
              </FlexLayout>

              {Array(4)
                .fill(0)
                .map((__, index) => (
                  <FlexLayout
                    key={index}
                    className="cursor-pointer !items-start"
                  >
                    <Avatar showActiveIcon={true}>
                      <div className="w-full max-w-full flex-1">
                        <h2 className="font-semibold text-sm truncate">
                          Amos Kyalo
                        </h2>
                        <p className="text-xs">
                          {truncateText(
                            "Hello, its Amos, how are you doing this evening. I'm looking for this car",
                            45
                          )}
                        </p>
                      </div>
                    </Avatar>

                    <div className="flex-1 min-w-max">
                      <h2 className="text-xs text-primaryGray text-right font-semibold">
                        4:30 PM
                      </h2>
                      <div className="bg-red-600 w-4 h-4 rounded-full ml-auto text-white text-center text-xs">
                        <p>2</p>
                      </div>
                    </div>
                  </FlexLayout>
                ))}
            </div>

            <div className="space-y-6">
              <FlexLayout className="!justify-start text-primaryGray font-[500] text-[16px]">
                <HiStatusOnline className="text-primaryGreen" />
                <p>Connected users</p>
              </FlexLayout>
              {removeDuplicates().map((user, index) => (
                <ConnectedUser key={index} username={user.username} />
              ))}
            </div>
          </div>

          <div className="relative col-span-2 border rounded-2xl w-full h-full overflow-scroll text-primaryGray">
            <div className="border-b p-3 rounded-2xl sticky top-0 z-50 backdrop-blur-[6px]">
              <FlexLayout>
                <Avatar showActiveIcon={true}>
                  <div>
                    <h2 className="font-semibold text-[14px]">Amos Kyalo</h2>
                    <p className="text-[12px]">Active now</p>
                  </div>
                </Avatar>
                <FlexLayout>
                  {[BiVideo, BiPhone, FiMoreVertical].map((Item, i) => (
                    <FlexLayout
                      key={i}
                      className="bg-[#F2F6F8] p-2 rounded-full cursor-pointer"
                    >
                      <Item className="text-xl" />
                    </FlexLayout>
                  ))}
                </FlexLayout>
              </FlexLayout>
            </div>

            <div className="px-3 py-4">
              <div className="space-y-6">
                {Array(12)
                  .fill(0)
                  .map((__, index) => (
                    <Message key={index} index={index} />
                  ))}
              </div>
            </div>

            <div className="w-full left-0 bottom-0 p-4 sticky z-50 bg-white">
              <FlexLayout className="bg-[#F5F4F6] border rounded-lg px-4 cursor-pointer">
                <FlexLayout className="w-full flex-1">
                  <GrAttachment />
                  <input
                    type="text"
                    className="flex-1 bg-transparent py-2"
                    placeholder="Type something..."
                  />
                </FlexLayout>
                <RiSendPlaneFill className="text-primaryColor text-xl" />
              </FlexLayout>
            </div>
          </div>
        </GridLayout>
      </div>
    </Container>
  );
};

export default Messages;
