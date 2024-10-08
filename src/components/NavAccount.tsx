import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { HiCamera } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const NavAccount = () => {
  const [isOpenSelectMenu, setIsOpenSelectMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Account");

  const location = useLocation();
  
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout successfully!");
    navigate("/login");
  };

  useEffect(() => {
    if (currentPath === "/account") {
      setSelectedMenuItem("Account");
    } else if (currentPath === "/account/address") {
      setSelectedMenuItem("Address");
    } else if (currentPath.startsWith("/account/orders")) {
      setSelectedMenuItem("Orders");
    }
  }, [currentPath]);

  return (
    <>
      <div className="w-full lg:w-1/5">
        <div className="bg-[#F3F5F7] py-10 rounded-lg">
          {/* Avatar */}
          <div className="flex justify-center">
            <Link to="/">
              <div className="relative max-w-[80px]">
                <p className="absolute bottom-1 -right-2 bg-black border-2 border-[#F3F5F7] text-white w-8 h-8 flex justify-center items-center rounded-full text-xs">
                  <HiCamera size={16} />
                </p>
                <img
                  src="https://res.cloudinary.com/dymajn3ys/image/upload/v1724856893/avatar-demo_wbpnjh.png"
                  alt="Avatar"
                />
              </div>
            </Link>
          </div>
          <div>
            <p className="text-xl font-semibold text-center mt-2">
              Sofia Havertz
            </p>
          </div>

          {/* Nav */}
          <div className="hidden lg:block px-5 mt-10">
            <NavLink to="/account">
              {({ isActive }) => (
                <p
                  className={`font-semibold mt-3 cursor-pointer ${
                    isActive && currentPath === "/account"
                      ? "text-black border-b border-black pb-2"
                      : "text-[#6C7275]"
                  }`}
                >
                  Account
                </p>
              )}
            </NavLink>
            <NavLink to="/account/address">
              {({ isActive }) => (
                <p
                  className={`font-semibold mt-3 cursor-pointer ${
                    isActive
                      ? "text-black border-b border-black pb-2"
                      : "text-[#6C7275]"
                  }`}
                >
                  Address
                </p>
              )}
            </NavLink>
            <NavLink to="/account/orders">
              {({ isActive }) => (
                <p
                  className={`font-semibold mt-3 cursor-pointer ${
                    isActive
                      ? "text-black border-b border-black pb-2"
                      : "text-[#6C7275]"
                  }`}
                >
                  Orders
                </p>
              )}
            </NavLink>
            <p
              className="font-semibold mt-3 cursor-pointer text-[#6C7275]"
              onClick={handleLogout}
            >
              Log Out
            </p>
          </div>

          {/* Nav Mobile */}
          <div className="block lg:hidden px-5 mt-5">
            <div className="border-2 border-[#6c7275] p-1 rounded-lg bg-white">
              <button
                onClick={() => setIsOpenSelectMenu(!isOpenSelectMenu)}
                className="w-full text-base font-semibold px-2 flex items-center justify-between"
              >
                {selectedMenuItem}
                <MdKeyboardArrowDown size={20} />
              </button>
            </div>
            {isOpenSelectMenu && (
              <div className="w-full border-2 mt-1 p-2 rounded-lg bg-white">
                <Link
                  to="/account"
                  onClick={() => {
                    setSelectedMenuItem("Account");
                    setIsOpenSelectMenu(false);
                  }}
                >
                  <p className="text-base font-normal hover:bg-[#F3F5F7] hover:font-semibold px-1.5 rounded-md py-2 cursor-pointer">
                    Account
                  </p>
                </Link>
                <Link
                  to="/account/address"
                  onClick={() => {
                    setSelectedMenuItem("Address");
                    setIsOpenSelectMenu(false);
                  }}
                >
                  <p className="text-base font-normal hover:bg-[#F3F5F7] hover:font-semibold px-1.5 rounded-md py-2 cursor-pointer">
                    Address
                  </p>
                </Link>
                <Link
                  to="/account/orders"
                  onClick={() => {
                    setSelectedMenuItem("Orders");
                    setIsOpenSelectMenu(false);
                  }}
                >
                  <p className="text-base font-normal hover:bg-[#F3F5F7] hover:font-semibold px-1.5 rounded-md py-2 cursor-pointer">
                    Orders
                  </p>
                </Link>
                <p
                  onClick={handleLogout}
                  className="text-base font-normal hover:bg-[#F3F5F7] hover:font-semibold px-1.5 rounded-md py-2 cursor-pointer"
                >
                  Log Out
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavAccount;
