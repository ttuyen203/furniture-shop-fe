import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        {/* Left page */}
        <div className="w-full md:w-1/2 bg-[#F3F5F7] p-4 md:h-screen">
          <div className="justify-center items-center bg-[#F3F5F7]">
            {/* logo */}
            <Link to={"/"}>
              <p className="text-center font-semibold text-2xl">3legant.</p>
            </Link>
            <div className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723635787/furniture-shop/register_login_banner_el4mxn.png"
                alt="register"
              />
            </div>
          </div>
        </div>
        {/* Right page */}
        <div className="w-full md:p-3 md:w-1/2">
          <div className="p-10 md:p-20 w-full">
            <h3 className="text-4xl font-semibold mb-6">Sign up</h3>
            <p className="text-[#6c7275] mb-6">
              Already have an account?{" "}
              <Link to={"/login"} className="text-[#38cb89] hover:underline">
                {" "}
                Sign in
              </Link>
            </p>
            <form action="">
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border-b-2 pb-3 focus:outline-none w-full placeholder:text-[#6c7275]"
                />
              </div>
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Username"
                  className="border-b-2 pb-3 focus:outline-none w-full placeholder:text-[#6c7275]"
                />
              </div>
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Email address"
                  className="border-b-2 pb-3 focus:outline-none w-full placeholder:text-[#6c7275]"
                />
              </div>
              <div className="mb-8">
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b-2 pb-3 focus:outline-none w-full placeholder:text-[#6c7275]"
                />
              </div>
              <div className="flex gap-2 md:gap-3 mb-8">
                <input
                  type="checkbox"
                  className="w-5 border-2 border-[#6c7275] cursor-pointer"
                />
                <p className="text-xs lg:text-base text-[#6c7275]">
                  I agree with
                  <span className="text-black font-semibold mr-1 ml-1">
                    Privacy Policy
                  </span>
                  and
                  <span className="text-black font-semibold ml-1">
                    Terms of Use
                  </span>
                </p>
              </div>

              {/* btn submit */}
              <div className="w-full bg-black text-white p-4 justify-center items-center text-center rounded-xl hover:cursor-pointer">
                <button className="">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
