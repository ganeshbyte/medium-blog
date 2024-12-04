import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiBellLight } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";

const Appbar = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const currentUser = {
    firstName: "Ganesh",
    lastName: "Chaudhari",
  };

  return (
    <div className="bg-white flex items-center justify-between p-2 mb-10">
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
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          onClick={() => {
            navigate("/publish");
          }}
        >
          Publish
        </button>
        <div className="flex items-center gap-2">
          <TfiWrite size={28} />
          <span>Write</span>
        </div>
        <div>
          <PiBellLight size={28} />
        </div>
        <div>
          {currentUser && <Avatar author="Ganesh" size={"big"}></Avatar>}
          {!currentUser && <FaUserCircle size={28} />}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
