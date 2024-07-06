import React from "react";
import { Routes , Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Details from "./Components/Details";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

function App() {
  const {search , pathname}=useLocation();
  
  return (
    <div className="w-screen h-screen flex">
      {
        (pathname != "/" || search.length > 0) &&
        (
          <Link
           to="/"
           className="text-purple-400 absolute left-[17%] top-[3%]">
            <IoHome className="inline-block pb-1 text-xl"/>Home
          </Link>
        )
      }

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
     </Routes>

      
       
      
    </div>
  );
}

export default App;
