import NavAccount from "../../../components/NavAccount";

const Orders = () => {
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
            {/* Orders History */}
            <div>
              <p className="text-xl font-semibold">Orders History</p>
              <div className="hidden lg:block w-full mt-5">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#6c7275]">
                      <th className="text-left py-3 text-sm font-normal text-[#6C7275]">
                        Number ID
                      </th>
                      <th className="text-left py-3 text-sm font-normal text-[#6C7275]">
                        Dates
                      </th>
                      <th className="text-left py-3 text-sm font-normal text-[#6C7275]">
                        Status
                      </th>
                      <th className="text-left py-3 text-sm font-normal text-[#6C7275]">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4">
                        <p className="text-sm font-normal text-[#141718]">
                          #3456_768
                        </p>
                      </td>
                      <td className="py-4">
                        <p className="text-sm font-normal text-[#141718]">
                          October 17, 2023
                        </p>
                      </td>
                      <td className="text-left py-4">
                        <p className="text-sm font-normal text-[#141718]">
                          Delivered
                        </p>
                      </td>
                      <td className="text-left py-4">
                        <p className="text-sm font-normal text-[#141718]">
                          $1234.00
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4">
                        <p className="text-sm font-normal text-[#141718]">
                          #3456_768
                        </p>
                      </td>
                      <td className="py-4">
                        <p className="text-sm font-normal text-[#141718]">
                          October 17, 2023
                        </p>
                      </td>
                      <td className="text-left py-4">
                        <p className="text-sm font-normal text-[#141718]">
                          Delivered
                        </p>
                      </td>
                      <td className="text-left py-4">
                        <p className="text-sm font-normal text-[#141718]">
                          $1234.00
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="block lg:hidden">
                <div className="border-b-2 border-[#e8ecef] pb-5 mt-5 rounded-md w-full">
                  <div className="grid grid-cols-2 mb-2">
                    <span className="text-sm font-normal text-[#6C7275]">
                      Number ID
                    </span>
                    <span className="text-sm font-normal text-[#141718]">
                      #3456_768
                    </span>
                  </div>
                  <div className="grid grid-cols-2 mb-2">
                    <span className="text-sm font-normal text-[#6C7275]">
                      Dates
                    </span>
                    <span className="text-sm font-normal text-[#141718]">
                      October 17, 2023
                    </span>
                  </div>
                  <div className="grid grid-cols-2 mb-2">
                    <span className="text-sm font-normal text-[#6C7275]">
                      Status
                    </span>
                    <span className="text-sm font-normal text-[#141718]">
                      Delivered
                    </span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-sm font-normal text-[#6C7275]">
                      Price
                    </span>
                    <span className="text-sm font-normal text-[#141718]">
                      $1234.00
                    </span>
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

export default Orders;
