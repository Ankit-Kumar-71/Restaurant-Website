import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiService from "../service/ApiService";

const Signup = () => {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const reset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "",
    });
    setImage(null);
    setImagePreview(null);
  };

  // Image input change handler
  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);

      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }

      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Form input change handler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select a profile image.");
      return;
    }
    const data = new FormData();
    data.append("role", formData.role);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("image", image);
    const response = await ApiService.registerUser(data);
    toast.success(response);
    reset();
    navigate("/login");
  };

  return (
    <div className="bg-[#f8D442] w-full h-full  flex justify-center mx-auto">
      <div className="mt-20 w-auto mb-5 sm:w-[475px] h-auto bg-white border-none rounded-md shadow-md">
        <h1 className="text-center text-2xl font-bold mt-6">
          Create your account
        </h1>
        <p className="text-center text-base font-semibold mt-2 text-gray-900">
          fill below fields to signup
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-md mx-auto p-4 bg-white"
        >
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="firstName">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={onChangeHandler}
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
            >
              <option value="">Select Role</option>
              <option value="ROLE_USER">ROLE_USER</option>
              <option value="ROLE_ADMIN">ROLE_ADMIN</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="Name">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={formData.firstName}
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={onChangeHandler}
              value={formData.email}
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={onChangeHandler}
              value={formData.password}
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="profile">Profile Image</label>
            <div
              className="relative flex items-center justify-center border
            border-dashed border-gray-400 rounded-md p-6 cursor-pointer overflow-hidden
            w-full h-40  "
            >
              <input
                onChange={onImageChange}
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Uploaded Preview"
                  className="w-full h-full inset-0 absolute object-cover rounded-md"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 bg-[#FEAF00] text-white w-full max-w-md mx-auto py-2 px-2 rounded-md cursor-pointer flex items-center justify-center"
          >
            Signup
          </button>
          <p className="text-center text-base font-semibold mt-4 text-gray-900">
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#FEAF00]">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
