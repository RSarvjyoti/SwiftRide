import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="p-1 text-center cursor-pointer absolute top-0 w-[93%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to start
      </h3>

      <div className="flex items-center justify-between border-2 bg-white border-[#e7c006] rounded-lg p-3 mt-4">
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

          <Link
            to="/captain-home"
            className="w-full text-center bg-green-500 text-white font-semibold p-3 rounded-lg"
          >
            Complete Ride
          </Link>

          <p className="mt-10 text-xs">Click on finish ride button if you have completed the payment</p>

      </div>
    </div>
  );
};

export default FinishRide;
