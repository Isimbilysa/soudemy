import React from "react";
import AmenitiesImage from "../assets/images/skyhaus-amenities1.png";

export default function AmenitiesComponent() {
    return (
        <div>
            < div className="bg-black flex pl-24 pt-10">
            <div className=" text-white">
                    <h2 className="font-bold text-2xl">SkyHaus <br /> Amenities</h2>
                    <p className="pt-10">The key features section is your opportunity tell potential tenants about key selling points of your point formats. 
                        The property description sections you to go more in depth property.</p>
                        <div className="flex flex-col">
                            <p>Swimming Pool</p>
                            <p>45 Sq Ft</p>
                            <p>Large Play Ground</p>
                            <p>80 Sq Ft</p>
                            <p>High Security</p>
                            <p>24/7</p>
                            <p>Water Storage</p>
                            <p>1200 gal</p>
                            <p>Basement</p>
                            <p>2</p>
                            <p>Elevator</p>
                            <p>2</p>
                        </div>
                </div>
            <div className=" w-9/12 pr-24 ">
                <img src={AmenitiesImage} alt="Amenities" className="" />
                </div>
                
            </div>
            
        </div>
    );
}
