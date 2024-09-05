import { BsList } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="px-5 py-5 flex justify-between bg-white">
      <div className="flex gap-6 items-center">
        <BsList size={20} />
        <div className="flex gap-2 items-center border border-[#D5D5D5] bg-[#f5f6fa] px-4 py-1 rounded-3xl text-[#8b8c8f]">
          <FiSearch size={18} />
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none bg-transparent"
          />
        </div>
      </div>
      <Link to={"/"}>
        <div className="flex items-center gap-4">
          <div className="bg-red-500 rounded-full w-8 h-8"></div>
          <div>
            <p className="text-sm font-bold text-[#404040]">To Tuyen</p>
            <p className="text-xs font-normal text-[#565656]">Admin</p>
          </div>
          <div className="border rounded-full p-1">
            <IoIosArrowDown />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopBar;
