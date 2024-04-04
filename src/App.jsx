import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Amenities from "./components/Amenities";
export default function App() {
  return (
    <div>
      <Navbar /> 
      <Home/>
      <About/>
      <Highlights/>
      <Amenities/>
    </div>
  );
}