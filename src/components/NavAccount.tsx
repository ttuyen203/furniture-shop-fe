import { useState } from "react";
import { HiCamera } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const NavAccount = () => {
  const [isOpenSelectMenu, setIsOpenSelectMenu] = useState(false);

  return (
    <>
      <div className="w-full lg:w-1/5">
        <div className="bg-[#F3F5F7] py-10 rounded-lg">
          {/* Avatar */}
          <div className="flex justify-center">
            <Link to="/">
              <div className="relative max-w-[80px]">
                <p className="absolute bottom-1 -right-2 bg-black border-2 border-[#F3F5F7] text-white w-8 h-8 flex justify-center items-center rounded-full text-xs">
                  <HiCamera size={16} />
                </p>
                <img
                  src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724856893/avatar-demo_wbpnjh.png"
                  alt="Avatar"
                />
              </div>
            </Link>
          </div>
          {/* Name */}
          <div>
            <p className="text-xl font-semibold text-center mt-2">
              Sofia Havertz
            </p>
          </div>

          {/* Nav */}
          <div className="hidden lg:block px-5 mt-10">
            <Link to={"/account"}>
              <p className="font-semibold border-b border-black pb-2">
                Account
              </p>
            </Link>
            <Link to={"/account/address"}>
              <p className="font-semibold text-[#6C7275] mt-3">Address</p>
            </Link>
            <Link to={"/account/orders"}>
              <p className="font-semibold text-[#6C7275] mt-3">Orders</p>
            </Link>
            <Link to={"/account/wishlist"}>
              <p className="font-semibold text-[#6C7275] mt-3">Wishlist</p>
            </Link>
            <Link to={"/"}>
              <p className="font-semibold text-[#6C7275] mt-3">Log Out</p>
            </Link>
          </div>

          {/* Nav Mobile */}
          <div className="block lg:hidden px-5 mt-5">
            <div className="border-2 border-[#6c7275] p-1 rounded-lg bg-white">
              <button
                onClick={() => setIsOpenSelectMenu(!isOpenSelectMenu)}
                className="w-full text-base font-semibold px-2 flex items-center justify-between"
              >
                Account
                <MdKeyboardArrowDown size={20} />
              </button>
            </div>
            {isOpenSelectMenu && (
              <div className="w-full border-2 mt-1 p-2 rounded-lg bg-white">
                <Link to={"/account/address"}>
                  <p className="text-base font-normal hover:bg-[#F3F5F7] hover:font-semibold px-1.5 rounded-md py-2 cursor-pointer">
                    Address
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavAccount;
