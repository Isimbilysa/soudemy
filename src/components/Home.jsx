import React from "react";
import skyhausHeader from "../assets/images/skyhaus-header1.png";

export default function Home() {
  return (
    <div className="ml-8 relative inline-block">  
      <img src={skyhausHeader} alt="Skyhaus Header"className="width: 150%;" />
    <div className="absolute top-20 left-20 w-96 h-3/4 border-8 border-yellow-700">
    <p className=" text-white pt-6 pl-10 text-7xl font-extrabold ">Modern
     Luxury Villa</p>
        <p className="text-white pl-10 text-3xl">Price:</p>
        <p className="text-white pl-10  text-3xl">$2,999,999</p>
        
        <button className="bg-white translate-y-32 ml-10 text-sm w-36 h-12">SCHEDULE A VISIT</button>
    </div>
    </div>
  );
}