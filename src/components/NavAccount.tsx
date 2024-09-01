import { useState } from "react";
import { HiCamera } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const NavAccount = () => {
  const [isOpenSelectMenu, setIsOpenSelectMenu] = useState(false);

  // Sử dụng useLocation để lấy đường dẫn hiện tại của trang
  const location = useLocation();
  const currentPath = location.pathname;

  // Mảng các mục menu với tên và đường dẫn tương ứng
  const menuItems = [
    { name: "Account", path: "/account" },
    { name: "Address", path: "/account/address" },
    { name: "Orders", path: "/account/orders" },
    { name: "Wishlist", path: "/account/wishlist" },
    { name: "Log Out", path: "/" },
  ];

  // Xác định mục menu hiện tại dựa trên đường dẫn
  const currentMenuItem = menuItems.find((item) => item.path === currentPath);

  // Lọc ra các mục menu mà không trùng với đường dẫn hiện tại để tránh trùng lặp trong mobile menu
  const filteredMenuItems = menuItems.filter(
    (item) => item.path !== currentPath
  );

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
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <p
                  className={`font-semibold mt-3 ${
                    currentPath === item.path
                      ? "border-b border-black pb-2"
                      : "text-[#6C7275]"
                  }`}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </div>

          {/* Nav Mobile */}
          <div className="block lg:hidden px-5 mt-5">
            <div className="border-2 border-[#6c7275] p-1 rounded-lg bg-white">
              <button
                onClick={() => setIsOpenSelectMenu(!isOpenSelectMenu)}
                className="w-full text-base font-semibold px-2 flex items-center justify-between"
              >
                {currentMenuItem ? currentMenuItem.name : "Account"}
                <MdKeyboardArrowDown size={20} />
              </button>
            </div>
            {isOpenSelectMenu && (
              <div className="w-full border-2 mt-1 p-2 rounded-lg bg-white">
                {filteredMenuItems.map((item) => (
                  <Link key={item.path} to={item.path}>
                    <p className="text-base font-normal hover:bg-[#F3F5F7] hover:font-semibold px-1.5 rounded-md py-2 cursor-pointer">
                      {item.name}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavAccount;
