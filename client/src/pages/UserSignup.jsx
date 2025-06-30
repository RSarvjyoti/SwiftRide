import React, { useState } from 'react'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({})

  const submitHandler = (e)=> {
    e.preventDefault();
    setUserData({
      fullname: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password:password
    })
   
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-[150px] mb-10" src={logo} alt="logo" />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your name?</h3>
          <div className='flex gap-4 mb-5'>
             <input
            required
            type="text" 
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
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
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-full text-lg plaseholder:text-base "
          />
          <button className="bg-[#111111] text-[#fff] font-semibold rounded mb-7 px-4 py-2 w-full text-lg plaseholder:text-base">
            Register
          </button>
        </form>
         <p className="text-center">Already have an account? <Link to='/user-login' className="text-blue-600">Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] text-gray-600 leading-tight'>By proceeding you cansent to get calls, whatsApp or SMS message, including by automated means, from SwiftRide and its affeliates to the number provided.  </p>
      </div>
    </div>
  )
}

export default UserSignup