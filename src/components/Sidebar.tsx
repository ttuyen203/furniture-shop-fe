import { Link, useLocation } from "react-router-dom";
import { TbDeviceAnalytics } from "react-icons/tb";
import { MdOutlineBorderAll } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { LuListChecks } from "react-icons/lu";

const Sidebar = () => {
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
    <div className="hidden md:block fixed top-0 left-0 z-40 w-64 h-screen">
      {/* logo */}
      <Link to={"/"}>
        <p className="text-center font-semibold text-xl mt-3 mb-3">3legant.</p>
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
  );
};

export default Sidebar;
