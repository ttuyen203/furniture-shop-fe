import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div className="flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723635930/furniture-shop/banner-home_ugqdxj.png"
          alt="banner_home"
          className="w-3/4"
        />
      </div>

      {/*  */}
      <div className="flex justify-center mt-9">
        <div className="w-3/4 flex flex-col sm:flex-row justify-between items-center">
          <div className="w-2/3">
            <p className="text-7xl pb-3">
              Simply Unique<span className="text-[#6c7275]">/</span>
            </p>
            <p className="text-7xl">
              Simply Better<span className="text-[#6c7275]">.</span>
            </p>
          </div>
          <div className="">
            <p className="w-5/6">
              <span className="text-primary font-bold">3legant</span> is a gift
              & decorations store based in HCMC, Vietnam. Est since 2019.
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center mt-9">
        <div className="w-3/4 flex flex-col sm:flex-row gap-11">
          {/* Living Room */}
          <div className="relative flex-1">
            <img
              src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723654585/furniture-shop/livingroom_wfesui.png"
              alt="Living Room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 pt-5 pl-5 md:p-10">
              <p className="text-xl sm:text-3xl font-medium sm:pb-4">
                Living Room
              </p>
              <Link to="/shop" className="flex items-center gap-1 font-medium">
                <span className="text-xs sm:text-lg">Shop Now</span>
                <GoArrowRight fontWeight={500} />
              </Link>
              <hr className="border-t-2 border-black w-24 mt-2" />
            </div>
          </div>

          <div className="flex flex-col gap-7 flex-1">
            {/* Bedroom */}
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723654582/furniture-shop/bedroom_uz0sow.png"
                alt="Bedroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-5 md:left-10">
                <p className="text-xl sm:text-3xl font-medium md:pb-4">
                  Bedroom
                </p>
                <Link
                  to="/shop"
                  className="flex items-center gap-1 font-medium"
                >
                  <span className="text-xs sm:text-lg">Shop Now</span>
                  <GoArrowRight fontWeight={500} />
                </Link>
                <hr className="border-t-2 border-black w-24 mt-2" />
              </div>
            </div>

            {/* Kitchen */}
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723654576/furniture-shop/kitchen_zkd4mk.png"
                alt="Kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-5 md:left-10">
                <p className="text-xl sm:text-3xl font-medium md:pb-4">
                  Kitchen
                </p>
                <Link
                  to="/shop"
                  className="flex items-center gap-1 font-medium"
                >
                  <span className="text-xs sm:text-lg">Shop Now</span>
                  <GoArrowRight fontWeight={500} />
                </Link>
                <hr className="border-t-2 border-black w-24 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center mt-9">
        <div className="w-3/4">
          <div className="w-full flex justify-between items-end pb-8">
            <div>
              <p className="text-4xl font-medium">New</p>
              <p className="text-4xl font-medium">Arrivals</p>
            </div>
            <div className="flex flex-col items-end">
              <Link
                to="/shop"
                className="flex items-center gap-1 hover:underline"
              >
                <span className="text-xs sm:text-lg">More Products</span>
                <GoArrowRight fontWeight={500} />
              </Link>
            </div>
          </div>
          {/* List Product */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="">
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
                  <div className="rounded-full shadow-lg p-1 cursor-pointer">
                    <AiOutlineHeart size={20} color="#6c7275" />
                  </div>
                </div>
                <div className="absolute px-5 pb-4 bottom-0 ">
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
              <div className="mt-2">
                <div className="flex gap-1 pb-1">
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
            <div className="">
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
                  <div className="rounded-full shadow-lg p-1 cursor-pointer">
                    <AiOutlineHeart size={20} color="#6c7275" />
                  </div>
                </div>
                <div className="absolute px-5 pb-4 bottom-0 ">
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
              <div className="mt-2">
                <div className="flex gap-1 pb-1">
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
            <div className="">
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
                  <div className="rounded-full shadow-lg p-1 cursor-pointer">
                    <AiOutlineHeart size={20} color="#6c7275" />
                  </div>
                </div>
                <div className="absolute px-5 pb-4 bottom-0 ">
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
              <div className="mt-2">
                <div className="flex gap-1 pb-1">
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
            <div className="">
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
                  <div className="rounded-full shadow-lg p-1 cursor-pointer">
                    <AiOutlineHeart size={20} color="#6c7275" />
                  </div>
                </div>
                <div className="absolute px-5 pb-4 bottom-0 ">
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
              <div className="mt-2">
                <div className="flex gap-1 pb-1">
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
          <hr className="border-2 border-black my-9 rounded-sm " />
          {/* List service */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className=" bg-[#F3F5F7]">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723739854/furniture-shop/fast_delivery_olroky.png"
                alt=""
                className="pt-12 pl-8 pb-5"
              />
              <div className="pl-8">
                <p className="text-xl font-medium pb-2">Free Shipping</p>
                <p className="text-[14px] text-[#6C7275] pb-12">
                  Order above $200
                </p>
              </div>
            </div>
            <div className=" bg-[#F3F5F7]">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723741114/furniture-shop/money_be6l46.png"
                alt=""
                className="pt-12 pl-8 pb-5"
              />
              <div className="pl-8">
                <p className="text-xl font-medium pb-2">Money-back</p>
                <p className="text-[14px] text-[#6C7275] pb-12">
                  30 days guarantee
                </p>
              </div>
            </div>
            <div className=" bg-[#F3F5F7]">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723741222/furniture-shop/lock_01_whqnrr.png"
                alt=""
                className="pt-12 pl-8 pb-5"
              />
              <div className="pl-8">
                <p className="text-xl font-medium pb-2">Secure Payments</p>
                <p className="text-[14px] text-[#6C7275] pb-12">
                  Secured by Stripe
                </p>
              </div>
            </div>
            <div className=" bg-[#F3F5F7]">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723741285/furniture-shop/call_em3pvk.png"
                alt=""
                className="pt-12 pl-8 pb-5"
              />
              <div className="pl-8">
                <p className="text-xl font-medium pb-2">24/7 Support</p>
                <p className="text-[14px] text-[#6C7275] pb-12">
                  Phone and Email support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="mt-9 bg-[#f3f5f7]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2">
          <div className="">
            <img
              src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723742109/furniture-shop/banner2_cio5km.png"
              alt=""
            />
          </div>
          <div className="pt-16 sm:pt-20 pl-10">
            <div className="sm:w-[60%]">
              {" "}
              <p className="text-[#377DFF] font-bold">SALE UP TO 35% OFF</p>
              <p className="text-4xl font-medium pt-5">HUNDREDS of </p>
              <p className="text-4xl font-medium pb-5">New lower prices!</p>
              <p className="pb-5 text-xl font-normal">
                It’s more affordable than ever to give every room in your home a
                stylish makeover
              </p>
              <Link to="/shop" className="flex items-center gap-1 font-medium">
                <span className="sm:text-lg">Shop Now</span>
                <GoArrowRight fontWeight={500} size={20} />
              </Link>
              <hr className="border-t-2 border-black w-24 sm:w-28 mt-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="flex justify-center mt-9">
        <div className="w-3/4">
          <div className="w-full flex justify-between items-end pb-8">
            <div>
              <p className="text-4xl font-medium">Articles</p>
            </div>
            <div className="flex flex-col items-end">
              <Link
                to="/shop"
                className="flex items-center gap-1 hover:underline"
              >
                <span className="text-sm sm:text-lg font-medium">
                  More Articles
                </span>
                <GoArrowRight fontWeight={500} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="mb-2">
              <div>
                <img
                  src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723744322/furniture-shop/articles_1_x3x2f5.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-xl font-medium mb-2 mt-4">
                  7 ways to decor your home
                </p>
                <Link
                  to="/shop"
                  className="flex items-center gap-1 font-medium"
                >
                  <span className="text-xs sm:text-base">Read More</span>
                  <GoArrowRight fontWeight={500} size={20} />
                </Link>
                <hr className="border-t-2 border-black w-24 sm:w-28" />
              </div>
            </div>
            <div className="mb-2">
              <div>
                <img
                  src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723744325/furniture-shop/articles_2_wvtrhx.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-xl font-medium mb-2 mt-4">
                  Kitchen organization
                </p>
                <Link
                  to="/shop"
                  className="flex items-center gap-1 font-medium"
                >
                  <span className="text-xs sm:text-base">Read More</span>
                  <GoArrowRight fontWeight={500} size={20} />
                </Link>
                <hr className="border-t-2 border-black w-24 sm:w-28" />
              </div>
            </div>
            <div className="mb-2">
              <div>
                <img
                  src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723744326/furniture-shop/articles_3_hgof5r.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-xl font-medium mb-2 mt-4">
                  Decor your bedroom
                </p>
                <Link
                  to="/shop"
                  className="flex items-center gap-1 font-medium"
                >
                  <span className="text-xs sm:text-base">Read More</span>
                  <GoArrowRight fontWeight={500} size={20} />
                </Link>
                <hr className="border-t-2 border-black w-24 sm:w-28" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
