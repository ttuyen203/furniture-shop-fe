import axios from "axios";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../../config";
import type { Cart } from "../../types/Cart";
import toast from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";
import { useLoading } from "../../context/LoadingContext";
import Loading from "../../components/Loading";

const Cart = () => {
  const [dataCart, setDataCart] = useState<Cart | null>(null);

  const { isLoading, setIsLoading } = useLoading();

  const userId = localStorage.getItem("userId");
  // console.log(userId);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(BASE_URL + `/carts/user/${userId}`)
      .then((res) => {
        // console.log("Cart data", res.data);
        setDataCart(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId, setIsLoading]);

  if (isLoading) {
    return <Loading />;
  }

  const totalAmount = dataCart?.products
    .reduce((total, d) => total + d.product.price * d.quantity, 0)
    .toFixed(2);

  const handleDeleteProductInCart = (id: string) => {
    // console.log("User ID:", userId);
    // console.log("Product ID:", id);
    toast(
      (t) => (
        <div className="p-2 w-full ">
          <div className="flex justify-center mb-4">
            <FaTrashCan size={30} className="text-red-600" />
          </div>
          <p className="text-lg text-center w-full">
            Are you sure you want to delete this item?
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <button
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              onClick={() => {
                axios
                  .delete(BASE_URL + `/carts/user/${userId}/product/${id}`)
                  .then(() => {
                    toast.success("Product deleted successfully!");
                    axios
                      .get(BASE_URL + `/carts/user/${userId}`)
                      .then((res) => setDataCart(res.data))
                      .catch((err) => console.log(err));
                  })
                  .catch(() => toast.error("Failed to delete product"))
                  .finally(() => toast.dismiss(t.id));
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartProducts: dataCart?.products } });
  };

  return (
    <>
      <div className="flex justify-center">
        <p className="text-[40px] lg:text-[54px] font-medium mt-5">Cart</p>
      </div>

      {/*  */}
      <div className="flex justify-center mt-5 mb-10">
        <div className="w-4/5 lg:w-3/5 flex justify-between">
          <div className="flex gap-3 items-center border-b-2 border-black pb-5">
            <p className="flex items-center justify-center bg-black text-white w-10 h-10 text-center rounded-full">
              1
            </p>
            <p className="font-semibold">Shopping cart</p>
          </div>
          <div className="lg:flex gap-3 items-center pb-5">
            <p className="flex items-center justify-center bg-[#B1B5C3] text-[#FCFCFD] w-10 h-10 text-center rounded-full py-2 px-4">
              2
            </p>
            <p className="font-semibold text-[#B1B5C3] hidden lg:block">
              Checkout details
            </p>
          </div>
          <div className="hidden lg:flex gap-3 items-center pb-5">
            <p className="flex items-center justify-center bg-[#B1B5C3] text-[#FCFCFD] w-10 h-10 text-center rounded-full py-2 px-4">
              3
            </p>
            <p className="font-semibold text-[#B1B5C3]">Order complete</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-4/5 flex flex-col lg:flex-row gap-10 mb-10">
          <div className="w-full lg:w-3/5">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#6c7275]">
                  <th className="text-left py-3">Product</th>
                  <th className="text-left py-3 hidden lg:table-cell">
                    Quantity
                  </th>
                  <th className="text-left py-3 hidden lg:table-cell">Price</th>
                  <th className="text-left py-3 hidden lg:table-cell">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataCart?.products.length ? (
                  dataCart?.products.map((d) => (
                    <tr className="border-b" key={d?._id}>
                      <td className="py-4">
                        <div className="flex gap-3 items-center text-left">
                          <img src={d.product.images} alt="" className="w-16" />
                          <div>
                            <p className="text-sm font-semibold">
                              {d.product.name}
                            </p>
                            <p className="text-xs font-normal text-[#6C7275] my-1.5">
                              Status: New
                            </p>
                            <p
                              className="text-sm font-semibold text-[#6C7275] flex gap-1 items-center cursor-pointer hover:bg-[#ddebf1]"
                              onClick={() =>
                                handleDeleteProductInCart(d.product._id)
                              }
                            >
                              <IoCloseOutline size={20} />
                              Remove
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 hidden lg:table-cell">
                        <div className="w-[50%] border border-[#6c7275] rounded-md p-2 flex justify-center items-center gap-3">
                          <FiMinus
                            className="cursor-pointer active:bg-[#dde2e5]"
                            size={18}
                          />
                          <div className="font-semibold text-xs">
                            {d.quantity}
                          </div>
                          <FiPlus
                            className="cursor-pointer active:bg-[#dde2e5]"
                            size={18}
                          />
                        </div>
                      </td>
                      <td className="text-left py-4 text-lg font-normal table-cell">
                        <p>${d.product.price}</p>
                      </td>
                      <td className="text-left py-4 text-lg font-semibold hidden lg:table-cell">
                        <p>${d.product?.price * d.quantity}</p>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-4 text-[#6C7275]">
                      No products in the cart.{" "}
                      <Link to={"/shop"}>
                        {" "}
                        <span className="font-semibold hover:underline text-black">
                          Shopping now!
                        </span>
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="w-full lg:w-2/5 border-2 rounded-lg border-[#6c7275] p-5">
            <div>
              <p className="text-xl font-medium text-[#141718]">Cart summary</p>
              <div className="border-2 rounded-md border-[#6c7275] p-3 flex justify-between mt-5">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border border-gray-500 rounded-full"
                    defaultChecked
                  />
                  <p className="font-normal">Free shipping</p>
                </div>
                <div className="font-normal">$0.00</div>
              </div>
              {/* <div className="border-2 rounded-md border-[#6c7275] p-3 flex justify-between mt-3">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border border-gray-500 rounded-full"
                  />
                  <p className="font-normal">Express shipping</p>
                </div>
                <div className="font-normal">+$15.00</div>
              </div>
              <div className="border-2 rounded-md border-[#6c7275] p-3 flex justify-between mt-3">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border border-gray-500 rounded-full"
                  />
                  <p className="font-normal">Pick Up</p>
                </div>
                <div className="font-normal">%21.00</div>
              </div> */}
              <div className="border-b pb-2 flex justify-between mt-7">
                <p className="font-normal">Subtotal</p>
                <p className="font-semibold">${totalAmount || "0.00"}</p>
              </div>
              <div className="flex justify-between mt-3">
                <p className="font-semibold text-xl">Total</p>
                <p className="font-semibold text-xl">
                  ${totalAmount || "0.00"}
                </p>
              </div>
              {dataCart?.products && dataCart?.products.length > 0 ? (
                <p
                  className="bg-black text-lg font-medium text-white p-3 rounded-lg text-center mt-5"
                  onClick={() => {
                    handleCheckout();
                  }}
                >
                  Checkout
                </p>
              ) : (
                <p className="bg-gray-400 text-lg font-medium text-white p-3 rounded-lg text-center mt-5 cursor-not-allowed">
                  Checkout
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
