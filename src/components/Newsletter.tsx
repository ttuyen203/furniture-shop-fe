import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <>
      <div className="w-full bg-[#f2f4f6] mt-9 lg:relative">
        <img
          src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723745447/furniture-shop/banner3_uyclxq.png"
          alt=""
          className="w-full hidden lg:block"
        />
        <div className="lg:absolute inset-0 flex flex-col items-center justify-center text-center py-16 px-8 lg:py-0 lg:px-0">
          <p className="font-medium text-[28px] lg:text-[40px] mb-2">
            Join Our Newsletter
          </p>
          <p className="font-normal text-sm lg:text-lg">
            Sign up for deals, new products and promotions
          </p>
          <form className="w-full max-w-md mx-auto mt-6 bg-transparent p-4 border border-gray-300 rounded-md">
            <div className="flex flex-col items-center">
              <div className="relative w-full border-b border-gray-300 mb-4">
                <div className="flex items-center gap-1">
                  <MdOutlineEmail size={18} />
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-full placeholder:text-[#6c7275] border-none focus:outline-none bg-transparent"
                  />
                </div>
                <button className="absolute right-0 top-0 bg-transparent border-none text-[#6c7275] ">
                  Signup
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
