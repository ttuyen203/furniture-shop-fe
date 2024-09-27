import { Link } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Product } from "../../types/Product";
import axios from "axios";
import BASE_URL from "../../config";
import toast from "react-hot-toast";
import { Category } from "../../types/Category";
import { useLoading } from "../../context/LoadingContext";
import Loading from "../../components/Loading";

const Shop = () => {
  const [isOpenSelectCategory, setIsOpenSelectCategory] = useState(false);
  const [isOpenSelectPrice, setIsOpenSelectPrice] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPrice, setSelectedPrice] = useState("All Price");

  const [data, setData] = useState<Product[]>([]);

  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(BASE_URL + "/products")
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    axios
      .get(BASE_URL + "/categories")
      .then((res) => {
        // console.log(res.data.data);
        setCategories(res.data.data);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading]);

  if (isLoading) {
    return <Loading />;
  }

  const prices = ["All Price", "$100 - $300"];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setIsOpenSelectCategory(false);
  };

  const handlePriceClick = (price: string) => {
    setSelectedPrice(price);
    setIsOpenSelectPrice(false);
  };

  const handleAddToCart = (idProduct: string) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("Please log in to add products to cart");
      return;
    }

    axios
      .post(BASE_URL + "/carts", {
        user: userId,
        product: idProduct,
        quantity: 1,
      })
      .then((res) => {
        console.log(res);
        toast.success("Added to cart successfully!");
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Failed to add to cart");
      });
  };

  return (
    <div>
      {/* Banner */}
      <div
        className="relative w-4/5 h-[40vh] lg:h-[426px] bg-cover lg:bg-contain bg-[right_40%_center] lg:bg-center bg-no-repeat mx-auto"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dymajn3ys/image/upload/v1724308805/furniture-shop/banner-shop_rfovb1.png')",
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex flex-col gap-3 w-full text-center items-center">
            <div className="flex items-center gap-2 ">
              <Link
                to={"/"}
                className="text-sm font-medium text-[#605F5F] hover:underline"
              >
                Home
              </Link>
              <IoIosArrowForward className="text-sm font-medium text-[#605F5F]" />
              <Link
                to={"/shop"}
                className="text-sm font-medium hover:underline"
              >
                Shop
              </Link>
            </div>
            <div className="text-[40px] lg:text-[54px] font-medium">
              <p>Shop Page</p>
            </div>
            <div className="text-base lg:text-xl font-normal">
              <p>Let’s design the place you always imagined.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categorization */}
      <div className="flex justify-center mt-9">
        <div className="w-4/5 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-[50%]">
            <div className="lg:w-[48%]">
              <p className="text-base font-semibold text-[#6C7275] mb-2">
                CATEGORIES
              </p>
              <div className="border-2 border-[#6c7275] p-1 rounded-lg">
                <button
                  onClick={() => setIsOpenSelectCategory(!isOpenSelectCategory)}
                  className="w-full text-base font-semibold px-2 flex items-center justify-between"
                >
                  {selectedCategory}
                  <MdKeyboardArrowDown size={20} />
                </button>
              </div>
              {isOpenSelectCategory && (
                <div className="w-full border-2 mt-1 p-2 rounded-lg">
                  {categories.map((category) => (
                    <p
                      key={category._id}
                      onClick={() => handleCategoryClick(category.name)}
                      className="text-base font-normal hover:bg-[#F3F5F7] hover:font-semibold px-1.5 rounded-md py-2 cursor-pointer"
                    >
                      {category.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="lg:w-[48%]">
              <p className="text-base font-semibold text-[#6C7275] mb-2">
                PRICE
              </p>
              <div className="border-2 border-[#6c7275] p-1 rounded-lg">
                <button
                  onClick={() => setIsOpenSelectPrice(!isOpenSelectPrice)}
                  className="w-full text-base font-semibold px-2 flex items-center justify-between"
                >
                  {selectedPrice}
                  <MdKeyboardArrowDown size={20} />
                </button>
              </div>
              {isOpenSelectPrice && (
                <div className="w-full border-2 mt-1 p-2 rounded-lg">
                  {prices.map((price) => (
                    <p
                      key={price}
                      onClick={() => handlePriceClick(price)}
                      className="text-base font-normal hover:bg-[#F3F5F7] hover:font-semibold px-1.5 rounded-md py-2 cursor-pointer"
                    >
                      {price}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center w-full lg:w-1/4 mt-6 border-y-2 py-1.5 lg:py-0 lg:border-y-0">
            <div className="flex gap-1 items-center">
              <p>Sort by</p>
              <IoIosArrowDown />
            </div>
            <div className="flex items-center border-2 border-[#eaeaea]">
              <div className="hidden lg:block py-2 px-3 transition-colors duration-200 border-r-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5H5C5.39782 0.5 5.77936 0.658035 6.06066 0.93934C6.34196 1.22064 6.5 1.60218 6.5 2V5C6.5 5.39782 6.34196 5.77936 6.06066 6.06066C5.77936 6.34196 5.39782 6.5 5 6.5H2C1.60218 6.5 1.22064 6.34196 0.93934 6.06066C0.658035 5.77936 0.5 5.39782 0.5 5V2ZM8 2C8 1.60218 8.15804 1.22064 8.43934 0.93934C8.72064 0.658035 9.10218 0.5 9.5 0.5H12.5C12.8978 0.5 13.2794 0.658035 13.5607 0.93934C13.842 1.22064 14 1.60218 14 2V5C14 5.39782 13.842 5.77936 13.5607 6.06066C13.2794 6.34196 12.8978 6.5 12.5 6.5H9.5C9.10218 6.5 8.72064 6.34196 8.43934 6.06066C8.15804 5.77936 8 5.39782 8 5V2ZM15.5 2C15.5 1.60218 15.658 1.22064 15.9393 0.93934C16.2206 0.658035 16.6022 0.5 17 0.5H20C20.3978 0.5 20.7794 0.658035 21.0607 0.93934C21.342 1.22064 21.5 1.60218 21.5 2V5C21.5 5.39782 21.342 5.77936 21.0607 6.06066C20.7794 6.34196 20.3978 6.5 20 6.5H17C16.6022 6.5 16.2206 6.34196 15.9393 6.06066C15.658 5.77936 15.5 5.39782 15.5 5V2ZM0.5 9.5C0.5 9.10218 0.658035 8.72064 0.93934 8.43934C1.22064 8.15804 1.60218 8 2 8H5C5.39782 8 5.77936 8.15804 6.06066 8.43934C6.34196 8.72064 6.5 9.10218 6.5 9.5V12.5C6.5 12.8978 6.34196 13.2794 6.06066 13.5607C5.77936 13.842 5.39782 14 5 14H2C1.60218 14 1.22064 13.842 0.93934 13.5607C0.658035 13.2794 0.5 12.8978 0.5 12.5V9.5ZM8 9.5C8 9.10218 8.15804 8.72064 8.43934 8.43934C8.72064 8.15804 9.10218 8 9.5 8H12.5C12.8978 8 13.2794 8.15804 13.5607 8.43934C13.842 8.72064 14 9.10218 14 9.5V12.5C14 12.8978 13.842 13.2794 13.5607 13.5607C13.2794 13.842 12.8978 14 12.5 14H9.5C9.10218 14 8.72064 13.842 8.43934 13.5607C8.15804 13.2794 8 12.8978 8 12.5V9.5ZM15.5 9.5C15.5 9.10218 15.658 8.72064 15.9393 8.43934C16.2206 8.15804 16.6022 8 17 8H20C20.3978 8 20.7794 8.15804 21.0607 8.43934C21.342 8.72064 21.5 9.10218 21.5 9.5V12.5C21.5 12.8978 21.342 13.2794 21.0607 13.5607C20.7794 13.842 20.3978 14 20 14H17C16.6022 14 16.2206 13.842 15.9393 13.5607C15.658 13.2794 15.5 12.8978 15.5 12.5V9.5ZM0.5 17C0.5 16.6022 0.658035 16.2206 0.93934 15.9393C1.22064 15.658 1.60218 15.5 2 15.5H5C5.39782 15.5 5.77936 15.658 6.06066 15.9393C6.34196 16.2206 6.5 16.6022 6.5 17V20C6.5 20.3978 6.34196 20.7794 6.06066 21.0607C5.77936 21.342 5.39782 21.5 5 21.5H2C1.60218 21.5 1.22064 21.342 0.93934 21.0607C0.658035 20.7794 0.5 20.3978 0.5 20V17ZM8 17C8 16.6022 8.15804 16.2206 8.43934 15.9393C8.72064 15.658 9.10218 15.5 9.5 15.5H12.5C12.8978 15.5 13.2794 15.658 13.5607 15.9393C13.842 16.2206 14 16.6022 14 17V20C14 20.3978 13.842 20.7794 13.5607 21.0607C13.2794 21.342 12.8978 21.5 12.5 21.5H9.5C9.10218 21.5 8.72064 21.342 8.43934 21.0607C8.15804 20.7794 8 20.3978 8 20V17ZM15.5 17C15.5 16.6022 15.658 16.2206 15.9393 15.9393C16.2206 15.658 16.6022 15.5 17 15.5H20C20.3978 15.5 20.7794 15.658 21.0607 15.9393C21.342 16.2206 21.5 16.6022 21.5 17V20C21.5 20.3978 21.342 20.7794 21.0607 21.0607C20.7794 21.342 20.3978 21.5 20 21.5H17C16.6022 21.5 16.2206 21.342 15.9393 21.0607C15.658 20.7794 15.5 20.3978 15.5 20V17Z"
                    fill="#6C7275"
                  />
                </svg>
              </div>
              <div className="hidden lg:block py-2 px-3 transition-colors duration-200 border-r-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 10.5C6.34674 10.5 6.91903 10.7371 7.34099 11.159C7.76295 11.581 8 12.1533 8 12.75V16.25C8 16.8467 7.76295 17.419 7.34099 17.841C6.91903 18.2629 6.34674 18.5 5.75 18.5H2.25C1.65326 18.5 1.08097 18.2629 0.65901 17.841C0.237053 17.419 0 16.8467 0 16.25V12.75C0 12.1533 0.237053 11.581 0.65901 11.159C1.08097 10.7371 1.65326 10.5 2.25 10.5H5.75ZM15.75 10.5C16.3467 10.5 16.919 10.7371 17.341 11.159C17.7629 11.581 18 12.1533 18 12.75V16.25C18 16.8467 17.7629 17.419 17.341 17.841C16.919 18.2629 16.3467 18.5 15.75 18.5H12.25C11.6533 18.5 11.081 18.2629 10.659 17.841C10.2371 17.419 10 16.8467 10 16.25V12.75C10 12.1533 10.2371 11.581 10.659 11.159C11.081 10.7371 11.6533 10.5 12.25 10.5H15.75ZM5.75 0.5C6.34674 0.5 6.91903 0.737053 7.34099 1.15901C7.76295 1.58097 8 2.15326 8 2.75V6.25C8 6.84674 7.76295 7.41903 7.34099 7.84099C6.91903 8.26295 6.34674 8.5 5.75 8.5H2.25C1.65326 8.5 1.08097 8.26295 0.65901 7.84099C0.237053 7.41903 0 6.84674 0 6.25V2.75C0 2.15326 0.237053 1.58097 0.65901 1.15901C1.08097 0.737053 1.65326 0.5 2.25 0.5H5.75ZM15.75 0.5C16.3467 0.5 16.919 0.737053 17.341 1.15901C17.7629 1.58097 18 2.15326 18 2.75V6.25C18 6.84674 17.7629 7.41903 17.341 7.84099C16.919 8.26295 16.3467 8.5 15.75 8.5H12.25C11.6533 8.5 11.081 8.26295 10.659 7.84099C10.2371 7.41903 10 6.84674 10 6.25V2.75C10 2.15326 10.2371 1.58097 10.659 1.15901C11.081 0.737053 11.6533 0.5 12.25 0.5H15.75Z"
                    fill="#6C7275"
                  />
                </svg>
              </div>
              <div className="py-2 px-3 transition-colors duration-200 border-r-2">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 10C6.34674 10 6.91903 10.2371 7.34099 10.659C7.76295 11.081 8 11.6533 8 12.25V15.75C8 16.3467 7.76295 16.919 7.34099 17.341C6.91903 17.7629 6.34674 18 5.75 18H2.25C1.65326 18 1.08097 17.7629 0.65901 17.341C0.237053 16.919 0 16.3467 0 15.75V12.25C0 11.6533 0.237053 11.081 0.65901 10.659C1.08097 10.2371 1.65326 10 2.25 10H5.75ZM15.75 10C16.3467 10 16.919 10.2371 17.341 10.659C17.7629 11.081 18 11.6533 18 12.25V15.75C18 16.3467 17.7629 16.919 17.341 17.341C16.919 17.7629 16.3467 18 15.75 18H12.25C11.6533 18 11.081 17.7629 10.659 17.341C10.2371 16.919 10 16.3467 10 15.75V12.25C10 11.6533 10.2371 11.081 10.659 10.659C11.081 10.2371 11.6533 10 12.25 10H15.75ZM5.75 0C6.34674 0 6.91903 0.237053 7.34099 0.65901C7.76295 1.08097 8 1.65326 8 2.25V5.75C8 6.34674 7.76295 6.91903 7.34099 7.34099C6.91903 7.76295 6.34674 8 5.75 8H2.25C1.65326 8 1.08097 7.76295 0.65901 7.34099C0.237053 6.91903 0 6.34674 0 5.75V2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H5.75ZM15.75 0C16.3467 0 16.919 0.237053 17.341 0.65901C17.7629 1.08097 18 1.65326 18 2.25V5.75C18 6.34674 17.7629 6.91903 17.341 7.34099C16.919 7.76295 16.3467 8 15.75 8H12.25C11.6533 8 11.081 7.76295 10.659 7.34099C10.2371 6.91903 10 6.34674 10 5.75V2.25C10 1.65326 10.2371 1.08097 10.659 0.65901C11.081 0.237053 11.6533 0 12.25 0H15.75Z"
                    fill="#6C7275"
                  />
                  <path d="M0 3H7.99805V15H0V3Z" fill="#6C7275" />
                  <path d="M10.002 3H18V15H10.002V3Z" fill="#6C7275" />
                </svg>
              </div>
              <div className="py-2 px-3 transition-colors duration-200">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12.75C10 12.1533 10.2371 11.581 10.659 11.159C11.081 10.7371 11.6533 10.5 12.25 10.5L15.75 10.5C16.3467 10.5 16.919 10.7371 17.341 11.159C17.7629 11.581 18 12.1533 18 12.75L18 16.25C18 16.8467 17.7629 17.419 17.341 17.841C16.919 18.2629 16.3467 18.5 15.75 18.5L12.25 18.5C11.6533 18.5 11.081 18.2629 10.659 17.841C10.2371 17.419 10 16.8467 10 16.25L10 12.75ZM10 2.75C10 2.15326 10.2371 1.58097 10.659 1.15901C11.081 0.737053 11.6533 0.5 12.25 0.5L15.75 0.5C16.3467 0.5 16.919 0.737053 17.341 1.15901C17.7629 1.58097 18 2.15326 18 2.75L18 6.25C18 6.84674 17.7629 7.41903 17.341 7.84099C16.919 8.26295 16.3467 8.5 15.75 8.5L12.25 8.5C11.6533 8.5 11.081 8.26295 10.659 7.84099C10.2371 7.41903 10 6.84674 10 6.25L10 2.75ZM4.37114e-07 12.75C4.1103e-07 12.1533 0.237053 11.581 0.65901 11.159C1.08097 10.7371 1.65326 10.5 2.25 10.5L5.75 10.5C6.34674 10.5 6.91903 10.7371 7.34099 11.159C7.76295 11.581 8 12.1533 8 12.75L8 16.25C8 16.8467 7.76295 17.419 7.34099 17.841C6.91903 18.2629 6.34674 18.5 5.75 18.5L2.25 18.5C1.65326 18.5 1.08097 18.2629 0.65901 17.841C0.237054 17.419 6.16188e-07 16.8467 5.90104e-07 16.25L4.37114e-07 12.75ZM0 2.75C-2.60842e-08 2.15326 0.237053 1.58097 0.65901 1.15901C1.08097 0.737053 1.65326 0.500001 2.25 0.500001L5.75 0.5C6.34674 0.5 6.91903 0.737053 7.34099 1.15901C7.76295 1.58097 8 2.15326 8 2.75L8 6.25C8 6.84674 7.76295 7.41903 7.34099 7.84099C6.91903 8.26295 6.34674 8.5 5.75 8.5L2.25 8.5C1.65326 8.5 1.08097 8.26295 0.65901 7.84099C0.237053 7.41903 1.79074e-07 6.84674 1.5299e-07 6.25L0 2.75Z"
                    fill="#6C7275"
                  />
                  <path
                    d="M3 18.5L3 10.502L15 10.502L15 18.5L3 18.5Z"
                    fill="#6C7275"
                  />
                  <path
                    d="M3 8.49805L3 0.500001L15 0.5L15 8.49805L3 8.49805Z"
                    fill="#6C7275"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* List Product */}
      <div className="flex justify-center mt-9">
        <div className="w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((d) => (
              <div className="group" key={d._id}>
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
                    <div
                      className="bg-black text-white px-14 py-2 rounded-lg cursor-pointer text-center"
                      onClick={() => {
                        handleAddToCart(d._id);
                      }}
                    >
                      <p className="w-24">Add to cart</p>
                    </div>
                  </div>
                  <img src={d.images} alt="" className="w-full" />
                </div>
                <Link to={`/product-detail/${d.slug}`}>
                  <div className="mt-3">
                    <div className="flex gap-1 pb-2">
                      <FaStar size={18} />
                      <FaStar size={18} />
                      <FaStar size={18} />
                      <FaStar size={18} />
                      <FaStar size={18} />
                    </div>
                    <div className="text-base font-semibold pb-1">{d.name}</div>
                    <div className="flex gap-2">
                      <div className="font-semibold">${d.price}</div>
                      {/* <div className="line-through text-[#6c7275]">$400.00</div> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 mb-5 lg:mt-16 lg:mb-16">
            <Link to={"/"}>
              <p className="border-2 border-black rounded-3xl py-2 px-10 text-base font-medium">
                Show more
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Shop;
