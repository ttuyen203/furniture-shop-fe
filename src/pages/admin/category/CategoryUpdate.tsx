import { useForm } from "react-hook-form";
import { Category } from "../../../types/Category";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import BASE_URL from "../../../config";
import axios from "axios";
import toast from "react-hot-toast";
import TopBar from "../../../components/TopBar";
import { useLoading } from "../../../context/LoadingContext";
import Loading from "../../../components/Loading";

const CategoryUpdate = () => {
  const { slug } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Category>();

  const navigate = useNavigate();

  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(BASE_URL + "/categories/" + slug)
      .then((res) => {
        //   console.log("Data", res);
        setValue("name", res.data.data.name);
        setValue("status", res.data.data.status);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setValue, slug, setIsLoading]);

  const onsubmit = (data: Category) => {
    setIsLoading(true);
    axios
      .put(BASE_URL + "/categories/" + slug, data)
      .then(() => {
        toast.success("Update successfully!");
        navigate("/admin/categories");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="w-full min-h-screen bg-[#f5f6fa]">
        <TopBar />
        <div className="px-5 py-2 ">
          <h2 className="text-[32px] font-semibold mb-4">Update category</h2>
          <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
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
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-gray-500"
                } rounded-md shadow-sm focus:outline-none`}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                })}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

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
                to="/admin/categories"
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-300 "
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

export default CategoryUpdate;
