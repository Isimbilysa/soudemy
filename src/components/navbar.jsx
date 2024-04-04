import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="h-14 bg-white flex items-center justify-between ">
      <h2 className="text-black mr-20 ml-8">Soudemy</h2>
      <div className="flex space-x-3">
        <FaInstagram className="text-black" />
        <FaTwitter className="text-black" />
        <FaFacebook className="text-black" />
      </div>
      <ul className="text-black flex space-x-3.5 items-start justify-center w-full">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Highlights">Highlights</a></li>
        <li><a href="#Amenities">Amenities</a></li>
        <li><a href="#Team">Team</a></li>
      </ul>
      
      <FaSearch className="mr-4"/>
    </nav>
  );
}
