import { Link, useParams } from "react-router-dom";
import TopBar from "../../../components/TopBar";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config";
import { Order } from "../../../types/Order";
import { Product } from "../../../types/Product";
import { FaArrowLeft } from "react-icons/fa";

const OrderDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<Order | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(BASE_URL + `/orders/${id}`)
      .then((res) => {
        setData(res.data.data);
        const productIds = res.data.data.products.map(
          (p: { product: string }) => p.product
        );
        axios
          .get(`${BASE_URL}/products`, {
            params: { ids: productIds.join(",") },
          })
          .then((res) => setProducts(res.data.data))
          .catch((error) => console.error("Error fetching products:", error));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="sm:ml-64 w-full min-h-screen bg-[#f5f6fa]">
      <TopBar />
      {/* User Information */}
      <div className="px-5 py-2">
        <div className="flex items-center mb-4">
          <Link
            to="/admin/order-lists"
            className="text-blue-500 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to Order Lists
          </Link>
        </div>
        <p className="text-[32px] font-semibold mb-4">Order Detail</p>
        <div className="rounded-xl bg-white border border-[#d5d5d5]">
          <table className="min-w-full table-auto text-left">
            <tbody>
              <tr className="border-b">
                <th className="hidden lg:table-cell py-4 px-6 text-gray-700 font-semibold">
                  User
                </th>
                <td className="py-4 px-6 text-gray-600">{data?.name}</td>
              </tr>
              <tr className="border-b">
                <th className="hidden lg:table-cell py-4 px-6 text-gray-700 font-semibold">
                  Address
                </th>
                <td className="py-4 px-6 text-gray-600">{data?.address}</td>
              </tr>
              <tr className="border-b">
                <th className="hidden lg:table-cell py-4 px-6 text-gray-700 font-semibold">
                  Phone
                </th>
                <td className="py-4 px-6 text-gray-600">{data?.phone}</td>
              </tr>
              <tr>
                <th className="hidden lg:table-cell py-4 px-6 text-gray-700 font-semibold">
                  Payment
                </th>
                <td className="py-4 px-6 text-gray-600">{data?.payment}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Cart Information */}
      <div className="px-5 py-4">
        <p className="text-[32px] font-semibold mb-4">Cart Information</p>
        <div className="overflow-x-auto rounded-xl border border-[#d5d5d5]">
          <table className="min-w-full bg-white table-auto">
            <thead className="border-b border-[#d5d5d5] text-left text-xs font-semibold text-[#202224] uppercase tracking-wider bg-gray-100">
              <tr>
                <th className="hidden lg:table-cell py-3 px-6">Name</th>
                <th className="py-3 px-6">Image</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Quantity</th>
                <th className="py-3 px-6">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {data?.products.map((d) => {
                const productInfo = products.find(
                  (p) => String(p._id) === String(d.product)
                );
                return (
                  <tr
                    className="bg-white border-b border-[#d5d5d5] hover:bg-gray-50 transition"
                    key={d._id}
                  >
                    <td className="hidden lg:table-cell py-4 px-6 text-sm font-medium text-[#202224]">
                      {productInfo?.name}
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <img
                        src={productInfo?.images}
                        alt={productInfo?.name}
                        className="w-20 h-20 object-cover"
                      />
                    </td>
                    <td className="py-4 px-6 text-sm">${productInfo?.price}</td>
                    <td className="py-4 px-6 text-sm">{d.quantity}</td>
                    <td className="py-4 px-6 text-sm">
                      ${(productInfo?.price || 0) * d.quantity}
                    </td>
                  </tr>
                );
              })}
              <tr className="bg-gray-50">
                <td className="py-4 px-6 font-semibold text-right" colSpan={4}>
                  Total Amount
                </td>
                <td className="py-4 px-6 font-semibold">
                  ${data?.totalAmount}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
