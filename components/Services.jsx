"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "./supporters/SectionTitle";

const Services = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://strapi-um.onrender.com/api/services?populate=*")
        .then((res) => res.json())
        .then((data) => {
          setData(data.data);
          console.log(data);
        });
      setLoading(false);
    };

    fetchData();
  }, [data]);

  return (
    <>
      <span
        style={{
          marginTop: "-100px",
          paddingBottom: "100px",
          display: "block",
        }}
        id="services"
      >
        &nbsp;
      </span>
      <div className="min-h-[calc(100svh-5rem)] border-b-2 border-primary py-[3rem] md:py-[6rem] px-[2rem] flex justify-center items-center">
        <div className="max-w-7xl w-full">
          <div className="text-center">
            <SectionTitle
              title="Check <span>Our</span> Services"
              subtitle="Services"
              classes="w-full mb-4"
            />
            <span className="text-[1rem] md:text-[1.1rem] text-muted">
              Empowering Digital Success Through Comprehensive Solutions.
            </span>
          </div>

          {isLoading && (
            <div className="w-full flex flex-col justify-center items-center gap-4 mt-6">
              <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-primary"></div>
              <span className="animate-pulse">Loading Services</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[4rem]">
            {isLoading ? (
              <div className="animate-pulse bg-light w-full h-[200px] rounded"></div>
            ) : (
              data.map((service, index) => (
                <div
                  key={index}
                  className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary"
                >
                  <h1 className="text-2xl font-semibold mb-4">
                    {service.attributes.Title}
                  </h1>
                  <p>{service.attributes.Description}</p>
                </div>
              ))
            )}

            {/* <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <h1 className="text-2xl font-semibold mb-4">Service Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div>
            <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <h1 className="text-2xl font-semibold mb-4">Service Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div>
            <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <h1 className="text-2xl font-semibold mb-4">Service Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div>
            <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <h1 className="text-2xl font-semibold mb-4">Service Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div>
            <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <h1 className="text-2xl font-semibold mb-4">Service Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div>
            <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <h1 className="text-2xl font-semibold mb-4">Service Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
