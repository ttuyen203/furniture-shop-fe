import { useState } from "react";
import { BsList } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuListChecks } from "react-icons/lu";
import { MdOutlineBorderAll } from "react-icons/md";
import { TbCategory2, TbDeviceAnalytics } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <TbDeviceAnalytics size={20} />,
    },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: <TbCategory2 size={20} />,
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: <MdOutlineBorderAll size={20} />,
    },
    {
      name: "Order List",
      path: "/admin/order-lists",
      icon: <LuListChecks size={20} />,
    },
  ];

  return (
    <>
      <div className="px-5 py-5 flex justify-between bg-white">
        <div className="flex gap-6 items-center">
          <BsList
            size={20}
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
          <div className="hidden lg:flex gap-2 items-center border border-[#D5D5D5] bg-[#f5f6fa] px-4 py-1 rounded-3xl text-[#8b8c8f]">
            <FiSearch size={18} />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <Link to={"/"}>
          <div className="flex items-center gap-4">
            <div className="bg-red-500 rounded-full w-8 h-8"></div>
            <div>
              <p className="text-sm font-bold text-[#404040]">To Tuyen</p>
              <p className="text-xs font-normal text-[#565656]">Admin</p>
            </div>
            <div className="border rounded-full p-1">
              <IoIosArrowDown />
            </div>
          </div>
        </Link>
      </div>

      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
          <div
            className="relative w-64 h-full bg-white transform transition-transform duration-300 ease-in-out z-50"
            style={{
              transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="fixed top-0 left-0 z-40 w-64 h-screen">
              {/* logo */}
              <Link to={"/"}>
                <p className="text-center font-semibold text-xl mt-3 mb-3">
                  3legant.
                </p>
              </Link>

              {/* Menu Items */}
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <div className="px-8">
                    <div
                      className={`flex items-center gap-2 py-4 rounded-lg pl-5 ${
                        item.path === "/admin"
                          ? currentPath === item.path
                            ? "text-white bg-[#4880FF]"
                            : ""
                          : currentPath.startsWith(item.path)
                          ? "text-white bg-[#4880FF]"
                          : ""
                      }`}
                    >
                      {item.icon}
                      <p className="text-sm">{item.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
