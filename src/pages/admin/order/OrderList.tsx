import { useEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import { ApiResOrder, Order } from "../../../types/Order";
import axios from "axios";
import BASE_URL from "../../../config";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { statusCSS } from "../../../utils/statusCSS";
import { useLoading } from "../../../context/LoadingContext";
import Loading from "../../../components/Loading";

const OrderList = () => {
  const [orderData, setOrderData] = useState<Order[] | undefined>([]);

  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<ApiResOrder>(BASE_URL + `/orders/`)
      .then((res) => {
        setOrderData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading]);

  const updateStatus = async (orderId: string, newStatus: string) => {
    setIsLoading(true);
    try {
      await axios.put(`${BASE_URL}/orders/${orderId}`, { status: newStatus });
      const updatedOrders = orderData?.map((order) => {
        if (order._id === orderId) {
          return { ...order, status: newStatus };
        }
        return order;
      });
      setOrderData(updatedOrders);
    } catch (error) {
      console.error("Error updating order status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full min-h-screen bg-[#f5f6fa]">
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
                  <td className={`py-4 px-6 flex justify-between items-center`}>
                    <p
                      className={`py-1 px-2 text-xs font-semibold rounded-lg ${statusCSS(
                        d.status
                      )}`}
                    >
                      {d.status}
                    </p>
                  </td>

                  <td className="py-4 px-6 text-sm font-medium text-[#202224] max-w-[100px] lg:max-w-[250px] break-words">
                    ${d.totalAmount}
                  </td>
                  <td className="py-4 px-6 text-sm flex items-center gap-1.5 lg:gap-3">
                    <Link to={`/admin/order-lists/${d._id}`}>
                      <div className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-lg text-xs lg:text-base font-semibold hover:bg-yellow-300 transition">
                        <FaEye />
                      </div>
                    </Link>
                    <select
                      onChange={(e) => updateStatus(d._id, e.target.value)}
                      defaultValue={d.status}
                      className="bg-white border border-gray-300 rounded-lg px-2 py-1 text-xs"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Shipping">Shipping</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
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
