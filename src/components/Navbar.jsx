import React from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { GoSearch } from "react-icons/go";
import { MdApps } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav
      className="bg-black text-white flex justify-between items-center p-4 fixed w-auto left-4 right-4 top-0 z-50
    rounded-xl"
    >
      <div className="flex flex-1">
        <ul className="flex space-x-4 ">
          <li
            className="p-2 flex items-center justify-center border border-transparent rounded-xl transition-all duration-450 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
          >
            Prime Video
          </li>
          <li
            className="p-2 flex items-center justify-center border border-transparent rounded-xl transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
          >
            Home
          </li>
          <li
            className="p-2 flex items-center justify-center border border-transparent rounded-xl transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
          >
            Movies
          </li>
          <li
            className="p-2 flex items-center justify-center border border-transparent rounded-xl transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
          >
            TV Shows
          </li>
          <li
            className="p-2 flex items-center justify-center border border-transparent rounded-xl transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
          >
            Live TV
          </li>
        </ul>
      </div>
      <div className="w-px h-6 bg-red-400 mx-2" />

      <div className="flex flex-1 justify-between items-center">
        <div className="flex flex-1">
          <ul className="flex space-x-4">
            <li
              className="p-2 flex items-center justify-center border border-transparent rounded-2xl transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
            >
              <span className="mr-2">
                <TbCategoryPlus size={20} />
              </span>
              <h1>Subscription</h1>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <ul className="flex items-center space-x-4">
            <li
              className="p-2 flex items-center justify-center border border-transparent rounded-full transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
            >
              <GoSearch size={20} />
            </li>

            <li
              className="p-2 flex items-center justify-center border border-transparent rounded-full transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
            >
              EN
            </li>

            <li
              className="p-2 flex items-center justify-center border border-transparent rounded-full transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
            >
              <MdApps size={20} />
            </li>
            <li
              className="p-2 flex items-center justify-center border border-transparent rounded-full transition-all duration-300 ease-in-out 
               hover:border-white hover:text-black hover:bg-white hover:shadow-lg hover:scale-110 hover:backdrop-blur-sm"
            >
              <FaUserCircle size={25} />
            </li>

            {/* Join Prime Button */}
            <li className="p-2 px-4 flex items-center justify-center text-white bg-blue-800 hover:bg-blue-600 hover:font-medium transition-all duration-200 rounded-xl">
              Join Prime
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
