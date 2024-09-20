import { useEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import { Order } from "../../../types/Order";
import axios from "axios";
import BASE_URL from "../../../config";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderList = () => {
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
  return (
    <div className="sm:ml-64 w-full min-h-screen bg-[#f5f6fa]">
      <TopBar />
      <div className="px-5 py-2">
        <p className="text-[32px] font-semibold mb-4">Order Lists</p>
        <div className="overflow-x-auto rounded-xl border border-[#d5d5d5]">
          <table className="min-w-full bg-white">
            <thead className="border-b border-[#d5d5d5] text-left text-xs font-semibold text-[#202224] uppercase tracking-wider">
              <tr>
                <th className="hidden lg:block py-3 px-6">ID</th>
                <th className="py-3 px-6">Dates</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orderData?.map((d) => (
                <tr
                  className="bg-white border-b border-[#d5d5d5] hover:bg-gray-50 transition"
                  key={d._id}
                >
                  <td className="hidden lg:block py-4 px-6 text-sm font-medium text-[#202224]">
                    {d._id}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-[#202224] max-w-[100px] lg:max-w-[250px] break-words">
                    {d.createdAt.split("T")[0]}
                  </td>
                  <td className="py-4 px-6 text-sm">Delivered</td>
                  <td className="py-4 px-6 text-sm font-medium text-[#202224] max-w-[100px] lg:max-w-[250px] break-words">
                    ${d.totalAmount}
                  </td>
                  <td className="py-4 px-6 text-sm flex items-center gap-1.5 lg:gap-3">
                    <Link to={`/admin/order-lists/${d._id}`}>
                      <div className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-lg text-xs lg:text-base font-semibold hover:bg-yellow-300 transition">
                        <FaEye />
                      </div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
