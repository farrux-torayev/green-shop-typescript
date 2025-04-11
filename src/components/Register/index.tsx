import axios from "axios";
import React from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterForm = ({ setUser, onClose }) => {
  const [isPassword, setIsPassword] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmed_password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const token = "64bebc1e2c6d3f056a8c85b7";
      const api = import.meta.env.VITE_API;

      const res = await axios.post(
        `${api}/user/sign-up?access_token=${token}`,
        {
          name: formData.name.trim(),
          surname: formData.surname.trim(),
          email: formData.email.trim(),
          password: formData.password.trim(),
          confirmed_password: formData.confirmed_password.trim(),
        }
      );

      if (res.data && res.data.data && res.data.data.user) {
        const userData = res.data.data.user;

        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData);
        setSuccessMessage("Muvaffaqiyatli ro‘yxatdan o‘tdingiz!");
        navigate("/");
        onClose();
      } else {
        setErrorMessage("Ro‘yxatdan o‘tishda xatolik yuz berdi.");
      }
    } catch (error) {
      console.error(
        "Ro‘yxatdan o‘tishda xatolik:",
        error.response?.data || error.message
      );
      setErrorMessage(
        error.response?.data?.message || "Ro‘yxatdan o‘tishda xatolik!"
      );
    }
  };
  return (
    <div className="flex w-[472px] h-[630px] flex-col items-center">
      <div className="absolute text-center">
        <h3 className="text-sm mr-[100px]  mt-8 font-normal">
          Enter your username and password to login.
        </h3>
        {errorMessage && (
          <p className="text-red-600 relative text-center top-[-50px]">
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="text-green-600 text-center relative top-[-50px]">
            {successMessage}
          </p>
        )}
      </div>

      <input
        type="text"
        name="name"
        placeholder="Ismingiz"
        onChange={handleChange}
        id="name"
        className="pl-[15px] w-[377px] relative top-[50px]  h-[40px] mt-[14px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />
      <input
        type="text"
        name="surname"
        placeholder="Familiyangiz"
        onChange={handleChange}
        id="username"
        className="pl-[15px] w-[377px]  relative top-[50px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        id="email"
        className="pl-[15px] w-[377px] relative top-[50px]  h-[40px] mt-[25px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />
      <input
        type={isPassword ? "password" : "text"}
        name="password"
        onChange={handleChange}
        placeholder="*********"
        id="password"
        aria-required="true"
        className="pl-[15px] w-[377px]  relative top-[50px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />
      <button
        type="button"
        className="absolute right-[87px] cursor-pointer top-[358px] transform -translate-y-1/2"
        onClick={() => setIsPassword(!isPassword)}
      >
        {isPassword ? <FaRegEye /> : <FaRegEyeSlash />}
      </button>
      <input
        type={isPassword ? "password" : "text"}
        name="confirmed_password"
        placeholder="Parolni tasdiqlang"
        onChange={handleChange}
        id="confirm your password"
        className="pl-[15px] w-[377px] relative top-[50px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />
      <button
        type="button"
        className="absolute right-[88px] cursor-pointer top-[394px] transform -translate-y-1/2"
        onClick={() => setIsPassword(!isPassword)}
      >
        {/* {isPassword ? <FaRegEye /> : <FaRegEyeSlash />} */}
      </button>
      <button
        onClick={handleRegister}
        className="w-[377px] relative top-[50px]  mt-[25px] cursor-pointer hover:bg-green-600 bg-green-500 text-white p-2 rounded"
      >
        Register
      </button>
      <div className="flex  items-center relative top-[50px]">
        <span className="border-t-[1px] w-[130px] mt-[5px]"></span>
        <p className="my-[16px] mx-[10px] ">Or login with</p>
        <span className="border-t-[1px] w-[130px]  mt-[5px]"></span>
      </div>
      <div className="w-[377px] relative top-[50px]">
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
          <span
            role="img"
            aria-label="facebook"
            className="anticon anticon-facebook pl-[15px]"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="facebook"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
            </svg>
          </span>
          Login with Facebook
        </button>
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md">
          <span
            role="img"
            aria-label="google"
            className="anticon anticon-google pl-[15px]"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="google"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"></path>
            </svg>
          </span>
          Login with Google
        </button>
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mt-[15px]">
          <span
            role="img"
            aria-label="scan"
            className="anticon anticon-scan pl-[15px]"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="scan"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M136 384h56c4.4 0 8-3.6 8-8V200h176c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-37.6 0-68 30.4-68 68v180c0 4.4 3.6 8 8 8zm512-184h176v176c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V196c0-37.6-30.4-68-68-68H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM376 824H200V648c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v180c0 37.6 30.4 68 68 68h180c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm512-184h-56c-4.4 0-8 3.6-8 8v176H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h180c37.6 0 68-30.4 68-68V648c0-4.4-3.6-8-8-8zm16-164H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </span>
          Login with Qr Code
        </button>
      </div>
    </div>
  );
};
export default RegisterForm;
