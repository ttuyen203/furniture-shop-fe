import { Link } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="container py-5 w-3/4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-medium">
                    <p>3legant.</p>
                </div>

                {/* Navbar */}
                <div className="flex gap-8">
                    <Link to={"/"} className="font-medium  hover:text-black">
                        Home
                    </Link>
                    <Link
                        to={"/shop"}
                        className="text-[#6c7275] hover:text-black"
                    >
                        Shop
                    </Link>
                    <Link
                        to={"/"}
                        className="text-[#6c7275] hover:text-black"
                    >
                        Product
                    </Link>
                    <Link
                        to={"/"}
                        className="text-[#6c7275] hover:text-black"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* User */}
                <div className="flex gap-5 items-center">
                    <Link to={"/"} className="relative flex items-center">
                        <FiSearch size={22} className="text-gray-700 hover:text-black transition-colors" />
                    </Link>
                    <Link to={"/"} className="relative flex items-center">
                        <FaRegCircleUser size={22} className="text-gray-700 hover:text-black transition-colors" />
                    </Link>
                    <div className="flex items-center">
                        <Link to={"/"} className="relative flex items-center mr-1">
                            <CgShoppingBag size={22} className="text-gray-700 hover:text-black transition-colors" />
                        </Link>
                        <div className="bg-black text-white w-5 h-5 text-center flex items-center justify-center rounded-full text-xs">
                            <p>3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
