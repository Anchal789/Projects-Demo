import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#024950] text-white py-6 px-4 md:px-6  ">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
          <span className="text-xl font-bold">Project Images</span>
        </Link>
        <nav className="hidden md:flex gap-4 mr-6">
          <Link className="hover:bg-[#ffffff] p-2 hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
            Admin
          </Link>
          <Link className="hover:bg-[#ffffff] p-2 hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
            Faculty
          </Link>
          <Link className="hover:bg-[#ffffff] p-2 hover:text-black hover:rounded-full font-bold rounded-full transition-all duration-300">
            Student
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
