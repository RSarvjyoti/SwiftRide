import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const[userData, setUserData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      email:email,
      password: password
    })
    
    setEmail("")
    setPassword("")
  }
  
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-[150px] mb-10" src={logo} alt="logo" />
        <form onSubmit={(e)=>handleSubmit(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e)=> {setEmail(e.target.value)}
            }
            placeholder="example@gmail.com"
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg plaseholder:text-base "
          />
          <h3 className="text-lg font-medium mb-2">What's your password?</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e)=> {setPassword(e.target.value)} }
            placeholder="password"
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg plaseholder:text-base "
          />
          <button className="bg-[#111111] text-[#fff] font-semibold rounded mb-7 px-4 py-2 w-full text-lg plaseholder:text-base">
            Login
          </button>
        </form>
         <p className="text-center">New here? <Link to='/user-signup' className="text-blue-600">Create new Account</Link></p>
      </div>
      <div>
        <Link to='/captain-login' className="bg-[#bd9e0c] hover:bg-[#e7c006] flex items-center justify-center text-[#fff] font-semibold rounded mb-7 px-4 py-2 w-full text-lg plaseholder:text-base">Sign In as captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
