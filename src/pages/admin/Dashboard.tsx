import TopBar from "../../components/TopBar";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-[#f5f6fa]">
      <TopBar />
      <div className="px-5 py-2">
        <p className="text-[32px] font-semibold mb-4">Dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
