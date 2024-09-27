import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavAccount from "../../../components/NavAccount";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config";
import { User } from "../../../types/User";
import { useLoading } from "../../../context/LoadingContext";
import Loading from "../../../components/Loading";

const AccountAddress = () => {
  const userId = localStorage.getItem("userId");

  const [userData, setUserData] = useState<User>();

  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(BASE_URL + `/users/${userId}`)
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId, setIsLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex justify-center">
        <p className="text-[40px] lg:text-[54px] font-medium mt-5">
          My Account
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-4/5 mt-10 mb-10 flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left */}
          <NavAccount />

          {/* Right */}
          <div className="w-full lg:w-4/6">
            {/* Address */}
            <div>
              <p className="text-xl font-semibold">Address</p>
              <div className="flex lg:flex-wrap flex-col lg:flex-row mt-3 gap-5">
                <div className="w-full lg:w-[45%]">
                  <div className="border border-[#6c7275] rounded-md p-3">
                    <div className="flex justify-between">
                      <p className="font-semibold">Billing Address</p>
                      <Link to={"/account"}>
                        <div className="flex gap-1 text-[#6C7275] items-center">
                          <FiEdit3 />
                          <p>Edit</p>
                        </div>
                      </Link>
                    </div>
                    <div className="text-sm font-normal mt-3">
                      <p>{userData?.username}</p>
                    </div>
                    <div
                      className={`text-sm font-normal mt-2 tracking-wide ${
                        userData?.phone ? "" : "text-gray-500"
                      }`}
                    >
                      <p>
                        {userData?.phone ? userData?.phone : "*Phone not added"}
                      </p>
                    </div>
                    <div
                      className={`text-sm font-normal mt-2 ${
                        userData?.address ? "" : "text-gray-500"
                      }`}
                    >
                      <p>
                        {userData?.address
                          ? userData?.address
                          : "*Address not added"}
                      </p>
                    </div>
                    {(!userData?.phone || !userData?.address) && (
                      <Link to={"/account"}>
                        <div className="text-sm mt-2 font-semibold hover:underline">
                          <p>Add your phone and address now!</p>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountAddress;
