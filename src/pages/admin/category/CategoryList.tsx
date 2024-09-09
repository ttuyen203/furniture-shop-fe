import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiResCate, Category } from "../../../types/Category";
import axios from "axios";
import BASE_URL from "../../../config";
import toast from "react-hot-toast";
import TopBar from "../../../components/TopBar";
import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const CategoryList = () => {
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    axios.get<ApiResCate>(BASE_URL + "/categories").then((res) => {
      setData(res.data.data);
      // console.log(res.data.data);
    });
  }, []);

  const handleDelete = (categoryId: string) => {
    toast(
      (t) => (
        <div className="p-2 w-full">
          <p className="text-lg">
            Are you sure you want to delete this item🤔?
          </p>
          <div className="flex justify-end gap-3 mt-4">
            <button
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              onClick={() => {
                axios
                  .delete(`${BASE_URL}/categories/${categoryId}`)
                  .then(() => {
                    toast.success("Category deleted successfully!");
                    setData((prevData) =>
                      prevData.filter((item) => item._id !== categoryId)
                    );
                  })
                  .catch(() => toast.error("Failed to delete category"))
                  .finally(() => toast.dismiss(t.id));
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  };

  return (
    <div className="sm:ml-64 w-full min-h-screen bg-[#f5f6fa]">
      <TopBar />
      <div className="px-5 py-2">
        <div className="flex items-center justify-between">
          <p className="text-[32px] font-semibold mb-4">Categories</p>
          <Link to={"/admin/categories/add"}>
            <div className="bg-green-200 text-green-800 px-6 py-2 rounded-md text-xs font-semibold hover:bg-green-300 transition">
              Add +
            </div>
          </Link>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#d5d5d5]">
          <table className="min-w-full bg-white">
            <thead className="border-b border-[#d5d5d5] text-left text-xs font-semibold text-[#202224] uppercase tracking-wider">
              <tr>
                <th className="hidden lg:block py-3 px-6">ID</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr
                  className="bg-white border-b border-[#d5d5d5] hover:bg-gray-50 transition"
                  key={d._id}
                >
                  <td className="hidden lg:block py-4 px-6 text-sm font-medium text-[#202224]">
                    {d._id}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-[#202224]">
                    <Link to={"/"} className="hover:underline">
                      {d.name}
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-sm">
                    {d.status ? (
                      <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-green-100 text-green-800">
                        View
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-gray-100 text-gray-700">
                        Hide
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-sm flex items-center gap-1.5 lg:gap-3">
                    <Link to={"/"}>
                      <div className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-lg text-xs lg:text-base font-semibold hover:bg-yellow-300 transition">
                        <FaEye />
                      </div>
                    </Link>
                    <Link to={`/admin/categories/${d.slug}/update`}>
                      <div className="bg-blue-200 text-blue-800 px-3 py-1 rounded-lg text-xs lg:text-base font-semibold hover:bg-blue-300 transition">
                        <FaPenToSquare />
                      </div>
                    </Link>
                    <div
                      className="bg-red-200 text-red-800 px-3 py-1 rounded-lg cursor-pointer text-xs lg:text-base font-semibold hover:bg-red-300 transition"
                      onClick={() => handleDelete(d._id)}
                    >
                      <FaRegTrashCan />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
