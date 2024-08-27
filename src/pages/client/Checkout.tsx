import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div className="flex justify-center">
        <p className="text-[40px] lg:text-[54px] font-medium mt-5">Checkout</p>
      </div>

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
            <p className="font-semibold text-[#B1B5C3] hidden lg:block">Order complete</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-4/5 flex flex-col lg:flex-row gap-10 lg:mb-10">
          <div className="w-full lg:w-3/5">
            <div className="border-2 rounded-lg border-[#6c7275] px-5 py-7">
              <p className="text-xl font-medium">Contact Infomation</p>
              {/* Name */}
              <div className="mt-5 flex justify-between gap-10">
                <div className="w-1/2">
                  <label
                    htmlFor=""
                    className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                  >
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="border placeholder:text-[#6C7275] py-1 px-2 rounded-md border-[#CBCBCB] w-full"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor=""
                    className="block text-xs font-bold text-[#6C7275] mb-2"
                  >
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="border placeholder:text-[#6C7275] py-1 px-2 rounded-md border-[#CBCBCB] w-full"
                  />
                </div>
              </div>
              {/* Phone number */}
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border placeholder:text-[#6C7275] py-1 px-2 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
              {/* Email */}
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  Email address
                </label>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border placeholder:text-[#6C7275] py-1 px-2 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
            </div>

            <div className="border-2 rounded-lg border-[#6c7275] px-5 py-7 mt-10">
              <p className="text-xl font-medium">Shipping Address</p>
              {/* Stress Address */}
              <div className="mt-5 flex justify-between gap-10">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                  >
                    Street Address *
                  </label>
                  <input
                    type="text"
                    placeholder="Stress Address"
                    className="border placeholder:text-[#6C7275] py-1 px-2 rounded-md border-[#CBCBCB] w-full"
                  />
                </div>
              </div>
              {/* Country */}
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  Country *
                </label>
                <input
                  type="text"
                  placeholder="Country"
                  className="border placeholder:text-[#6C7275] py-1 px-2 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
              {/* Town / City */}
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  Town / City *
                </label>
                <input
                  type="text"
                  placeholder="Town / City"
                  className="border placeholder:text-[#6C7275] py-1 px-2 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
            </div>

            <Link to={"/"} className="hidden lg:block">
              <p className="bg-black text-lg font-medium text-white p-3 rounded-lg text-center mt-5">
                Place Order
              </p>
            </Link>
          </div>

          <div className="w-full lg:w-2/5">
            <div className="border-2 rounded-lg border-[#6c7275] p-5">
              <div>
                <p className="text-[28px] font-medium text-[#141718]">
                  Order summary
                </p>
                <div className="mt-5">
                  <div className="flex gap-2 border-b-2 border-[#e8ecef] pb-4 mb-4">
                    <div className="w-1/4">
                      <img
                        src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724257904/furniture-shop/product_cart_rawcuf.png"
                        alt=""
                        className="w-20"
                      />
                    </div>
                    <div className="w-3/4">
                      <div className="flex text-sm font-semibold justify-between mb-1">
                        <p>Tray Table</p>
                        <p>$19.19</p>
                      </div>
                      <div className="mb-1 text-xs font-normal text-[#6C7275]">
                        <p>Color: Black</p>
                      </div>
                      <div className="border border-[#6c7275] rounded-md p-2 flex justify-center items-center gap-3 w-1/4">
                        <FiMinus
                          className="cursor-pointer active:bg-[#dde2e5]"
                          size={14}
                        />
                        <div className="font-semibold text-xs">2</div>
                        <FiPlus
                          className="cursor-pointer active:bg-[#dde2e5]"
                          size={14}
                        />
                      </div>
                    </div>
                  </div>

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
                      <div className="py-2 border-b border-[#e8ecef] text-sm font-medium flex items-center justify-between">
                        <p className="text-base font-normal">Subtotal</p>
                        <div className="flex gap-1 text-base font-semibold">
                          $99.00
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 border-b border-[#e8ecef] text-sm font-medium flex items-center justify-between">
                        <p className="text-xl font-medium">Total</p>
                        <div className="flex gap-1 text-xl font-medium">
                          $234.00
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
          <Link to={"/"}>
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
