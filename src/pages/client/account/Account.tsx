import { useState } from "react";
import { HiCamera } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Account = () => {
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

          {/* Right */}
          <div className="w-full lg:w-4/6">
            {/* Account Details */}
            <div>
              <p className="text-xl font-semibold">Account Details</p>
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  First name *
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  last name *
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  Email *
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
            </div>
            {/* Password */}
            <div className="mt-10">
              <p className="text-xl font-semibold">Password</p>
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  Old password
                </label>
                <input
                  type="text"
                  placeholder="Old password"
                  className="border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  New password
                </label>
                <input
                  type="text"
                  placeholder="New password"
                  className="border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  Repeat new password
                </label>
                <input
                  type="text"
                  placeholder="Repeat new password"
                  className="border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
              <div className="mt-5">
                <button className="bg-black text-white px-8 py-2 rounded-md">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
