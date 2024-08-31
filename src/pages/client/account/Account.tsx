import NavAccount from "../../../components/NavAccount";

const Account = () => {
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
