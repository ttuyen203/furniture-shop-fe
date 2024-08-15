import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <>
      <div className="w-full mt-9 relative">
        <img
          src="https://res.cloudinary.com/dymajn3ys/image/upload/v1723745447/furniture-shop/banner3_uyclxq.png"
          alt=""
          className="w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-medium text-4xl mb-2">Join Our Newsletter</p>
          <p className="font-normal text-xl">
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
                <button className="absolute right-0 top-0 bg-transparent border-none text-[#6c7275] px-4">
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
