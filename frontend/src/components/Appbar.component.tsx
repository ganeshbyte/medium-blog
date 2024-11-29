import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiBellLight } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";

const Appbar = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  return (
    <div className="bg-white flex items-center justify-between p-2 ">
      {/* Left Side */}
      <div className="flex items-center gap-6">
        <div className="text-3xl">Medium</div>
        <div className="relative">
          {!searchActive && (
            <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          )}
          {searchActive && (
            <IoSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          )}

          <input
            type="text"
            placeholder="Search..."
            onFocus={() => {
              setSearchActive(true);
            }}
            onBlur={() => {
              setSearchActive(false);
            }}
            className="ring-1 ring-gray-400 pl-10 p-2 rounded-2xl  w-40 md:w-60 lg:w-full  "
          />
        </div>
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <TfiWrite size={28} />
          <span>Write</span>
        </div>
        <div>
          <PiBellLight size={28} />
        </div>
        <div>
          <FaUserCircle size={28} />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
