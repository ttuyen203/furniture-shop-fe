import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";

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
              <div>
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
            <div className="bg-gray-300">aaa</div>
            <div className="bg-gray-300">aaa</div>
            <div className="bg-gray-300">aaa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
