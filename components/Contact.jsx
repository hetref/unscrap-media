import React from "react";
import SectionTitle from "./supporters/SectionTitle";

const Contact = () => {
  return (
    <>
      <span
        style={{
          marginTop: "-100px",
          paddingBottom: "100px",
          display: "block",
        }}
        id="contact"
      >
        &nbsp;
      </span>
      <div className="min-h-[calc(100svh-5rem)] border-b-2 border-primary py-[3rem] md:py-[6rem] px-[2rem] flex justify-center items-center relative">
        <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center">
          <div className="flex md:flex-row flex-col items-center justify-center">
            <div className="md:w-[65%] md:pr-[10%] mb-10 md:mb-0">
              <SectionTitle
                title="Get <span class='text-primary'>In</span> Touch"
                subtitle="Contact Us"
              />
              <p className="text-dark mt-4">
                Top rated construction packages we pleasure rationally encounter
                consequences interesting who loves or pursue or desires
              </p>
              <form className="mt-4">
                <div className="flex flex-col gap-4 mt-4 items-center">
                  <div className="flex md:flex-row flex-col w-full gap-4 md:gap-0">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border-2 border-[#ebf1f6] py-2 rounded-md text-[16px] px-3 w-full md:mr-2"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border-2 border-[#ebf1f6] py-2 rounded-md text-[16px] px-3 w-full md:ml-2"
                    />
                  </div>
                  <div className="flex w-full md:flex-row flex-col gap-4 md:gap-0">
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="border-2 border-[#ebf1f6] py-2 rounded-md text-[16px] px-3 w-full md:mr-2"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="border-2 border-[#ebf1f6] py-2 rounded-md text-[16px] px-3 w-full md:ml-2"
                    />
                  </div>
                  <textarea
                    placeholder="Your Message"
                    className="border-2 border-[#ebf1f6] py-2 rounded-md text-[16px] px-3 w-full resize-none"
                    rows={4}
                  ></textarea>
                  <button className="bg-primary text-white px-[16px] py-[8px] rounded-md mt-2 hover:bg-[#3d72a3bc] duration-200 ease-in-out">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-[35%] bg-[#ebf1f6] px-[6%] py-[4%]">
              <div className="text-center mb-[30px]">
                <h3 className="font-bold text-[20px] mb-2 underline">
                  Office Address
                </h3>
                <p className="text-[#6c6e75] hover:text-primary">
                  <a
                    href="https://maps.app.goo.gl/98Hpu2n9fnktLPUz8"
                    target="_blank"
                  >
                    Unscrap Media, SS3-99, Sector 2, Vashi, Navi Mumbai,
                    Maharashtra 400703.
                  </a>
                </p>
              </div>
              <div className="text-center mb-[30px]">
                <h3 className="font-bold text-[20px] mb-2 underline">Phone</h3>
                <p className="text-[#6c6e75] hover:text-primary">
                  <a href="tel:+918898967521">+91 88989 67521</a>
                </p>
                <p className="text-[#6c6e75] hover:text-primary">
                  <a href="tel:+919029239848">+91 90292 39848</a>
                </p>
                <p className="text-[#6c6e75] hover:text-primary">
                  <a href="tel:+917400380622">+91 74003 80622</a>
                </p>
              </div>
              <div className="text-center mb-[30px]">
                <h3 className="font-bold text-[20px] mb-2 underline">Email</h3>
                <p className="text-[#6c6e75] hover:text-primary">
                  <a href="mailto:unscrapmedia@gmail.com">
                    unscrapmedia@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
