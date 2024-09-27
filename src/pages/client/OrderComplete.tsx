import { Link, useLocation } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import Loading from "../../components/Loading";

const OrderComplete = () => {
  const location = useLocation();
  const orderData = location.state?.orderData || [];
  console.log(orderData);

  const { isLoading, setIsLoading } = useLoading();

  if (!orderData) {
    setIsLoading(true);
  } else {
    setIsLoading(false);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex justify-center">
        <p className="text-[40px] lg:text-[54px] font-medium mt-5">Complete!</p>
      </div>

      <div className="flex justify-center mt-5 mb-5 lg:mb-16">
        <div className="w-4/5 lg:w-3/5 flex justify-between">
          <div className="hidden lg:flex gap-3 items-center border-b-2 border-[#38CB89] pb-5">
            <p className="flex items-center justify-center bg-[#38CB89] text-white w-10 h-10 text-center rounded-full">
              ✔
            </p>
            <p className="font-semibold text-[#38CB89]">Shopping cart</p>
          </div>
          <div className="hidden lg:flex gap-3 items-center border-b-2 border-[#38CB89] pb-5">
            <p className="flex items-center justify-center bg-[#38CB89] text-white w-10 h-10 text-center rounded-full py-2 px-4">
              ✔
            </p>
            <p className="font-semibold text-[#38CB89]">Checkout details</p>
          </div>
          <div className="flex gap-3 items-center border-b-2 border-black pb-5">
            <p className="flex items-center justify-center bg-black text-[#FCFCFD] w-10 h-10 text-center rounded-full py-2 px-4">
              3
            </p>
            <p className="font-semibold">Order complete</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-10 lg:mb-16">
        <div className="w-4/5 lg:w-2/5 shadow-xl py-6 lg:py-16 rounded-xl">
          <div className="w-full lg:text-center">
            <p className="text-lg lg:text-2xl font-medium text-gray-600 px-8">
              Thank you!🎉
            </p>
            <p className="text-2xl lg:text-3xl font-medium text-gray-900 mt-2 px-8">
              Your order has been received
            </p>

            <div className="flex justify-center mt-5">
              <div className="w-2/3">
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 lg:justify-between mt-3 border-b lg:border-b-0 pb-2 lg:pb-0">
                  <p className="text-sm font-semibold text-[#6C7275]">
                    Order code:
                  </p>
                  <p className="text-sm font-semibold">{orderData.data._id}</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 lg:justify-between mt-3 border-b lg:border-b-0 pb-2 lg:pb-0">
                  <p className="text-sm font-semibold text-[#6C7275]">Date:</p>
                  <p className="text-sm font-semibold">
                    {orderData.data.createdAt.split("T")[0]}
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 lg:justify-between mt-3 border-b lg:border-b-0 pb-2 lg:pb-0">
                  <p className="text-sm font-semibold text-[#6C7275]">Total:</p>
                  <p className="text-sm font-semibold">
                    ${orderData.data.totalAmount}
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 lg:justify-between mt-3 border-b lg:border-b-0 pb-2 lg:pb-0">
                  <p className="text-sm font-semibold text-[#6C7275]">
                    Payment method:
                  </p>
                  <p className="text-sm font-semibold">
                    {orderData.data.payment}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-3/5">
                <Link to={"/account/orders"}>
                  <p className="bg-black font-medium text-white p-3 rounded-3xl text-center mt-10">
                    Purchase history
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComplete;
