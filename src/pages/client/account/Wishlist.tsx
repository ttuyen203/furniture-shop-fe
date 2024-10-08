import NavAccount from "../../../components/NavAccount";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Wishlist = () => {
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
            {/* Your Wishlist */}
            <p className="text-xl font-semibold">Your Wishlist</p>
            <div className="mt-5 w-full hidden lg:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#6c7275]">
                    <th className="text-left py-3 text-sm font-normal text-[#6C7275]">
                      Product
                    </th>
                    <th className="text-left py-3 text-sm font-normal text-[#6C7275]">
                      Price
                    </th>
                    <th className="text-left py-3 text-sm font-normal text-[#6C7275]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4">
                      <div className="flex gap-3 items-center text-left">
                        <img
                          src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724670064/img-cart-1_jab00s.png"
                          alt=""
                          className="w-16"
                        />
                        <div>
                          <p className="text-sm font-semibold">Tray Table</p>
                          <p className="text-xs font-normal text-[#6C7275] my-1.5">
                            Color: Black
                          </p>
                          <p className="text-sm font-semibold text-[#6C7275] flex gap-1 items-center cursor-pointer">
                            <IoCloseOutline size={20} />
                            Remove
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-left py-4 text-sm font-normal table-cell">
                      <p>$19.00</p>
                    </td>
                    <td className="text-left py-4 text-lg font-semibold ">
                      <Link to={"/"}>
                        <p className="lg:w-2/4 text-center text-sm bg-black text-white py-2 font-medium rounded-lg">
                          Add to cart
                        </p>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="mt-5 w-full block lg:hidden">
              <p className="text-sm font-normal text-[#6C7275] border-b border-[#e8ecef] pb-1">
                Product
              </p>
              {/* Product */}
              <div className="mt-3 border-b border-[#e8ecef] pb-3">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center text-left">
                    <img
                      src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724670064/img-cart-1_jab00s.png"
                      alt=""
                      className="w-16"
                    />
                    <div>
                      <p className="text-sm font-semibold">Tray Table</p>
                      <p className="text-xs font-normal text-[#6C7275] my-1.5">
                        Color: Black
                      </p>
                      <p className="text-sm font-normal text-[#141718] flex gap-1 items-center cursor-pointer">
                        $19.19
                      </p>
                    </div>
                  </div>
                  <div>
                    <IoCloseOutline size={25} />
                  </div>
                </div>

                <div className="bg-black text-white py-2 text-center rounded-lg cursor-pointer mt-3">
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
