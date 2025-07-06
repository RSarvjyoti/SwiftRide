import React from 'react'

const LookingForDriver  = (props) => {
  return (
     <div>
      <h5
        onClick={()=>{
            props.setVehicleFound(false);
        }}
        className="p-1 text-center cursor-pointer absolute top-0 w-[93%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>
      
      <div className="flex flex-col gap-2 justify-between items-center">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png"
          alt=""
          className="h-20"
        />
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
  )
}

export default LookingForDriver 