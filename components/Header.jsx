"use client";

import React from "react";
import shape from "../assets/images/shape.svg";
import Image from "next/image";

const Header = () => {
  const redirectToSection = (section) => () => {
    window.document
      .querySelector(section)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <span
        style={{
          marginTop: "-130px",
          paddingBottom: "100px",
          display: "block",
        }}
        id="header"
      >
        &nbsp;
      </span>
      <div className="min-h-[calc(100svh-5rem)] py-[3rem] px-[2rem] md:py-[6rem] mt-[5rem] flex justify-center items-center relative border-b-2 border-primary">
        <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row justify-between items-center">
          <div className=" flex flex-col flex-1 py-[2rem]">
            <h1 className="text-4xl md:text-6xl text-center md:text-left font-bold leading-[48px] md:leading-[68px]">
              Full solution for your Existence in{" "}
              <span className="text-primary">Social Life</span>
            </h1>
            <div className="flex justify-center flex-col md:justify-normal mt-[3rem]">
              <div className="flex justify-center md:justify-normal">
                <button
                  className="button button-hollow-black mr-4"
                  onClick={redirectToSection("#contact")}
                >
                  Contact Us
                </button>
                <button
                  className="button button-hollow ml-4"
                  onClick={redirectToSection("#services")}
                >
                  Services
                </button>
              </div>
              <div className="flex mt-6">
                <a
                  className="button button-hollow-black"
                  href="https://drive.google.com/file/d/1c8yxMu-xHH_mHbWLTMG1nyBMvy-TXAUy/view?usp=sharing"
                  target="_blank"
                >
                  Download Portfolio
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center py-[1rem] md:p-[2rem]">
            <Image
              src="https://aryu-um.github.io/unscrapmedia-assets/logos/logoblack.png"
              alt="Unscrap Media Logo"
              className="unscrap_logo w-[80%] h-auto object-contain border-2 border-black rounded-lg p-4"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full z-[-1]">
          {/* <img src={shape} alt="Shape" /> */}
          <Image src={shape} alt="Shape" className="w-[100dvw] md:w-[50dvw]" />
        </div>
      </div>
    </>
  );
};

export default Header;
