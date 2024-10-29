import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TopBar from "../../../components/TopBar";
import { Product } from "../../../types/Product";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../config";
import toast from "react-hot-toast";
import { Category } from "../../../types/Category";
import { FaRegImage, FaTimes } from "react-icons/fa";
import { useLoading } from "../../../context/LoadingContext";
import Loading from "../../../components/Loading";
import CLOUDINARY_URL from "../../../config/cloudinary_api";

const ProductUpdate = () => {
  const { slug } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Product>();

  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [imagesErr, setImagesErr] = useState(false);
  const [imagesUpload, setImagesUpload] = useState(false);

  const { isLoading, setIsLoading } = useLoading();

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

    axios.get(`${BASE_URL}/products/${slug}`).then((res) => {
      const product = res.data.data;
      setImages(product.images || []);
      setValue("name", product.name);
      setValue("price", product.price);
      setValue("desc", product.desc);
      setValue("stock", product.stock);
      setValue("category", product.category._id);
      setValue("status", product.status);
    });
  }, [setValue, slug]);

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "furniture-shop");

    const response = await axios.post(CLOUDINARY_URL, formData);
    return response.data.secure_url;
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setImagesUpload(true);

    const files = Array.from(e.target.files || []);

    const uploadedImages = await Promise.all(
      files.map((file) => uploadImage(file))
    );

    setImages((prevImages) => [...prevImages, ...uploadedImages]);
    setImagesUpload(false);
    setImagesErr(false);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: Product) => {
    setIsLoading(true);
    try {
      if (images.length === 0) {
        setImagesErr(true);
        // console.log(imagesErr);
        return;
      }

      const formData = {
        ...data,
        images,
      };

      await axios.put(BASE_URL + "/products/" + slug, formData);
      toast.success("Product updated successfully!");
      navigate("/admin/products");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data?.message || "Create product failed");
      } else {
        toast.error("Create product failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="w-full min-h-screen bg-[#f5f6fa]">
        <TopBar />
        <div className="px-5 py-2">
          <h2 className="text-[32px] font-semibold mb-4">Update Product</h2>
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
              <p className="text-sm font-medium text-gray-700">Ảnh món ăn:</p>
              <input
                type="file"
                id="images"
                className="hidden"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
              <div className="mt-2">
                {imagesUpload && (
                  <div className="w-52 my-2 px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">
                    Đang tải ảnh lên...
                  </div>
                )}

                {images.length === 0 ? (
                  <label htmlFor="images" className="cursor-pointer">
                    <div
                      className={`flex items-center justify-center w-24 h-24 border-2  ${
                        imagesErr ? "border-red-400" : "border-gray-400"
                      } border-dashed rounded bg-white`}
                    >
                      <FaRegImage
                        size={40}
                        className={imagesErr ? "text-red-600" : "text-gray-600"}
                      />
                    </div>
                  </label>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {images.map((url, index) => (
                      <div key={index} className="relative">
                        <img
                          src={url}
                          alt={`Uploaded ${index}`}
                          className="w-24 h-24 object-cover rounded"
                        />
                        <button
                          type="button"
                          className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1"
                          onClick={() => handleRemoveImage(index)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}

                    {/* Nút thêm hình ảnh */}
                    <label htmlFor="images" className="cursor-pointer">
                      <div
                        className={`flex items-center justify-center w-24 h-24 border-2  ${
                          imagesErr ? "border-red-400" : "border-gray-400"
                        } border-dashed rounded bg-white`}
                      >
                        <FaRegImage
                          size={40}
                          className={
                            imagesErr ? "text-red-600" : "text-gray-600"
                          }
                        />
                      </div>
                    </label>
                  </div>
                )}

                {imagesErr && (
                  <p className="mt-2 text-sm text-red-600">
                    {imagesErr ? "Vui lòng tải lên ít nhất 1 ảnh" : ""}
                  </p>
                )}
              </div>
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
                className="mt-1 block h-32 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none"
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
                className="bg-blue-200 text-blue-800 px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-300 transition"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductUpdate;
