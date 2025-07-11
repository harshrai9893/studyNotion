import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const[accountType, setAccountType] = useState("student");

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    console.log("printing account data");
    console.log(accountData);

    navigate("/dashboard"); 
  }

  return (
    <div className='flex flex-col w-full  gap-y-4 mt-6 '>
      {/* student-- instructor tab */}
      <div className="flex  rounded-full text-gray-200 p-1 gap-x-1  max-w-max bg-gray-800  ">
        <button onClick={()=>setAccountType("student")} 
         className = { `${ accountType === "student" 
           ?
         (" bg-gray-900 text-gray-100 ")
         : ("bg-transparent text-gray-200") } py-2 px-5 rounded-full transition-all duration-200` } 
         > Student
         </button>
        <button onClick={()=>setAccountType("instructor")}
        className ={ `${ accountType === "instructor" 
           ?
         " bg-gray-900 text-gray-100 "
         : "bg-transparent text-gray-200" } py-2 px-5 rounded-full transition-all duration-200` } >Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* firstname and lastname */}
        <div className="flex gap-x-4 mt-[10px]">
          <label className="w-full relative">
            <p className="text-[0.875rem ] text-gray-100 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
            />
          </label>

          <label className="relative w-full">
            <p className="text-[0.875rem ] text-gray-100 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.lastName}
              className="bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
            />
          </label>
        </div>

        {/* email address */}
        <div className="mt-[10px]">
        <label >
          <p className="text-[0.875rem ] text-gray-100 mb-1 leading-[1.375rem]">
            Email Address<sup className="text-pink-400">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Your Email Address"
            value={formData.email}
            className="bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
          />
        </label>
        </div>

        {/* create password and confirm password */}
        <div className="flex gap-x-4  mt-[10px] ">
          <label className="relative w-full">
            <p className="text-[0.875rem ] text-gray-100 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-400">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Your Password"
              value={formData.password}
              className="bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer "
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaEyeSlash fontSize={24} fill="#AFB2BF" />
              ) : (
                <FaEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative w-full ">
            <p className="text-[0.875rem ] text-gray-100 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-400">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer "
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaEyeSlash fontSize={24} fill="#AFB2BF" />
              ) : (
                <FaEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="w-full bg-yellow-400 text-gray-900 rounded-[8px] py-[8px] px-[12px] font-medium mt-5">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
