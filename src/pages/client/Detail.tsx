import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Newsletter from "../../components/Newsletter";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../config";
import { Product } from "../../types/Product";
import toast from "react-hot-toast";
import { useLoading } from "../../context/LoadingContext";
import Loading from "../../components/Loading";

const Detail = () => {
  const { id } = useParams();

  const [data, setData] = useState<Product | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);

  const { isLoading, setIsLoading } = useLoading();

  const handleChangeQuantity = (change: number) => {
    setQuantity((prev) => Math.max(prev + change, 1));
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(BASE_URL + `/products/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, setIsLoading]);

  if (isLoading) {
    return <Loading />;
  }

  const userId = localStorage.getItem("userId");
  // console.log(userId);

  const handleAddToCart = () => {
    axios
      .post(BASE_URL + "/carts", {
        user: userId,
        product: data?._id,
        quantity,
      })
      .then((res) => {
        toast.success("Add to cart successfully!");
        console.log(res);
        // window.location.reload();
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Add to cart failed");
      });
  };

  return (
    <>
      {/* breadcrumb */}
      <div className="flex justify-center mb-4 mt-2">
        <div className="w-4/5">
          <div className="text-sm font-medium text-[#605F5F] flex items-center gap-3">
            <p>Home {">"}</p>
            <p>Shop {">"}</p>
            {/* <p>Living Room {">"}</p> */}
            <p className="text-[#121212]">Product</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center mb-10 mt-5">
        <div className="w-4/5 flex flex-col lg:flex-row gap-8 lg:gap-16 ">
          {/*List Image Product */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-7 w-full lg:w-2/4">
            <div className="max-w-[262px]">
              <img src={data?.images} alt="Product Image" />
            </div>
          </div>
          {/* List Image Product Mobile */}
          <div className="block lg:hidden relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide className="w-full">
                <img
                  src={data?.images}
                  alt="Product Image"
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
            </Swiper>

            {/* Navigation buttons */}
            <div className="btn-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-4 rounded-full cursor-pointer z-10 flex items-center justify-center">
              <FaArrowLeft size={20} />
            </div>
            <div className="btn-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-4 rounded-full cursor-pointer z-10 flex items-center justify-center">
              <FaArrowRight size={20} />
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
            <p className="text-[40px]  font-medium mt-2">{data?.name}</p>
            {/* Desc */}
            <p className="text-base font-normal text-[#6C7275] mt-2 text-justify">
              {data?.desc}
            </p>
            {/* Price */}
            <p className="text-[28px] font-medium mt-4">
              ${data?.price}
              {/* <span className="text-xl font-medium text-[#6C7275] line-through">
                $400.00
              </span> */}
            </p>
            <hr className="border mt-3" />
            {/* Measurements */}
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
                  <FiMinus
                    onClick={() => {
                      handleChangeQuantity(-1);
                    }}
                  />
                  <p className="text-base font-semibold">{quantity}</p>
                  <FiPlus
                    onClick={() => {
                      handleChangeQuantity(1);
                    }}
                  />
                </div>
                <Link
                  to={"/"}
                  className="w-8/12 flex items-center justify-center gap-2 border-2 border-[#141718] rounded-lg"
                >
                  <AiOutlineHeart size={25} />
                  <p className="text-lg font-medium">Wishlist</p>
                </Link>
              </div>
              <div
                className="w-full bg-black mt-4 flex items-center justify-center rounded-lg p-3"
                onClick={() => {
                  handleAddToCart();
                }}
              >
                <p className="text-white text-lg font-medium">Add to Cart</p>
              </div>
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

export default Detail;
