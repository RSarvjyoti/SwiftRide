import React from "react";
import "remixicon/fonts/remixicon.css";

const VehiclePanel = (props) => {
  return (
    <div> 
        <h5
          onClick={() => {
            props.setVehiclePanelOpen(false);
          }}
          className="p-1 text-center cursor-pointer absolute top-0 w-[93%]"
        >
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        <div onClick={()=> {
            props.setConfirmedRidePanel(true);
        }} className="flex w-full active:border-2 active:border-black  rounded-xl mb-2  p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png"
            alt=""
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-line">4</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable compact ride
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹190.90</h2>
        </div>

        <div className="flex w-full  active:border-2 active:border-black  rounded-xl mb-2  p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png"
            alt=""
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-line">1</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable compact ride
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹65</h2>
        </div>

        <div className="flex w-full  active:border-2 active:border-black  rounded-xl mb-2  p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Uber Auto{" "}
              <span>
                <i className="ri-user-line">3</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 min away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable compact ride
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹118.90</h2>
        </div>
    </div>
  );
};

export default VehiclePanel;
