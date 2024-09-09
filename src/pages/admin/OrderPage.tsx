import TopBar from "../../components/TopBar";

const OrderPage = () => {
  return (
    <div className="sm:ml-64 w-full min-h-screen bg-[#f5f6fa]">
      <TopBar />
      <div className="px-5 py-2">
        <p className="text-[32px] font-semibold mb-4">Order Lists</p>
      </div>
    </div>
  );
};

export default OrderPage;