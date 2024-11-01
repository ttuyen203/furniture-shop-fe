import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";
import { FaRegCircleUser, FaTrashCan } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import axios from "axios";
import BASE_URL from "../config";
import { Cart } from "../types/Cart";
import toast from "react-hot-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dataCart, setDataCart] = useState<Cart | null>(null);

  const userId = localStorage.getItem("userId");
  // console.log(userId);

  useEffect(() => {
    axios
      .get(BASE_URL + `/carts/user/${userId}`)
      .then((res) => {
        // console.log("Cart data", res.data);
        setDataCart(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const totalAmount = dataCart?.products
    ?.reduce((total, d) => total + d?.product?.price * d.quantity, 0)
    .toFixed(2);

  const productInCart = dataCart?.products?.length ?? 0;

  const productViewMore = (dataCart?.products?.length ?? 0) - 2;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleDeleteProductInCart = (id: string) => {
    // console.log("User ID:", userId);
    // console.log("Product ID:", id);
    toast(
      (t) => (
        <div className="p-2 w-full ">
          <div className="flex justify-center mb-4">
            <FaTrashCan size={30} className="text-red-600" />
          </div>
          <p className="text-lg text-center w-full">
            Are you sure you want to delete this item?
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <button
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              onClick={() => {
                axios
                  .delete(BASE_URL + `/carts/user/${userId}/product/${id}`)
                  .then(() => {
                    toast.success("Product deleted successfully!");
                    axios
                      .get(BASE_URL + `/carts/user/${userId}`)
                      .then((res) => setDataCart(res.data))
                      .catch((err) => console.log(err));
                  })
                  .catch(() => toast.error("Failed to delete product"))
                  .finally(() => toast.dismiss(t.id));
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartProducts: dataCart?.products } });
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
          <div>
            {((dataCart?.products?.length ?? 0) > 0 &&
              dataCart?.products
                ?.slice()
                .reverse()
                .slice(0, 2)
                .map((d) => (
                  <div
                    className="flex gap-2 border-b-2 border-[#e8ecef] pb-4 mb-4"
                    key={d._id}
                  >
                    <div className="w-1/4">
                      <img src={d?.product?.images[0]} alt="" className="w-20" />
                    </div>
                    <div className="w-3/4">
                      <div className="flex text-sm font-semibold justify-between mb-1">
                        <p>{d?.product?.name}</p>
                        <p>${d?.product?.price}</p>
                      </div>
                      <div className="flex justify-between mb-1 text-xs font-normal text-[#6C7275]">
                        <p>Status: New</p>
                        <IoCloseOutline
                          size={20}
                          className="cursor-pointer active:bg-[#dde2e5]"
                          onClick={() =>
                            handleDeleteProductInCart(d.product._id)
                          }
                        />
                      </div>
                      <div className="border border-[#6c7275] rounded-md p-2 flex justify-center items-center gap-3 w-[30%]">
                        <FiMinus
                          className="cursor-pointer active:bg-[#dde2e5]"
                          size={20}
                        />
                        <div className="font-semibold text-xs">
                          {d.quantity}
                        </div>
                        <FiPlus
                          className="cursor-pointer active:bg-[#dde2e5]"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                ))) || <p>No products in the cart</p>}
            {productViewMore > 0 && (
              <Link
                to={"/cart"}
                onClick={() => {
                  setIsCartOpen(false);
                }}
              >
                <div className="flex justify-center items-center mt-6 text-sm font-semibold">
                  <p className="border-2 rounded-lg border-[#ccc] py-1 px-4">
                    View more {productViewMore} product
                    {productViewMore !== 1 ? "s" : ""}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>

        <div>
          <div className="mb-5">
            <div>
              <div className="py-2 border-b border-[#e8ecef] text-sm font-medium flex items-center justify-between">
                <p className="text-base font-normal">Subtotal</p>
                <div className="flex gap-1 text-base font-semibold">$0.00</div>
              </div>
            </div>
            <div>
              <div className="py-2 border-b border-[#e8ecef] text-sm font-medium flex items-center justify-between">
                <p className="text-xl font-medium">Total</p>
                <div className="flex gap-1 text-xl font-medium">
                  ${totalAmount || "0.00"}
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              setIsCartOpen(false);
            }}
          >
            <p
              className="bg-black text-lg font-medium text-white p-3 rounded-lg text-center cursor-pointer"
              onClick={() => handleCheckout()}
            >
              Checkout
            </p>
          </div>

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 border-b border-[#e8ecef] text-sm ${
                    isActive ? "font-medium" : "text-[#6c7275]"
                  }`
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `block py-2 border-b border-[#e8ecef] text-sm ${
                    isActive ? "font-medium" : "text-[#6c7275]"
                  }`
                }
                onClick={toggleMenu}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block py-2 border-b border-[#e8ecef] text-sm ${
                    isActive ? "font-medium" : "text-[#6c7275]"
                  }`
                }
                onClick={toggleMenu}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `block py-2 border-b border-[#e8ecef] text-sm ${
                    isActive ? "font-medium" : "text-[#6c7275]"
                  }`
                }
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
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
                    <p>{productInCart}</p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/account"
                className="py-2 border-b border-[#e8ecef] text-sm font-medium flex items-center justify-between"
                onClick={toggleMenu}
              >
                Account
                <div className="flex gap-1">
                  <FaRegCircleUser size={20} />
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-black"
                  : "text-[#6c7275] hover:text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-black"
                  : "text-[#6c7275] hover:text-black"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-black"
                  : "text-[#6c7275] hover:text-black"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-black"
                  : "text-[#6c7275] hover:text-black"
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* User */}
          <div className="flex gap-5 items-center">
            <Link to={"/"} className="hidden relative md:flex items-center">
              <FiSearch
                size={22}
                className="text-gray-700 hover:text-black transition-colors"
              />
            </Link>
            <Link
              to={"/account"}
              className="hidden relative md:flex items-center"
            >
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
                  <p>{productInCart}</p>
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
