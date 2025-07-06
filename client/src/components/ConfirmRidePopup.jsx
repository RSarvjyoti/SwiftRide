import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = (props) => {
  const [otp, setOtp] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePopupPanel(false);
        }}
        className="p-1 text-center cursor-pointer absolute top-0 w-[93%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to start
      </h3>

      <div className="flex items-center justify-between bg-[#e7c006] rounded-lg p-3 mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
          <h2 className="text-lg font-medium">User name</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -m-1 text-gray-600">Ram Mandir, Ayodhya</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -m-1 text-gray-600">Ram Mandir, Ayodhya</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3  border-gray-200">
            <i className="ri-currency-line"></i>
            <div className="">
              <h3 className="text-lg font-medium">₹118.90</h3>
              <p className="text-sm -m-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              className="bg-[#eeeeee] px-6 py-4 text-lg rounded-lg w-full mt-5"
              placeholder="Enter OTP"
            />
            <div className="flex w-full mt-5 items-center justify-between gap-4" >
              <Link
                to="/captain-riding"
                className="w-1/2 text-lg text-center bg-green-500 text-white font-semibold p-3 rounded-lg"
              >
                Confirm
              </Link>
              <button
                onClick={() => {
                  props.setRidePopupPanel(false);
                  props.setConfirmRidePopupPanel(false);
                }}
                className="w-1/2 text-lg bg-red-500 text-white font-semibold p-3 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
