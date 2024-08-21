import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-black flex justify-center">
        <div className="w-3/4">
          <div className="flex flex-col lg:flex-row justify-between pt-9 items-center">
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 items-center">
              <div className="text-2xl font-medium text-white">
                <p>3legant.</p>
              </div>
              <div className="text-2xl font-medium text-[#6C7275]">
                <p className="hidden lg:block">|</p>
                <p className="block lg:hidden">─</p>
              </div>
              <div className="font-light text-white mb-8 lg:mb-0">
                <p>Gift & Decoration Store</p>
              </div>
            </div>

            {/* Navbar */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <Link to={"/"} className="font-medium text-white hover:underline">
                Home
              </Link>
              <Link to={"/shop"} className="text-white hover:underline">
                Shop
              </Link>
              <Link to={"/"} className="text-white hover:underline">
                Product
              </Link>
              <Link to={"/"} className="text-white hover:underline">
                Contact Us
              </Link>
            </div>
          </div>

          <hr className="border-2 lg:border-1  border-[#6c7275] my-6 lg:my-9 rounded-sm" />

          <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-8 justify-between pb-9 items-center">
            <div className="flex flex-col-reverse lg:flex-row lg:gap-10 items-center justify-center">
              <div className="font-normal text-[12px] text-white">
                <p>Copyright © 2023 3legant. All rights reserved</p>
              </div>
              <div className="flex gap-6 mb-6 lg:mb-0">
                <div className="font-semibold text-white text-[12px]">
                  <p>Privacy Policy</p>
                </div>
                <div className="font-semibold text-white text-[12px]">
                  <p>Terms of Use</p>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <FaInstagram color="white" size={20} />
              <FaFacebook color="white" size={20} />
              <FaYoutube color="white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
