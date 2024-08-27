import { useState } from "react";
import { Link } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative">
      {/* Fly Cart */}
      <div
        className={`fixed top-0 right-0 w-[90%] lg:w-[25%] h-full bg-white transform p-5 flex flex-col justify-between ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 `}
      >
        <div>
          <div className="flex justify-between items-center mb-5">
            <div className="text-[28px] font-medium">Cart</div>
            <button onClick={toggleCart}>
              <IoCloseOutline size={25} />
            </button>
          </div>
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
              <div className="flex justify-between mb-1 text-xs font-normal text-[#6C7275]">
                <p>Color: Black</p>
                <IoCloseOutline
                  size={20}
                  className="cursor-pointer active:bg-[#dde2e5]"
                />
              </div>
              <div className="border border-[#6c7275] rounded-md p-2 flex justify-center items-center gap-3 w-[30%]">
                <FiMinus
                  className="cursor-pointer active:bg-[#dde2e5]"
                  size={20}
                />
                <div className="font-semibold text-xs">2</div>
                <FiPlus
                  className="cursor-pointer active:bg-[#dde2e5]"
                  size={20}
                />
              </div>
            </div>
          </div>
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
              <div className="flex justify-between mb-1 text-xs font-normal text-[#6C7275]">
                <p>Color: Black</p>
                <IoCloseOutline
                  size={20}
                  className="cursor-pointer active:bg-[#dde2e5]"
                />
              </div>
              <div className="border border-[#6c7275] rounded-md p-2 flex justify-center items-center gap-3 w-[30%]">
                <FiMinus
                  className="cursor-pointer active:bg-[#dde2e5]"
                  size={20}
                />
                <div className="font-semibold text-xs">2</div>
                <FiPlus
                  className="cursor-pointer active:bg-[#dde2e5]"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-5">
            <div>
              <div className="py-2 border-b border-[#e8ecef] text-sm font-medium flex items-center justify-between">
                <p className="text-base font-normal">Subtotal</p>
                <div className="flex gap-1 text-base font-semibold">$99.00</div>
              </div>
            </div>
            <div>
              <div className="py-2 border-b border-[#e8ecef] text-sm font-medium flex items-center justify-between">
                <p className="text-xl font-medium">Total</p>
                <div className="flex gap-1 text-xl font-medium">$234.00</div>
              </div>
            </div>
          </div>

          <Link
            to={"/checkout"}
            onClick={() => {
              setIsCartOpen(false);
            }}
          >
            <p className="bg-black text-lg font-medium text-white p-3 rounded-lg text-center">
              Checkout
            </p>
          </Link>

          <Link
            to={"/cart"}
            onClick={() => {
              setIsCartOpen(false);
            }}
          >
            <p className="flex justify-center hover:underline mt-4 text-sm font-semibold">
              View Cart
            </p>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleCart}
        ></div>
      )}

      {/* Fly Menu */}
      <div
        className={`fixed top-0 left-0 w-[90%] h-full bg-white transform p-5 flex flex-col justify-between ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div>
          <div className="flex justify-between items-center mb-4">
            {/* Logo */}
            <div className="text-xl font-medium flex items-center gap-1">
              <Link to={"/"}>3legant.</Link>
            </div>
            <button onClick={toggleMenu}>
              <IoCloseOutline size={20} className="h-6 w-6" />
            </button>
          </div>

          <div className="flex gap-2 items-center border-2 border-[#6c7275] p-2 rounded-lg">
            <FiSearch size={20} />
            <input
              type="text"
              placeholder="Search"
              className="border-none focus:outline-none"
            />
          </div>

          <ul className="mt-4">
            <li>
              <Link
                to="/"
                className="block py-2 border-b border-[#e8ecef] text-sm font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-2 border-b border-[#e8ecef] text-sm font-medium"
                onClick={toggleMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="block py-2 border-b border-[#e8ecef] text-sm font-medium"
                onClick={toggleMenu}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 border-b border-[#e8ecef] text-sm font-medium"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="mb-5">
            <li>
              <Link
                to="/cart"
                className="py-2 border-b border-[#e8ecef] text-sm font-medium flex items-center justify-between"
                onClick={toggleMenu}
              >
                Cart
                <div className="flex gap-1">
                  <CgShoppingBag size={20} />
                  <div className="bg-black text-white w-5 h-5 text-center flex items-center justify-center rounded-full text-xs">
                    <p>3</p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="py-2 border-b border-[#e8ecef] text-sm font-medium flex items-center justify-between"
                onClick={toggleMenu}
              >
                Wishlist
                <div className="flex gap-1">
                  <AiOutlineHeart size={20} />
                  <div className="bg-black text-white w-5 h-5 text-center flex items-center justify-center rounded-full text-xs">
                    <p>3</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>

          <Link to={"/login"}>
            <p className="bg-black text-white p-3 rounded-lg text-center">
              Sign In
            </p>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Header */}
      <div className="flex justify-center">
        <div className="container py-5 w-4/5 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-medium flex items-center gap-1">
            {/* Icon menu mobile */}
            <BsList
              size={25}
              className="block md:hidden cursor-pointer"
              onClick={toggleMenu}
            />
            <Link to={"/"}>3legant.</Link>
          </div>

          {/* Navbar */}
          <div className="hidden md:flex gap-8">
            <Link to={"/"} className="font-medium hover:text-black">
              Home
            </Link>
            <Link to={"/shop"} className="text-[#6c7275] hover:text-black">
              Shop
            </Link>
            <Link to={"/"} className="text-[#6c7275] hover:text-black">
              Product
            </Link>
            <Link to={"/"} className="text-[#6c7275] hover:text-black">
              Contact Us
            </Link>
          </div>

          {/* User */}
          <div className="flex gap-5 items-center">
            <Link to={"/"} className="hidden relative md:flex items-center">
              <FiSearch
                size={22}
                className="text-gray-700 hover:text-black transition-colors"
              />
            </Link>
            <Link to={"/"} className="hidden relative md:flex items-center">
              <FaRegCircleUser
                size={22}
                className="text-gray-700 hover:text-black transition-colors"
              />
            </Link>
            <div onClick={toggleCart} className="cursor-pointer">
              <div className="flex items-center">
                <div className="relative flex items-center mr-1">
                  <CgShoppingBag
                    size={22}
                    className="text-gray-700 hover:text-black transition-colors"
                  />
                </div>
                <div className="bg-black text-white w-5 h-5 text-center flex items-center justify-center rounded-full text-xs">
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
