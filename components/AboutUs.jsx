import React from "react";
import SectionTitle from "./supporters/SectionTitle";
import Image from "next/image";
import shape from "../assets/images/aboutshape.svg";

const AboutUs = () => {
  return (
    <div className="min-h-[calc(100svh-5rem)] border-b-2 border-primary py-[3rem] md:py-[6rem] px-[2rem] flex justify-center items-center relative">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center">
        <div className=" flex flex-col flex-1 py-[2rem]">
          <SectionTitle
            title="Best <span>Digital Agency</span> in the Town"
            subtitle="About Us"
          />
          <span className="my-4 text-[1.2rem] font-light">Since 2019</span>
          <p className="text-dark">
            Established in 2019, Unscrap Media is the brainchild of visionaries
            Tejan Suvarna, Kaushik Patil and Cary Wood. Fueled by a collective
            passion for innovation, we bring a wealth of experience in social
            media marketing, web development, and creative design. At Unscrap,
            we are dedicated to reshaping the digital landscape by seamlessly
            integrating technology and creativity, delivering cutting-edge
            solutions that empower businesses to thrive in the ever-evolving
            online world.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center py-[2rem]">
          <img
            src="https://aryu-um.github.io/unscrapmedia-assets/logos/logoblack.png"
            alt="Unscrap Media Logo"
            className="unscrap_logo w-[80%] h-auto object-contain border-2 border-black rounded-lg p-4"
          />
        </div>
      </div>
      <div className="absolute bottom-40 right-0 w-full z-[-1] flex justify-end overflow-hidden">
        {/* <img src={shape} alt="Shape" /> */}
        <Image
          src={shape}
          alt="Shape"
          className="w-[100dvw] md:w-[50dvw] h-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;
