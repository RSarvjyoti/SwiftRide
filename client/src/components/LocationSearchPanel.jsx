import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  const locations = ["Lorem ipsum dolor sit amet consectetur adipisicing"];
  
  return (
    <div>
      {/* this is a sample data */}
      {locations.map((elm, index) => (
        <div onClick={()=>{
            props.setVehiclePanelOpen(true);
            props.setPanelOpen(false);
        }} key={index} className="flex items-center border-2 border-gray-100 active:border-black p-3 rounded-xl my-2 justify-start gap-4 ">
          <h2 className="bg-[#eee] h-10 w-10 rounded-full flex items-center justify-center">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elm}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
