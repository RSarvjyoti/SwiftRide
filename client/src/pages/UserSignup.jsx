import React, { useState } from 'react'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const UserSignup = () => {
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-[150px] mb-10" src={logo} alt="logo" />
        <form>
          <h3 className="text-base font-medium mb-2">What's your name?</h3>
          <div className='flex gap-4 mb-5'>
             <input
            required
            type="text" 
            placeholder="first name"
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg plaseholder:text-base "
          />
           <input
            type="text" 
            placeholder="Lsat name"
            className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg plaseholder:text-base "
          />
          </div>
          <h3 className="text-base font-medium mb-2">What's your email?</h3>
          <input
            required
            type="email" 
            placeholder="example@gmail.com"
            className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-full text-lg plaseholder:text-base "
          />
          <h3 className="text-base font-medium mb-2">What's your password?</h3>
          <input
            required
            type="password"
            placeholder="password"
            className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-full text-lg plaseholder:text-base "
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
  )
}

export default UserSignup