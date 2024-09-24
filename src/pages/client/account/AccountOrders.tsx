import { useEffect, useState } from "react";
import NavAccount from "../../../components/NavAccount";
import { Order } from "../../../types/Order";
import axios from "axios";
import BASE_URL from "../../../config";
import { statusCSS } from "../../../utils/statusCSS";
import { useNavigate } from "react-router-dom";

const AccountOrders = () => {
  const [orderData, setOrderData] = useState<Order[] | undefined>([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(BASE_URL + `/orders/user/${userId}`)
      .then((res) => {
        console.log(res.data);
        setOrderData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const navigate = useNavigate();

  const handelOrderDetail = (id: string) => {
    navigate(`/account/orders/${id}`);
  };
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
                    {orderData && orderData.length > 0 ? (
                      orderData.map((d) => (
                        <tr
                          className="border-b hover:bg-[#f5f5f5] cursor-pointer"
                          key={d._id}
                          onClick={() => handelOrderDetail(d._id)}
                        >
                          <td className="py-4">
                            <p className="text-sm font-normal text-[#141718]">
                              {d._id}
                            </p>
                          </td>
                          <td className="py-4">
                            <p className="text-sm font-normal text-[#141718]">
                              {d.createdAt.split("T")[0]}
                            </p>
                          </td>
                          <td className="py-4">
                            <p
                              className={`text-sm text-center font-normal w-1/2 px-3 py-1 rounded-lg ${statusCSS(
                                d.status
                              )}`}
                            >
                              {d.status}
                            </p>
                          </td>
                          <td className="text-left py-4">
                            <p className="text-sm font-normal text-[#141718]">
                              ${d.totalAmount}
                            </p>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="text-center py-4">
                          <p className="text-sm font-normal text-[#141718]">
                            You currently have no orders.
                          </p>
                        </td>
                      </tr>
                    )}
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

export default AccountOrders;