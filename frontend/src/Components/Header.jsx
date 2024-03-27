import { BsSearch } from "react-icons/bs";
import React from "react";
const Header = () => {
  return (
    <nav className="mt-4 flex justify-between items-center gap-8">
      <div className="ml-2">
        <span className="text-lg font-semibold text-black hover:text-[#e8aa68] ">
          ArtVedic
        </span>
      </div>
      <div className="flex-1 items-center flex flex-row border rounded-md ">
        <input
          type="text"
          placeholder="Search"
          className=" py-2 px-2 w-full focus:outline-none "
        />
        <div className="bg-[#fdba74] py-1 px-2.5 rounded-lg mr-4  ">
          <BsSearch className=" text-black  w-4 justify-center " />
        </div>
      </div>
      <div className="mr-4">
        <ul className="flex flex-row gap-4 text-black">
          <li className="hover:text-[#ef4444]">Home</li>
          <li className="hover:text-[#f59e0b]">Cart</li>
          <li className="hover:text-[#22c55e]">My profile</li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
