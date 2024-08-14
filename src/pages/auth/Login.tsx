import { Link } from "react-router-dom";
import register_img from "../../assets/register_image.png";

const Login = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        {/* Left page */}
        <div className="w-full md:w-1/2 bg-[#F3F5F7] p-4 md:h-screen">
          <div className="justify-center items-center bg-[#F3F5F7]">
            {/* logo */}
            <p className="text-center font-semibold text-2xl">3legant.</p>
            <div className="flex justify-center items-center">
              <img src={register_img} alt="register" />
            </div>
          </div>
        </div>
        {/* Right page */}
        <div className="w-full md:p-3 md:w-1/2">
          <div className="p-10 md:p-20 w-full">
            <h3 className="text-4xl font-semibold mb-6">Sign In</h3>
            <p className="text-[#6c7275] mb-6">
              Don’t have an accout yet?{" "}
              <Link to={"/register"} className="text-[#38cb89] hover:underline">
                {" "}
                Sign Up
              </Link>
            </p>
            <form action="">
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Your usernam or email address"
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
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2 ">
                  <input
                    type="checkbox"
                    className="w-3 md:w-5 border-2 border-[#6c7275] cursor-pointer"
                  />
                  <p className="text-[#6c7275]">Remember me</p>
                </div>
                <p className="cursor-pointer font-semibold hover:underline">
                  Forgot password?
                </p>
              </div>

              {/* btn submit */}
              <div className="w-full bg-black text-white p-4 justify-center items-center text-center rounded-xl hover:cursor-pointer">
                <button className="">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
