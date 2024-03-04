import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="border-b-2 border-primary py-[3rem] md:py-[6rem] px-[2rem] flex justify-center items-center relative bg-primary text-white">
        <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center">
          <div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-16">
              <div className="w-full md:w-[53%]">
                <Image
                  className="h-10 w-auto"
                  src="https://aryu-um.github.io/unscrapmedia-assets/logos/logowhite.png"
                  alt="Unscrap Media Logo"
                  height={1000}
                  width={1000}
                />
                <p className="mt-4">
                  Unscrap Media is a digital agency that provides services in
                  social media marketing, web development, and creative design.
                </p>
                <div className="flex gap-6 mt-6">
                  <a href="https://youtube.com" target="_blank">
                    <div className="p-3 rounded-full bg-[#ffffff] hover:bg-[#ffffffa9] duration-200 ease-in-out">
                      <FaInstagram className="text-[18px] text-primary" />
                    </div>
                  </a>
                  <a href="https://youtube.com" target="_blank">
                    <div className="p-3 rounded-full bg-[#ffffff] hover:bg-[#ffffffa9] duration-200 ease-in-out">
                      <FaFacebookF className="text-[18px] text-primary" />
                    </div>
                  </a>
                  <a href="https://youtube.com" target="_blank">
                    <div className="p-3 rounded-full bg-[#ffffff] hover:bg-[#ffffffa9] duration-200 ease-in-out">
                      <FaTwitter className="text-[18px] text-primary" />
                    </div>
                  </a>
                  <a href="https://youtube.com" target="_blank">
                    <div className="p-3 rounded-full bg-[#ffffff] hover:bg-[#ffffffa9] duration-200 ease-in-out">
                      <FaWhatsapp className="text-[18px] text-primary" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-[47%] mt-8 md:mt-0">
                <h2 className="text-[22px] font-bold mb-4">Contact Info</h2>
                <div>
                  <p className="mb-2">
                    <a
                      href="https://maps.app.goo.gl/98Hpu2n9fnktLPUz8"
                      target="_blank"
                    >
                      Unscrap Media, SS3-99, Sector 2, Vashi, Navi Mumbai,
                      Maharashtra 400703.
                    </a>
                  </p>
                  <p className="mb-2">
                    <a href="tel:+918898967521">+91 88989 67521</a>
                  </p>
                  <p className="mb-2">
                    <a href="tel:+919029239848">+91 90292 39848</a>
                  </p>
                  <p className="mb-2">
                    <a href="tel:+917400380622">+91 74003 80622</a>
                  </p>
                  <p className="mb-2">
                    <a href="mailto:unscrapmedia@gmail.com">
                      unscrapmedia@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 text-center">
        <p>
          Copyright © {year} Made with 💙 by Unscrap Media. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
