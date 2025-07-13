import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ApiService from "../service/ApiService";

const Login = () => {
  const { login } = useContext(StoreContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const reset = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      setLoading(true);
      const token = await ApiService.loginUser(formData);
      login(token);
      toast.success("Login successful");
      reset();
      navigate("/");
    } catch (error) {
      toast.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8D442] w-full h-full flex justify-center mx-auto">
      <div className="mt-25 w-auto mb-5 sm:w-[475px] h-auto bg-white border-none rounded-md shadow-md">
        <h1 className="text-center text-2xl font-bold mt-6">
          Login your account
        </h1>
        <p className="text-center text-base font-semibold mt-2 text-gray-900">
          fill below fields to login
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-md mx-auto p-4 bg-white"
        >
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

          <button
            type="submit"
            className="mt-5 bg-[#FEAF00] text-white w-full max-w-md mx-auto py-2 px-2 rounded-md cursor-pointer flex items-center justify-center"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="text-center text-base font-semibold mt-4 text-gray-900">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-[#FEAF00]">
              Register Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
