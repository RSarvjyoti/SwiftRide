import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1602773040364-522556233e30?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-5 flex justify-between flex-col  w-full' >
            <img className='w-[150px] ml-5' src={logo} alt="logo" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with SwiftRide</h2>
                <Link to='/user-login' className='w-full flex items-center justify-center bg-black text-white py-3 rounded mt-5 cursor-pointer '>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start