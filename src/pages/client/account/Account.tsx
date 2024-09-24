import { useEffect } from "react";
import NavAccount from "../../../components/NavAccount";
import axios from "axios";
import BASE_URL from "../../../config";
import { useForm } from "react-hook-form";
import { User } from "../../../types/User";
import toast from "react-hot-toast";

const Account = () => {
  const userId = localStorage.getItem("userId");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<User>();

  useEffect(() => {
    axios
      .get(BASE_URL + `/users/${userId}`)
      .then((res) => {
        console.log(res.data);
        setValue("username", res.data.data.username);
        setValue("email", res.data.data.email);
        setValue("phone", res.data.data.phone);
        setValue("address", res.data.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId, setValue]);

  const onsubmit = (data: User) => {
    axios
      .put(BASE_URL + `/users/${userId}`, data)
      .then((res) => {
        console.log(res);
        toast.success("Saved!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex justify-center">
        <p className="text-[40px] lg:text-[54px] font-medium mt-5">
          My Account
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-4/5 mt-10 mb-10 flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left */}
          <NavAccount />

          {/* Right */}
          <div className="w-full lg:w-4/6">
            {/* Account Details */}
            <div>
              <p className="text-xl font-semibold">Account Details</p>
              <form onSubmit={handleSubmit(onsubmit)}>
                <div className="w-full mt-5">
                  <label
                    htmlFor=""
                    className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                  >
                    Username *
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className={`border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full focus:outline-none ${
                      errors.username ? "border-red-500" : ""
                    }`}
                    {...register("username", {
                      required: "Username is required",
                      minLength: {
                        value: 3,
                        message: "Username must be at least 3 characters long",
                      },
                    })}
                  />
                  {errors.username && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.username.message}
                    </p>
                  )}
                </div>
                <div className="w-full mt-5">
                  <label
                    htmlFor=""
                    className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                  >
                    Email *
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className={`border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full focus:outline-none ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                <div className="w-full mt-5">
                  <label
                    htmlFor=""
                    className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full focus:outline-none"
                    {...register("phone")}
                  />
                </div>
                <div className="w-full mt-5">
                  <label
                    htmlFor=""
                    className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                  >
                    Address *
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full focus:outline-none"
                    {...register("address")}
                  />
                </div>
                <div className="mt-5">
                  <button className="bg-black text-white px-8 py-2 rounded-md">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
            {/* Password */}
            {/* <div className="mt-10">
              <p className="text-xl font-semibold">Password</p>
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  Old password
                </label>
                <input
                  type="text"
                  placeholder="Old password"
                  className="border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  New password
                </label>
                <input
                  type="text"
                  placeholder="New password"
                  className="border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
              <div className="w-full mt-5">
                <label
                  htmlFor=""
                  className="block text-xs font-bold text-[#6C7275] mb-2 uppercase"
                >
                  Repeat new password
                </label>
                <input
                  type="text"
                  placeholder="Repeat new password"
                  className="border placeholder:text-[#6C7275] py-1 px-3 rounded-md border-[#CBCBCB] w-full"
                />
              </div>
              
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
