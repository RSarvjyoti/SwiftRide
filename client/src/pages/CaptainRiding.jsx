import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "remixicon/fonts/remixicon.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-[150px]" src={logo} alt="logo" />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full "
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover "
          src="https://t3.ftcdn.net/jpg/07/28/30/26/360_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg"
          alt=""
        />
      </div>

      <div onClick={()=> {
        setFinishRidePanel(true);
      }} className="h-1/5 p-6 flex items-center relative justify-between bg-yellow-400">
        <h5 className="p-1 text-center cursor-pointer absolute top-0 w-[90%]">
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="text-center bg-green-500 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full h-screen z-10 bottom-0 translate-y-full  bg-white px-3 py-6 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
