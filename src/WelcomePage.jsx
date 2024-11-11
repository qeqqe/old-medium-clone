import React from "react";
import NavBar from "./NavBar";
import image from "../images/welcome.webp";
import { Link } from "react-router-dom";

export default function WelcomePage({ isLogged }) {
  return (
    <>
      <div
        className="flex flex-col items-center min-h-screen bg-orange-50"
        id="whole-welcome-page"
      >
        <div
          className="flex justify-center items-center min-h-[6vh] w-full z-10"
          id="NavBar"
        >
          <NavBar />
        </div>
        <div
          className="flex flex-row pl-[8vw] w-full min-h-[75vh]"
          id="mid-page"
        >
          <div
            className="flex w-full lg:w-[70vw] flex-col min-h-[75vh] justify-center items-start gap-4"
            id="page-description"
          >
            <div className="flex flex-col font-[GT] mb-[2vh]" id="big-text">
              <p className="max-h-[13vh] text-[12vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw]">
                Human
              </p>
              <p className="max-h-[13vh] text-[12vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw]">
                stories & ideas
              </p>
            </div>
            <div className="font-[Kiev] font-semibold text-lg md:text-xl my-[5vh]">
              A place to read, write, and deepen your understanding
            </div>
            <button className="px-[2vw] py-[1vh] text-white bg-black rounded-full font-[Kiev] text-lg">
              <Link to={isLogged ? "/feeds" : "/signup"}> Start Reading </Link>
            </button>
          </div>
          <div
            className="hidden md:flex lg:flex absolute w-[30vw] right-[5vw] top-[10vh] z-0"
            id="image-section"
          >
            <img src={image} alt="" className="w-full" />
          </div>
        </div>
        <div
          className="min-h-[10vh] w-full border-t-2 border-black z-10 bg-orange-50 flex justify-center items-center"
          id="footer"
        >
          <div
            className="flex justify-center gap-[3vw] items-center flex-row w-[60vw]  text-[13px] font"
            id="bottom-shit"
          >
            <p>Help</p>
            <p>Status</p>
            <p>About</p>
            <p>Careers</p>
            <p>Teams</p>
          </div>
        </div>
      </div>
    </>
  );
}
