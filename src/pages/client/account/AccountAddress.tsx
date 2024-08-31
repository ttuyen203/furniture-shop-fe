import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavAccount from "../../../components/NavAccount";

const AccountAddress = () => {
  return (
    <>
      <div className="flex justify-center">
        <p className="text-[40px] lg:text-[54px] font-medium mt-5">
          My Account
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-4/5 mt-10 mb-10 flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left */}
          <NavAccount />

          {/* Right */}
          <div className="w-full lg:w-4/6">
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
