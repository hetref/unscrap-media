import "@/scss/teams.scss";

import Image from "next/image";
import React from "react";
import SectionTitle from "./supporters/SectionTitle";
import Team from "./supporters/Team";
import tejanimg from "@/assets/profiles/Tejan.jpg";
import kaushikimg from "@/assets/profiles/Kaushik.jpg";
import caryimg from "@/assets/profiles/Cary.jpg";

const Teams = () => {
  return (
    <>
      <span
        style={{
          marginTop: "-100px",
          paddingBottom: "100px",
          display: "block",
        }}
        id="team"
      >
        &nbsp;
      </span>
      <div className="min-h-[calc(100svh-5rem)] border-b-2 border-primary py-[3rem] md:py-[6rem] px-[2rem] flex justify-center items-center relative">
        <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center">
          <div className=" flex flex-col flex-1 py-[2rem]">
            <SectionTitle
              title="Visionaries Behind <span class='text-primary'>Unscrap Media</span>"
              subtitle="Team"
            />
            <p className="text-dark mt-4">
              Meet the dynamic trio steering Unscrap Media towards excellence —
              Tejan Suvarna, Kaushik Patil, and Cary Wood. Fueled by a shared
              passion for innovation, they bring a wealth of experience in
              social media marketing, web development, and creative design.
              Together, they form the driving force behind our commitment to
              delivering cutting-edge solutions that redefine the digital
              landscape. With a vision to empower businesses through seamless
              integration of technology and creativity, Cary, Kaushik, and Tejan
              inspire our team to push boundaries and consistently exceed
              expectations.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center py-[2rem]">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-6">
              <Image
                src={tejanimg}
                alt="Unscrap Media Logo"
                width={1000}
                height={1000}
                className="w-[44%] md:w-[36%] h-auto object-contain border-2 border-black rounded-full p-1 md:p-2 cursor-pointer hover:border-primary transition-all duration-300 ease-in-out"
              />
              <Image
                src={kaushikimg}
                alt="Unscrap Media Logo"
                width={1000}
                height={1000}
                className="w-[44%] md:w-[36%] h-auto object-contain border-2 border-black rounded-full p-1 md:p-2 cursor-pointer hover:border-primary transition-all duration-300 ease-in-out"
              />
              <Image
                src={caryimg}
                alt="Unscrap Media Logo"
                width={1000}
                height={1000}
                className="w-[44%] md:w-[36%] h-auto object-contain border-2 border-black rounded-full p-1 md:p-2 cursor-pointer hover:border-primary transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
