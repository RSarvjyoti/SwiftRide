import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.waitingForDriver(false);
        }}
        className="p-1 text-center cursor-pointer absolute top-0 w-[93%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png"
          alt=""
          className="h-10"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Sarvjyoti</h2>
          <h4 className="text-lg font-semibold -mt-1 -mb-1">UP 42 AB 1234 </h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
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
              <p className="text-sm -m-1 text-gray-600">Ram Mandir, Ayodhya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
