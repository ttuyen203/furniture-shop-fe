import { useEffect, useState } from "react";
import NavAccount from "../../../components/NavAccount";
import { Order } from "../../../types/Order";
import axios from "axios";
import BASE_URL from "../../../config";
import { Link, useParams } from "react-router-dom";
import { Product } from "../../../types/Product";
import { statusCSS } from "../../../utils/statusCSS";

const AccountOrderDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<Order | null>(null);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(BASE_URL + `/orders/${id}`)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);

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
            {/* User Information */}
            <div className="w-full">
              <p className="text-xl font-semibold">User Information</p>
              <div className="mt-5">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 text-left">
                        <p className="text-sm font-normal text-[#6C7275]">
                          User
                        </p>
                      </td>
                      <td className="py-4 text-left">
                        <p className="text-sm font-normal text-[#141718]">
                          {data?.name}
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 text-left">
                        <p className="text-sm font-normal text-[#6C7275]">
                          Address
                        </p>
                      </td>
                      <td className="py-4 text-left">
                        <p className="text-sm font-normal text-[#141718]">
                          {data?.address}
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 text-left">
                        <p className="text-sm font-normal text-[#6C7275]">
                          Phone
                        </p>
                      </td>
                      <td className="py-4 text-left">
                        <p className="text-sm font-normal text-[#141718]">
                          {data?.phone}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 text-left">
                        <p className="text-sm font-normal text-[#6C7275]">
                          Payment
                        </p>
                      </td>
                      <td className="py-4 text-left">
                        <p className="text-sm font-normal text-[#141718]">
                          {data?.payment}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Detail */}
            <div className="mt-5">
              <p className="text-xl font-semibold">Order Detail</p>
              <div className="hidden lg:block w-full mt-5">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#6c7275] text-left">
                      <th className="py-3 text-sm font-normal text-[#6C7275] text-left">
                        Name
                      </th>
                      <th className="py-3 text-sm font-normal text-[#6C7275] text-left">
                        Image
                      </th>
                      <th className="py-3 text-sm font-normal text-[#6C7275] text-center w-1/5">
                        Price
                      </th>
                      <th className="py-3 text-sm font-normal text-[#6C7275] text-center">
                        Quantity
                      </th>
                      <th className="py-3 text-sm font-normal text-[#6C7275] text-center">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.products.map((d) => {
                      const productInfo = products.find(
                        (p) => String(p._id) === String(d.product)
                      );
                      return (
                        <tr className="border-b" key={d._id}>
                          <td className="py-4 text-left">
                            <p className="text-sm font-normal text-[#141718]">
                              {productInfo?.name}
                            </p>
                          </td>
                          <td className="py-4 text-left">
                            <img
                              src={productInfo?.images}
                              alt={productInfo?.name}
                              className="w-20 h-20 object-cover"
                            />
                          </td>
                          <td className="py-4 text-center">
                            <p className="text-sm font-normal text-[#141718]">
                              ${productInfo?.price}
                            </p>
                          </td>
                          <td className="py-4 text-center">
                            <p className="text-sm font-normal rounded-lg">
                              {d.quantity}
                            </p>
                          </td>
                          <td className="py-4 text-center">
                            <p className="text-sm font-normal text-[#141718]">
                              ${(productInfo?.price || 0) * d.quantity}
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                    <tr className="border-b">
                      <td
                        className="py-4 px-6 font-semibold text-right"
                        colSpan={4}
                      >
                        Total Amount
                      </td>
                      <td className="py-4 px-6 font-semibold text-center">
                        ${data?.totalAmount}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-5 flex justify-between items-center">
              <Link to={`/account/orders`}>
                <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black border border-black transition-all duration-300">
                  Back
                </button>
              </Link>
              <div className={`py-2 px-4 rounded-lg ${statusCSS(data?.status ?? "")}`}>
                {data?.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountOrderDetail;
