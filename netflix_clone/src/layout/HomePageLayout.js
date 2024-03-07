import React from "react";
import bg from "../image/bgImage.jpg";
import movie1 from "../image/pageImage/movie1.png";
import Navbar from "../pages/navbar/Navbar";
import { Outlet } from "react-router-dom";
const HomePageLayout = () => {
  return (
    <div className="bg-NBlack ">
      {/* <div
      className="relative bg-no-repeat bg-cover h-[100vh]"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${movie1})`,
      }}
    >
     <Navbar/>
    </div> */}
      {/* <div className="relative">
  <Outlet className="" /> 
  <Navbar className=" absolute top-[-50px] left-0" />
</div> */}
      <div className="relative">
        <div className="">

        <Outlet  /> {/* Outlet with lower z-index */}
        </div>
        <div className="absolute top-0 w-full">
        <Navbar  />
        </div>
      
        {/* Navbar with higher z-index */}
      </div>
    </div>
  );
};

export default HomePageLayout;
