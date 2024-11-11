import React, { useState } from "react";
import { X } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
export default function SignUpPage({ setIsLogged }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const handleClick = () => {
    if (email == "") {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setIsLogged(true);
    navigate("/select");
  };
  return (
    <>
      <X
        className="absolute right-[2vw] top-[2vh]"
        onClick={() => navigate("/")}
      />
      <div
        className="min-h-screen flex justify-center px-[4vh] items-center bg-orange-50"
        id="sign-in-page"
      >
        <div
          className="w-[60vw] bg-white min-h-[95vh] rounded shadow-2xl p-4 flex justify-center items-center "
          id="container"
        >
          <div
            className="min-h-[60vh] w-[40vw] flex items-center flex-col gap-4"
            id="main-container"
          >
            <div className="text-3xl font-[GT] mb-[1vh]">
              Sign up with email
            </div>
            <div className="flex text-center font-light text-md mb-[5vh] ">
              Enter your email address to create an <br /> account.
            </div>
            <div className="flex flex-col mb-[5vh] items-center gap-2 font-[Kiev] font-light">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-300 bg-opacity-55 rounded-lg outline-1 py-[1vh] px-[1vw] w-[20vw] focus:bg-white transition-colors duration-300 "
              />
              {emailError && (
                <p className="text-sm text-red-500 font-[Kiev]">
                  Enter a valid email
                </p>
              )}
            </div>
            <button
              onClick={handleClick}
              className="px-[5vw] py-[1vh] text-white bg-black rounded-full font-[Kiev] mb-[8vh] text-lg"
            >
              Continue
            </button>
            <div className="text-center text-md font-[Kiev]">
              This site is not protected by reCAPTCHA Enterprise and the <br />
              Google Privacy Policy and Terms of Service apply.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
