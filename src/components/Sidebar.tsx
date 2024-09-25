import { Link, NavLink, useLocation } from "react-router-dom";
import { TbDeviceAnalytics } from "react-icons/tb";
import { MdOutlineBorderAll } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { LuListChecks } from "react-icons/lu";

const Sidebar = () => {
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <div className="hidden md:block fixed top-0 left-0 z-40 w-64 h-screen">
      {/* logo */}
      <Link to={"/"}>
        <p className="text-center font-semibold text-xl mt-3 mb-3">3legant.</p>
      </Link>

      {/* Menu Items */}
      <NavLink to={"/admin"}>
        {({ isActive }) => (
          <div className="px-8">
            <div
              className={`flex items-center gap-2 py-4 rounded-lg pl-5 ${
                isActive && currentPath === "/admin"
                  ? "text-white bg-[#4880FF]"
                  : ""
              }`}
            >
              <TbDeviceAnalytics size={20} />
              <p className="text-sm">Dashboard</p>
            </div>
          </div>
        )}
      </NavLink>

      <NavLink to={"/admin/categories"}>
        {({ isActive }) => (
          <div className="px-8">
            <div
              className={`flex items-center gap-2 py-4 rounded-lg pl-5 ${
                isActive ? "text-white bg-[#4880FF]" : ""
              }`}
            >
              <TbCategory2 size={20} />
              <p className="text-sm">Categories</p>
            </div>
          </div>
        )}
      </NavLink>

      <NavLink to={"/admin/products"}>
        {({ isActive }) => (
          <div className="px-8">
            <div
              className={`flex items-center gap-2 py-4 rounded-lg pl-5 ${
                isActive ? "text-white bg-[#4880FF]" : ""
              }`}
            >
              <MdOutlineBorderAll size={20} />
              <p className="text-sm">Products</p>
            </div>
          </div>
        )}
      </NavLink>

      <NavLink to={"/admin/order-lists"}>
        {({ isActive }) => (
          <div className="px-8">
            <div
              className={`flex items-center gap-2 py-4 rounded-lg pl-5 ${
                isActive ? "text-white bg-[#4880FF]" : ""
              }`}
            >
              <LuListChecks size={20} />
              <p className="text-sm">Order Lists</p>
            </div>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default Sidebar;
