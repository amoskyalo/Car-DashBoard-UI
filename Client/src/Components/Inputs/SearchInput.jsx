import FlexLayout from "../DisplayLayouts/FlexLayout";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  return (
    <FlexLayout className="bg-[#F5F4F6] space-x-3 p-2 rounded-lg">
      <BiSearch className="text-xl text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none lg:min-w-[300px]"
      />
    </FlexLayout>
  );
};

export default SearchInput;
