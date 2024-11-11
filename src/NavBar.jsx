import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div
        className="flex justify-between items-center border-b-2 border-black w-full min-h-[6vh] px-[4vw] bg-orange-50"
        id="nav-container"
      >
        <div className="text-3xl font-[Charter] font-bold p-[3vh]">Hards</div>
        <div
          className="flex justify-center items-center flex-row gap-12 font-[Kiev] text-md font-semibold"
          id="nav-bar-options"
        >
          <p className="hidden lg:flex md:flex">
            <Link to={"/story"}> My Story</Link>
          </p>
          <p className="hidden lg:flex md:flex">Write</p>
          <p className="hidden lg:flex md:flex sm:flex">
            <Link to={"/signup"}>Sign In</Link>
          </p>
          <button className="px-[1.5vw] py-[1vh] text-white bg-black rounded-3xl">
            <Link to={"/signup"}>Get Started</Link>
          </button>
        </div>
      </div>
    </>
  );
}
