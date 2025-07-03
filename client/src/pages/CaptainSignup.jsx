import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../api";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain, isLoading, setIsLoading } =
    useContext(CaptainDataContext);

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();
  

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicles: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/captains/register`,
        captainData
      );
      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.user);
        localStorage.setItem("token", data.token);
        toast.success("Registration successful!");
        navigate("/captain-home");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to register. Please try again."
      );
    } finally {
      setIsLoading(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity("");
      setVehicleType("");
    }
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-[150px] mb-10" src={logo} alt="logo" />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">
            What's captain name?
          </h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="first name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg plaseholder:text-base "
            />
            <input
              type="text"
              placeholder="Lsat name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg plaseholder:text-base "
            />
          </div>
          <h3 className="text-lg font-medium mb-2">
            What's captain email?
          </h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-full text-lg plaseholder:text-base "
          />
          <h3 className="text-lg font-medium mb-2">What's your password?</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-full text-lg plaseholder:text-base "
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-7">
            <input
              required
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-1/2 text-lg plaseholder:text-base "
            />
            <input
              required
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-1/2 text-lg plaseholder:text-base "
            />
            <input
              required
              type="number"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder="Vehicle Capacity"
              className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-1/2 text-lg plaseholder:text-base "
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <button
            disabled={isLoading}
            className={`bg-[#111111] text-[#fff] font-semibold rounded mb-7 px-4 py-2 w-full text-lg ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Creating..." : "Create Captain Account"}
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] text-gray-600 leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy</span>
          and <span className="underline">Term of Service apply</span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;