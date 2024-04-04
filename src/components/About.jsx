import React from "react";
// import { FaBed , FaBath,FaHome} from "react-icons/fa";
import Bedroom from "../assets/images/skyhause-bedroom-1-q5yzal0mxx2yk24i54ut1rmpibvi03rmcaoyk99a8w.png";
// import { BsFillCupHotFill } from "react-icons/bs";
import Group from "../assets/images/Group.png"
import Group2 from "../assets/images/Group (1).png"
import Group3 from "../assets/images/Group (3).png"
export default function About(){
    return(
        <div className="flex pt-11">
            <div className="flex-1 pl-36 ">
                <h3 className="font-bold text-xl">Skyhaus Residence</h3>
                <p>A property description is made up of 2 parts: key features and property description. The key features section is your 
                    opportunity to tell potential tenants about the key selling points of your property, in a bullet point format. 
                    The property description section allows you to go in to more depth.</p>
                <div className="flex flex-wrap">
                <div className="w-1/2 p-4">
        <img src="Group.png" alt="Icon 1" className="w-20" />
      </div>
      <div className="w-1/2 p-4">
        <img src={Group} alt="Icon 2" className="w-20" />
      </div>
      <div className="w-1/2 p-4">
        <img src={Group2} alt="Icon 3" className="w-20" />
      </div>
      <div className="w-1/2 p-4">
        <img src={Group3} alt="Icon 4" className="w-24" />
      </div>
                </div>
            </div>
            <div className="flex-1 pl-32">
                <img src={Bedroom} className="h-4/5"/>
            </div>
        </div>
    )
}