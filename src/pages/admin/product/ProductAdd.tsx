import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TopBar from "../../../components/TopBar";
import { Product } from "../../../types/Product";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../config";
import toast from "react-hot-toast";
import { Category } from "../../../types/Category";
import { FaRegImage, FaTimes } from "react-icons/fa";

const ProductAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const [categories, setCategories] = useState<Category[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageName, setImageName] = useState<string>("");
  
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/categories`)
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch categories.");
      });
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImageFile(file);
      setImageName(file.name);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImageName("");
  };

  const onSubmit = async (data: Product) => {
    try {
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "furniture-shop");

        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/dymajn3ys/image/upload`,
          formData
        );

        data.images = res.data.secure_url;
      }

      await axios.post(BASE_URL + "/products", data);
      toast.success("Product added successfully!");
      navigate("/admin/products");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data?.message || "Create product failed");
      } else {
        toast.error("Create product failed");
      }
    }
  };

  return (
    <>
      <div className="sm:ml-64 w-full min-h-screen bg-[#f5f6fa]">
        <TopBar />
        <div className="px-5 py-2">
          <h2 className="text-[32px] font-semibold mb-4">Add Product</h2>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none`}
                {...register("name", {
                  required: "Name is required",
                  minLength: 3,
                })}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.price ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none`}
                {...register("price", {
                  required: "Price is required",
                  min: 0,
                })}
              />
              {errors.price && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Stock */}
            <div>
              <label
                htmlFor="stock"
                className="text-sm font-medium text-gray-700"
              >
                Stock
              </label>
              <input
                type="number"
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.stock ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none`}
                {...register("stock", {
                  required: "Stock is required",
                  min: 0,
                })}
              />
              {errors.stock && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.stock.message}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.category ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none`}
                {...register("category", { required: "Category is required" })}
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Image */}
            <div>
              <label
                htmlFor="image"
                className="text-sm font-medium text-gray-700"
              >
                <div className="px-4 py-4 text-center border-2 border-gray-400 border-dashed bg-white w-full lg:w-2/5 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <FaRegImage size={50} className="mb-3" />
                    <p>Drop your image here, or browse</p>
                    <p>Jpeg, png are allowed</p>
                  </div>
                </div>
              </label>
              <input
                type="file"
                id="image"
                className="hidden mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imageName && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700">
                    Selected Image:
                  </h3>
                  <div className="flex items-center gap-2">
                    <span>{imageName}</span>
                    <button
                      type="button"
                      className="text-red-600 hover:text-red-800"
                      onClick={handleRemoveImage}
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="desc"
                className="text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none"
                {...register("desc")}
              />
            </div>

            {/* Status */}
            <div>
              <div className="flex items-center">
                <label
                  htmlFor="status"
                  className="text-sm font-medium text-gray-700"
                >
                  Active
                </label>
                <input
                  type="checkbox"
                  className="ml-2 w-4 h-4"
                  {...register("status")}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Link
                to="/admin/products"
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-300"
              >
                Back
              </Link>

              <button
                type="submit"
                className="bg-green-200 text-green-800 px-6 py-2 rounded-md text-sm font-semibold hover:bg-green-300 transition"
              >
                Add +
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
