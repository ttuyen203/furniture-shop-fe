import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import Newsletter from "../../components/Newsletter";

const ProductDetail = () => {
  return (
    <>
      {/* breadcrumb */}
      <div className="flex justify-center mb-4 mt-2">
        <div className="w-4/5">
          <div className="text-sm font-medium text-[#605F5F] flex items-center gap-3">
            <p>Home {">"}</p>
            <p>Shop {">"}</p>
            <p>Living Room {">"}</p>
            <p className="text-[#121212]">Product</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center mb-10 mt-5">
        <div className="w-4/5 flex flex-col lg:flex-row gap-16">
          {/* Image Product */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 w-full lg:w-2/4">
            <div className="max-w-[262px] ">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724506547/furniture-shop/product-detail_y6mjuc.png"
                alt=""
              />
            </div>
            <div className="max-w-[262px]">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724506547/furniture-shop/product-detail_y6mjuc.png"
                alt=""
              />
            </div>
            <div className="max-w-[262px]">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724506547/furniture-shop/product-detail_y6mjuc.png"
                alt=""
              />
            </div>
            <div className="max-w-[262px]">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724506547/furniture-shop/product-detail_y6mjuc.png"
                alt=""
              />
            </div>
            <div className="max-w-[262px]">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724506547/furniture-shop/product-detail_y6mjuc.png"
                alt=""
              />
            </div>
            <div className="max-w-[262px]">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724506547/furniture-shop/product-detail_y6mjuc.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="flex items-center gap-5">
              <div className="flex gap-1 pb-2">
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
              </div>
              <Link to={"/"} className="text-sm font-normal hover:underline">
                11 Reviews{" "}
              </Link>
            </div>
            {/* Name */}
            <p className="text-[40px]  font-medium mt-2">Tray Table</p>
            {/* Desc */}
            <p className="text-base font-normal text-[#6C7275] mt-2 text-justify">
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </p>
            {/* Price */}
            <p className="text-[28px] font-medium mt-4">
              $199.00{" "}
              <span className="text-xl font-medium text-[#6C7275] line-through">
                $400.00
              </span>
            </p>
            <hr className="border mt-3" />
            <div className="mt-3">
              <p className="text-base font-semibold text-[#6C7275]">
                Measurements
              </p>
              <p className="text-xl font-normal mt-2">17 1/2x20 5/8 "</p>
            </div>
            {/* Color */}
            <div className="mt-4">
              <div className="flex gap-1 items-center text-base font-semibold text-[#6C7275]">
                <p>Choose Color</p>
                <MdKeyboardArrowRight size={20} />
              </div>
              <p className="text-xl font-normal mt-2">Red</p>
              <div className="mt-3 flex gap-4">
                <div className="max-w-[72px]">
                  <img
                    src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724512951/furniture-shop/color-product-2_pbyhto.png"
                    alt=""
                    className="cursor-pointer active:border-2 border-black"
                  />
                </div>
                <div className="max-w-[72px]">
                  <img
                    src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724512873/furniture-shop/color-product-1_td4k34.png"
                    alt=""
                    className="cursor-pointer active:border-2 border-black"
                  />
                </div>
              </div>
            </div>
            {/* Btn */}
            <div className="mt-10">
              <div className="flex justify-between">
                <div className="bg-[#F5F5F5] rounded-lg w-1/4 p-3 flex items-center gap-2 lg:gap-8 justify-center">
                  <FiMinus />
                  <p className="text-base font-semibold">1</p>
                  <FiPlus />
                </div>
                <Link
                  to={"/"}
                  className="w-8/12 flex items-center justify-center gap-2 border-2 border-[#141718] rounded-lg"
                >
                  <AiOutlineHeart size={25} />
                  <p className="text-lg font-medium">Wishlist</p>
                </Link>
              </div>
              <Link
                to={"/"}
                className="w-full bg-black mt-4 flex items-center justify-center rounded-lg p-3"
              >
                <p className="text-white text-lg font-medium">Add to Cart</p>
              </Link>
            </div>
            {/*  */}
            <div className="mt-8">
              <div className="flex gap-10">
                <div>
                  <p className="text-xs font-normal text-[#6C7275] mb-2">SKU</p>
                  <p className="text-xs font-normal text-[#6C7275]">CATEGORY</p>
                </div>

                <div className="">
                  <p className="text-xs font-normal mb-2">1117</p>
                  <p className="text-xs font-normal">Living Room, Bedroom</p>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-6 flex items-center justify-between border-b-2 border-[#6c7275] pb-2">
                <p>Additional Info</p>
                <IoIosArrowDown />
              </div>
              {/* Additional Info drop down */}
              <div className="mt-4">
                <div>
                  <p className="text-sm font-semibold text-[#6C7275]">
                    Details
                  </p>
                  <p className="text-xs font-normal mt-1 leading-normal text-justify">
                    You can use the removable tray for serving. The design makes
                    it easy to put the tray back after use since you place it
                    directly on the table frame without having to fit it into
                    any holes.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-[#6C7275]">
                    Packaging
                  </p>
                  <div className="text-xs font-normal mt-1 leading-normal">
                    <p>Width: 20 " Height: 1 ½ " Length: 21 ½ " </p>
                    <p>Weight: 7 lb 8 oz</p>
                    <p>Package(s): 1</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-b-2 border-[#6c7275] pb-2">
                <p>Questions</p>
                <IoIosArrowDown />
              </div>
              {/* Questions drop down */}

              <div className="mt-6 flex items-center justify-between border-b-2 border-[#6c7275] pb-2">
                <p>Reviews (11)</p>
                <IoIosArrowDown />
              </div>
              {/* Reviews drop down */}
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center mb-4">
        <div className="w-4/5">
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between pb-4 lg:pb-8">
            <div>
              <p className="text-[28px] font-medium mb-2 lg:mb-0">
                You might also like
              </p>
            </div>
            <div className="hover:underline">
              <Link to="/shop" className="flex items-center gap-1 ">
                <span className="text-sm lg:text-base ">More Products</span>
                <GoArrowRight fontWeight={500} size={16} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="group">
              <div className="w-full relative">
                <div className="absolute p-4">
                  {/* tag new */}
                  <div className="bg-white text-black font-medium w-14 text-center rounded-md mb-2">
                    NEW
                  </div>
                  {/* tag sale */}
                  <div className="bg-[#38cb89] text-white font-medium w-14 text-center rounded-md">
                    -50%
                  </div>
                </div>
                <div className="absolute p-4 right-0">
                  <div className="rounded-full shadow-lg p-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <AiOutlineHeart size={20} color="#6c7275" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end mb-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to={"/"} className="text-center">
                    <div className="bg-black text-white px-14 py-2 rounded-lg">
                      <p className="w-24">Add to cart</p>
                    </div>
                  </Link>
                </div>
                <img
                  src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723660329/furniture-shop/sofa_vh2fjn.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="mt-3">
                <div className="flex gap-1 pb-2">
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                </div>
                <div className="text-base font-semibold pb-1">
                  Loveseat Sofa
                </div>
                <div className="flex gap-2">
                  <div className="font-semibold">$199.00</div>
                  <div className="line-through text-[#6c7275]">$400.00</div>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="w-full relative">
                <div className="absolute p-4">
                  {/* tag new */}
                  <div className="bg-white text-black font-medium w-14 text-center rounded-md mb-2">
                    NEW
                  </div>
                  {/* tag sale */}
                  <div className="bg-[#38cb89] text-white font-medium w-14 text-center rounded-md">
                    -50%
                  </div>
                </div>
                <div className="absolute p-4 right-0">
                  <div className="rounded-full shadow-lg p-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <AiOutlineHeart size={20} color="#6c7275" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end mb-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to={"/"} className="text-center">
                    <div className="bg-black text-white px-14 py-2 rounded-lg">
                      <p className="w-24">Add to cart</p>
                    </div>
                  </Link>
                </div>
                <img
                  src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723660329/furniture-shop/sofa_vh2fjn.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="mt-3">
                <div className="flex gap-1 pb-2">
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                </div>
                <div className="text-base font-semibold pb-1">
                  Loveseat Sofa
                </div>
                <div className="flex gap-2">
                  <div className="font-semibold">$199.00</div>
                  <div className="line-through text-[#6c7275]">$400.00</div>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="w-full relative">
                <div className="absolute p-4">
                  {/* tag new */}
                  <div className="bg-white text-black font-medium w-14 text-center rounded-md mb-2">
                    NEW
                  </div>
                  {/* tag sale */}
                  <div className="bg-[#38cb89] text-white font-medium w-14 text-center rounded-md">
                    -50%
                  </div>
                </div>
                <div className="absolute p-4 right-0">
                  <div className="rounded-full shadow-lg p-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <AiOutlineHeart size={20} color="#6c7275" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end mb-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to={"/"} className="text-center">
                    <div className="bg-black text-white px-14 py-2 rounded-lg">
                      <p className="w-24">Add to cart</p>
                    </div>
                  </Link>
                </div>
                <img
                  src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723660329/furniture-shop/sofa_vh2fjn.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="mt-3">
                <div className="flex gap-1 pb-2">
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                </div>
                <div className="text-base font-semibold pb-1">
                  Loveseat Sofa
                </div>
                <div className="flex gap-2">
                  <div className="font-semibold">$199.00</div>
                  <div className="line-through text-[#6c7275]">$400.00</div>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="w-full relative">
                <div className="absolute p-4">
                  {/* tag new */}
                  <div className="bg-white text-black font-medium w-14 text-center rounded-md mb-2">
                    NEW
                  </div>
                  {/* tag sale */}
                  <div className="bg-[#38cb89] text-white font-medium w-14 text-center rounded-md">
                    -50%
                  </div>
                </div>
                <div className="absolute p-4 right-0">
                  <div className="rounded-full shadow-lg p-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <AiOutlineHeart size={20} color="#6c7275" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end mb-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to={"/"} className="text-center">
                    <div className="bg-black text-white px-14 py-2 rounded-lg">
                      <p className="w-24">Add to cart</p>
                    </div>
                  </Link>
                </div>
                <img
                  src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723660329/furniture-shop/sofa_vh2fjn.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="mt-3">
                <div className="flex gap-1 pb-2">
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                </div>
                <div className="text-base font-semibold pb-1">
                  Loveseat Sofa
                </div>
                <div className="flex gap-2">
                  <div className="font-semibold">$199.00</div>
                  <div className="line-through text-[#6c7275]">$400.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default ProductDetail;
