import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../config";
import toast from "react-hot-toast";
import TopBar from "../../../components/TopBar";
import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { ApiResProduct, Product } from "../../../types/Product";
import { useLoading } from "../../../context/LoadingContext";
import Loading from "../../../components/Loading";

const ProductList = () => {
  const [data, setData] = useState<Product[]>([]);

  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<ApiResProduct>(BASE_URL + "/products")
      .then((res) => {
        setData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading]);

  if (isLoading) {
    return <Loading />;
  }

  const handleDelete = (productSlug: string) => {
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
                  .delete(`${BASE_URL}/products/${productSlug}`)
                  .then(() => {
                    toast.success("Product deleted successfully!");
                    axios
                      .get<ApiResProduct>(BASE_URL + "/products")
                      .then((res) => {
                        setData(res.data.data);
                        console.log(res.data.data);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  })
                  .catch(() => toast.error("Failed to delete product"))
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
    <div className="w-full min-h-screen bg-[#f5f6fa]">
      <TopBar />
      <div className="px-5 py-2">
        <div className="flex items-center justify-between">
          <p className="text-[32px] font-semibold mb-4">Products</p>
          <Link to={"/admin/products/add"}>
            <div className="bg-green-200 text-green-800 px-6 py-2 rounded-md text-xs font-semibold hover:bg-green-300 transition">
              Add +
            </div>
          </Link>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#d5d5d5]">
          <table className="min-w-full bg-white">
            <thead className="border-b border-[#d5d5d5] text-left text-xs font-semibold text-[#202224] uppercase tracking-wider">
              <tr>
                <th className="hidden lg:table-cell py-3 px-4 lg:px-6">STT</th>
                <th className="py-3 px-4 lg:px-6">Product</th>
                <th className="py-3 px-4 lg:px-6">Price</th>
                <th className="py-3 px-4 lg:px-6">Stock</th>
                <th className="hidden lg:table-cell py-3 px-4 lg:px-6">
                  Category
                </th>
                <th className="hidden lg:table-cell py-3 px-4 lg:px-6">
                  Status
                </th>
                <th className="py-3 px-4 lg:px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, index) => (
                <tr
                  className="bg-white border-b border-[#d5d5d5] hover:bg-gray-50 transition"
                  key={d._id}
                >
                  <td className="hidden lg:table-cell">
                    <div className="py-3 px-4 lg:px-6 text-sm font-medium text-[#202224]">
                      {index + 1}
                    </div>
                  </td>
                  <td className="py-3 px-4 lg:px-6 text-sm font-medium text-[#202224] break-words">
                    <Link
                      to={`/admin/products/${d.slug}`}
                      className="hover:underline"
                    >
                      <div className="flex items-center gap-2 lg:gap-4">
                        <img
                          src={d.images[0]}
                          alt={d.name}
                          className="w-16 h-20 lg:w-20 lg:h-25 object-cover"
                        />
                        <span className="hidden lg:block">{d.name}</span>
                      </div>
                    </Link>
                  </td>
                  <td className="py-3 px-4 lg:px-6 text-sm">${d.price}</td>
                  <td className="py-3 px-4 lg:px-6 text-sm">{d.stock}</td>
                  <td className="hidden lg:table-cell py-3 px-4 lg:px-6 text-sm">
                    {d.category?.name}
                  </td>
                  <td className="hidden lg:table-cell py-3 px-4 lg:px-6 text-sm">
                    {d.status ? (
                      <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-green-100 text-green-800">
                        Available
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-gray-100 text-gray-700">
                        Out of Stock
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 lg:px-6">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <Link to={`/admin/products/${d.slug}`}>
                        <div className="hidden lg:block bg-yellow-200 text-yellow-800 px-2 py-1 rounded-lg text-xs lg:text-sm font-semibold hover:bg-yellow-300 transition">
                          <FaEye />
                        </div>
                      </Link>
                      <Link to={`/admin/products/${d.slug}/update`}>
                        <div className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg text-xs lg:text-sm font-semibold hover:bg-blue-300 transition">
                          <FaPenToSquare />
                        </div>
                      </Link>
                      <div
                        className="bg-red-200 text-red-800 px-2 py-1 rounded-lg cursor-pointer text-xs lg:text-sm font-semibold hover:bg-red-300 transition"
                        onClick={() => handleDelete(d.slug)}
                      >
                        <FaRegTrashCan />
                      </div>
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

export default ProductList;
