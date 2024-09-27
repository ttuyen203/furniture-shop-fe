import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FormOrder } from "../../types/Order";
import axios from "axios";
import BASE_URL from "../../config";
import toast from "react-hot-toast";
import { CartProduct } from "../../types/Cart";
import { useEffect } from "react";
import { useLoading } from "../../context/LoadingContext";
import Loading from "../../components/Loading";

const Checkout = () => {
  const userId = localStorage.getItem("userId");

  const { isLoading, setIsLoading } = useLoading();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormOrder>();

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(BASE_URL + `/users/${userId}`)
      .then((res) => {
        // console.log(res.data);
        setValue("username", res.data.data.username);
        setValue("email", res.data.data.email);
        setValue("phone", res.data.data.phone);
        setValue("address", res.data.data.address);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId, setValue, setIsLoading]);

  if (isLoading) {
    return <Loading />;
  }

  const cartProducts: CartProduct[] = location.state?.cartProducts || [];

  const totalAmount = () => {
    return cartProducts.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  const onSubmit = (data: FormOrder) => {
    console.log(data);
    axios
      .post(`${BASE_URL}/orders`, {
        user: userId,
        address: data.address,
        phone: data.phone,
        username: data.username,
        payment: data.payment,
        products: cartProducts,
        totalAmount: totalAmount(),
      })
      .then((res) => {
        console.log(res.data);
        navigate("/order-complete", { state: { orderData: res?.data } });
        toast.success("Order placed successfully!");
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Order failed");
      });
  };

  return (
    <>
      <div className="flex justify-center">
        <p className="text-[40px] lg:text-[54px] font-medium mt-5">Checkout</p>
      </div>

      {/* Step Indicator */}
      <div className="flex justify-center mt-5 mb-10">
        <div className="w-4/5 lg:w-3/5 flex justify-between">
          <div className="hidden lg:flex gap-3 items-center border-b-2 border-[#38CB89] pb-5">
            <p className="flex items-center justify-center bg-[#38CB89] text-white w-10 h-10 text-center rounded-full">
              ✔
            </p>
            <p className="font-semibold text-[#38CB89]">Shopping cart</p>
          </div>
          <div className="flex gap-3 items-center border-b-2 border-black pb-5">
            <p className="flex items-center justify-center bg-black text-white w-10 h-10 text-center rounded-full py-2 px-4">
              2
            </p>
            <p className="font-semibold lg:block">Checkout details</p>
          </div>
          <div className="lg:flex gap-3 items-center pb-5">
            <p className="flex items-center justify-center bg-[#B1B5C3] text-[#FCFCFD] w-10 h-10 text-center rounded-full py-2 px-4">
              3
            </p>
            <p className="font-semibold text-[#B1B5C3] hidden lg:block">
              Order complete
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-4/5 flex flex-col lg:flex-row gap-10 lg:mb-10">
          <div className="w-full lg:w-3/5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="border-2 rounded-lg border-[#6c7275] px-5 py-7">
                <p className="text-xl font-medium">Contact Information</p>
                {/* Name */}
                <div className="w-full mt-5">
                  <label
                    htmlFor="username"
                    className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                  >
                    Full name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    className={`border placeholder:text-[#6C7275] py-1 px-3 rounded-md w-full focus:outline-none ${
                      errors.username
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:border-[#a1a1aa]"
                    }`}
                    {...register("username", {
                      required: "Name is required",
                    })}
                  />
                  {errors.username && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.username.message}
                    </p>
                  )}
                </div>
                {/* Phone number */}
                <div className="w-full mt-5">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Phone number"
                    className={`border placeholder:text-[#6C7275] py-1 px-3 rounded-md focus:outline-none ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:border-[#a1a1aa]"
                    } w-full`}
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                {/* Email */}
                <div className="w-full mt-5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Your Email"
                    className={`border placeholder:text-[#6C7275] py-1 px-3 rounded-md focus:outline-none ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:border-[#a1a1aa]"
                    } w-full`}
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="border-2 rounded-lg border-[#6c7275] px-5 py-7 mt-10">
                <p className="text-xl font-medium">Shipping Address</p>
                {/* Address */}
                <div className="mt-5">
                  <label
                    htmlFor="address"
                    className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                  >
                    Address *
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Address"
                    className={`border placeholder:text-[#6C7275] py-1 px-3 rounded-md focus:outline-none ${
                      errors.address
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#CBCBCB] focus:border-[#a1a1aa]"
                    } w-full`}
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  {errors.address && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.address.message}
                    </p>
                  )}
                </div>
                {/* Payment Method */}
                <div className="w-full mt-5">
                  <label
                    htmlFor="payment-method"
                    className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                  >
                    Payment Method *
                  </label>
                  <div className="border border-[#CBCBCB] py-1 px-2 rounded-md w-full">
                    <select
                      id="payment-method"
                      className="w-full focus:outline-none"
                      {...register("payment", {
                        required: "Payment method is required",
                      })}
                    >
                      <option value="COD">COD</option>
                      <option value="BANK">BANK</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-black text-lg font-medium text-white p-3 rounded-lg text-center mt-5 w-full"
              >
                Place Order
              </button>
            </form>
          </div>

          <div className="w-full lg:w-2/5">
            <div className="border-2 rounded-lg border-[#6c7275] p-5">
              <div>
                <p className="text-[28px] font-medium text-[#141718]">
                  Order summary
                </p>
                <div className="mt-5">
                  {cartProducts.map((d) => (
                    <div
                      className="flex gap-2 border-b-2 border-[#e8ecef] pb-4 mb-4"
                      key={d._id}
                    >
                      <div className="w-1/4">
                        <img src={d.product.images} alt="" className="w-20" />
                      </div>
                      <div className="w-3/4">
                        <div className="flex text-sm font-semibold justify-between mb-1">
                          <p>{d.product.name}</p>
                          <p>${d.product.price}</p>
                        </div>
                        <div className="mb-1 text-xs font-normal text-[#6C7275]">
                          <p>Status: New</p>
                        </div>
                        <div className="border border-[#6c7275] rounded-md p-2 flex justify-center items-center gap-3 w-1/12">
                          <div className="font-semibold text-xs">
                            {d.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="mb-5 mt-10">
                    <div>
                      <div className="py-2 border-b border-[#e8ecef] text-sm font-medium flex items-center justify-between">
                        <p className="text-base font-normal">Shipping</p>
                        <div className="flex gap-1 text-base font-semibold">
                          Free
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 border-b border-[#e8ecef] flex items-center justify-between">
                        <p className="text-base font-normal">Subtotal</p>
                        <div className="flex gap-1 text-base font-semibold">
                          ${totalAmount()}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 border-b border-[#e8ecef] flex items-center justify-between">
                        <p className="text-xl font-semibold">Total</p>
                        <div className="flex gap-1 text-xl font-semibold">
                          ${totalAmount()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex justify-center mb-4">
        <div className="w-4/5">
          <Link to={"/order-complete"}>
            <p className="bg-black text-lg font-medium text-white p-3 rounded-lg text-center mt-5">
              Place Order
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Checkout;
