import { useState } from "react";
import { HiCamera } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";

const AccountAddress = () => {
  const [isOpenSelectMenu, setIsOpenSelectMenu] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <p className="text-[40px] lg:text-[54px] font-medium mt-5">Account</p>
      </div>

      <div className="flex justify-center">
        <div className="w-4/5 mt-10 mb-10 flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left */}
          <div className="w-full lg:w-1/5">
            <div className="bg-[#F3F5F7] py-10 rounded-lg">
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
              <div>
                <p className="text-xl font-semibold text-center mt-2">
                  Sofia Havertz
                </p>
              </div>
              <div className="hidden lg:block px-5 mt-10">
                <Link to={"/account"}>
                  <p className="font-semibold border-b border-black pb-2">
                    Account
                  </p>
                </Link>
                <Link to={"/account/address"}>
                  <p className="font-semibold text-[#6C7275] mt-3">Address</p>
                </Link>
                <Link to={"/"}>
                  <p className="font-semibold text-[#6C7275] mt-3">Orders</p>
                </Link>
                <Link to={"/"}>
                  <p className="font-semibold text-[#6C7275] mt-3">Wishlist</p>
                </Link>
                <Link to={"/"}>
                  <p className="font-semibold text-[#6C7275] mt-3">Log Out</p>
                </Link>
              </div>
              <div className="block lg:hidden px-5 mt-5">
                <div className="border-2 border-[#6c7275] p-1 rounded-lg bg-white">
                  <button
                    onClick={() => setIsOpenSelectMenu(!isOpenSelectMenu)}
                    className="w-full text-base font-semibold px-2 flex items-center justify-between"
                  >
                    Address
                    <MdKeyboardArrowDown size={20} />
                  </button>
                </div>
                {isOpenSelectMenu && (
                  <div className="w-full border-2 mt-1 p-2 rounded-lg bg-white">
                    <Link to={"/account"}>
                      <p className="text-base font-normal hover:bg-[#F3F5F7] hover:font-semibold px-1.5 rounded-md py-2 cursor-pointer">
                        Account
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-4/5">
            {/* Address */}
            <div>
              <p className="text-xl font-semibold">Address</p>
              <div className="flex lg:flex-wrap flex-col lg:flex-row mt-3 gap-5">
                <div className="w-full lg:w-[45%]">
                  <div className="border border-[#6c7275] rounded-md p-3">
                    <div className="flex justify-between">
                      <p className="font-semibold">Billing Address</p>
                      <Link to={"/"}>
                        <div className="flex gap-1 text-[#6C7275] items-center">
                          <FiEdit3 />
                          <p>Edit</p>
                        </div>
                      </Link>
                    </div>
                    <div className="text-sm font-normal mt-3">
                      <p>Sofia Havertz</p>
                    </div>
                    <div className="text-sm font-normal mt-2">
                      <p>(+1) 234 567 890</p>
                    </div>
                    <div className="text-sm font-normal mt-2">
                      <p>345 Long Island, NewYork, United States</p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[45%]">
                  <div className="border border-[#6c7275] rounded-md p-3">
                    <div className="flex justify-between">
                      <p className="font-semibold">Billing Address</p>
                      <Link to={"/"}>
                        <div className="flex gap-1 text-[#6C7275] items-center">
                          <FiEdit3 />
                          <p>Edit</p>
                        </div>
                      </Link>
                    </div>
                    <div className="text-sm font-normal mt-3">
                      <p>Sofia Havertz</p>
                    </div>
                    <div className="text-sm font-normal mt-2">
                      <p>(+1) 234 567 890</p>
                    </div>
                    <div className="text-sm font-normal mt-2">
                      <p>345 Long Island, NewYork, United States</p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[45%]">
                  <div className="border border-[#6c7275] rounded-md p-3">
                    <div className="flex justify-between">
                      <p className="font-semibold">Billing Address</p>
                      <Link to={"/"}>
                        <div className="flex gap-1 text-[#6C7275] items-center">
                          <FiEdit3 />
                          <p>Edit</p>
                        </div>
                      </Link>
                    </div>
                    <div className="text-sm font-normal mt-3">
                      <p>Sofia Havertz</p>
                    </div>
                    <div className="text-sm font-normal mt-2">
                      <p>(+1) 234 567 890</p>
                    </div>
                    <div className="text-sm font-normal mt-2">
                      <p>345 Long Island, NewYork, United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountAddress;
