import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../api";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain, isLoading, setIsLoading } =
    useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/captains/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.user);
        localStorage.setItem("token", data.token);
        toast.success("Login successful!");
        navigate("/captain-home");
      }else{
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to register. Please try again."
      );
    } finally {
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-[150px] mb-10" src={logo} alt="logo" />
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">Captain Email</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button
            disabled={isLoading}
            className={`bg-[#111111] text-[#fff] font-semibold rounded mb-7 px-4 py-2 w-full text-lg ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center">
          Don't have a Captain account?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Create one
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/user-login"
          className="bg-[#e7c006] hover:bg-[#bd9e0c] flex items-center justify-center text-[#fff] font-semibold rounded mb-7 px-4 py-2 w-full text-lg"
        >
          Sign In as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
