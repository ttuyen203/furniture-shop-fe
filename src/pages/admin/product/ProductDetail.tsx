import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../config";
import TopBar from "../../../components/TopBar";
import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { Product } from "../../../types/Product";
import toast from "react-hot-toast";
import { useLoading } from "../../../context/LoadingContext";
import Loading from "../../../components/Loading";

const ProductDetail = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  const { isLoading, setIsLoading } = useLoading();

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/products/${slug}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((error) => console.error("Failed to fetch product:", error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [slug, setIsLoading]);

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
                    navigate("/admin/products");
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
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl font-semibold mb-6">Product Details</h1>
          {product && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-5">
                  <h3 className="text-xl font-semibold">Name:</h3>
                  <p className="text-lg">{product.name}</p>
                </div>
                <div className="flex items-center gap-5">
                  <h3 className="text-xl font-semibold">Price:</h3>
                  <p className="text-lg">${product.price}</p>
                </div>
                <div className="flex items-center gap-5">
                  <h3 className="text-xl font-semibold">Stock:</h3>
                  <p className="text-lg">{product.stock}</p>
                </div>
                <div className="flex items-center gap-5">
                  <h3 className="text-xl font-semibold">Category:</h3>
                  <p className="text-lg">{product.category?.name}</p>
                </div>
                <div className="flex items-center gap-5">
                  <h3 className="text-xl font-semibold">Status:</h3>
                  {product.status ? (
                    <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-green-100 text-green-800">
                      Available
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-gray-100 text-gray-700">
                      Out of Stock
                    </span>
                  )}
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleDelete(product.slug)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition"
                  >
                    <FaRegTrashCan className="inline-block mr-2" />
                    Delete
                  </button>
                  <Link
                    to={`/admin/products/${product.slug}/update`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition"
                  >
                    <FaPenToSquare className="inline-block mr-2" />
                    Edit
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-justify">
                    Description:
                  </h3>
                  <p>{product.desc}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Image:</h3>
                  {product.images ? (
                    <img
                      src={product.images}
                      alt="Product"
                      className="w-48 h-48 object-cover"
                    />
                  ) : (
                    <p className="text-gray-500">No image</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-5 flex justify-between items-center">
          <Link to="/admin/products">
            <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black border border-black transition-all duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
