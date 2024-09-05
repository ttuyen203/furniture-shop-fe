import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
