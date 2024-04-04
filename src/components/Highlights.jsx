import React from "react";
import highlights from "../assets/images/skyhaus-highlights-img1-scaled.png"
export default function Highlights(){
    return(
    <div>
        <div className="flex pr-24">
        <h1 className="flex-1 pl-36 font-bold text-xl">Property Highlights</h1>
        <p className="flex-1">A property description is made up of 2 parts:
            key features and property description. The key features section
            is your opportunity to tell potential tenants.</p>
            </div> 
            <div className="flex pl-24 pr-20">
            <div className="m-6">
               <img src={highlights}/> 
               <div className="relative -top-36 bottom-22  bg-white bg-opacity-48 text-black p-4 w-60 h-28 ml-16 ">
                <p className="font-bold">Amazing View</p>
                <p>the view is spectaclar from decktub or through the floor.</p>
               </div>
                </div> 
                <div className="m-6">
                    <img src={highlights} alt="" />
                    <div className="relative -top-36 bottom-22  bg-white bg-opacity-48 text-black p-4 w-60 h-28 ml-16 ">
                <p className="font-bold">Quiet Neghbour</p>
                <p>the view is spectaclar from decktub or through the floor.</p>
               </div>
                </div>
                <div className="m-6">
                    <img src={highlights} alt="" />
                    <div className="relative -top-36 bottom-22  bg-white bg-opacity-48 text-black p-4 w-60 h-28 ml-16 ">
                <p className="font-bold">Housing Security</p>
                <p>the view is spectaclar from decktub or through the floor.</p>
               </div>
                </div>
                </div>
            </div>   
    )
}