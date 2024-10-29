import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../config";
import toast from "react-hot-toast";
import { User } from "../../types/User";
import { useLoading } from "../../context/LoadingContext";
import Loading from "../../components/Loading";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const navigate = useNavigate();

  const { isLoading, setIsLoading } = useLoading();

  const onSubmit = (data: User) => {
    setIsLoading(true);
    axios
      .post(BASE_URL + `/auth/login`, data)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("userId", res.data.data._id);
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Login failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

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
                alt="login-banner"
              />
            </div>
          </div>
        </div>

        {/* Right page */}
        <div className="w-full md:p-3 md:w-1/2">
          <div className="p-10 md:p-20 w-full">
            <h3 className="text-4xl font-semibold mb-6">Login</h3>
            <p className="text-[#6c7275] mb-6">
              Don’t have an account yet?{" "}
              <Link to={"/register"} className="text-[#38cb89] hover:underline">
                Register
              </Link>
            </p>

            <div className="text-[#6c7275] mb-6 italic">
              <p>Mail: us1@gmail.com</p>
              <p>Pass: 123456</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <input
                  type="email"
                  placeholder="Email address"
                  className={`border-b-2 pb-3 focus:outline-none w-full placeholder:text-[#6c7275] ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-8">
                <input
                  type="password"
                  placeholder="Password"
                  className={`border-b-2 pb-3 focus:outline-none w-full placeholder:text-[#6c7275] ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
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
              <button
                type="submit"
                className="w-full bg-black text-white p-4 justify-center items-center text-center rounded-xl hover:cursor-pointer"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
