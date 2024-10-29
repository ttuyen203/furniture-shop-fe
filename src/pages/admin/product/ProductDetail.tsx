import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../config";
import TopBar from "../../../components/TopBar";
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
        <h2 className="text-[32px] font-semibold mb-4">Detail Product</h2>
        {product ? (
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <div className="w-full md:w-1/3 px-4">
              <img
                src={product.images[0]}
                alt=""
                className="w-96 h-96 object-cover rounded-lg shadow-md mb-4"
                id="mainImage"
              />

              <div className="flex gap-4 py-4 overflow-x-auto">
                {product?.images?.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt=""
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => {
                      const mainImage = document.getElementById(
                        "mainImage"
                      ) as HTMLImageElement;
                      if (mainImage) {
                        mainImage.src = src;
                      }
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-2/3 md:pl-8">
              <h2 className="text-3xl font-bold mb-2">{product?.name}</h2>
              <p className="text-gray-600 mb-4">
                Category: {product?.category?.name}
              </p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">
                  $ {product?.price}
                </span>
              </div>

              {/* Mô tả */}
              <p className="text-gray-700 mb-6 w-2/3 text-justify">
                {product.desc}
              </p>

              <div className="mb-6">
                <div className="text-sm font-medium text-gray-700 mb-1">
                  Status:
                  {product.status ? (
                    <span className="bg-green-200 text-green-600 px-2 py-0.5 rounded-sm ml-2">
                      Available
                    </span>
                  ) : (
                    <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-sm ml-2">
                      Out of stock
                    </span>
                  )}
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <Link to={`/admin/products/${product.slug}/update`}>
                  <div className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                    Update
                  </div>
                </Link>

                <div onClick={() => handleDelete(product.slug)}>
                  <div className="bg-red-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-red-700 cursor-pointer">
                    Delete
                  </div>
                </div>

                <Link to={`/admin/products`}>
                  <div className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
                    Back
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
