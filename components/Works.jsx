"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./supporters/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Works = () => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState("all");
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://strapi-um.onrender.com/api/works?populate=*")
        .then((res) => res.json())
        .then((data) => {
          pathname === "/"
            ? setData(data.data.slice(0, 6))
            : setData(data.data);
          console.log(data);
        });
      await fetch(
        "https://strapi-um.onrender.com/api/work-categories?populate=*"
      )
        .then((res) => res.json())
        .then((data) => {
          setCategories(data.data);
          console.log(data.data);
        });

      setLoading(false);
    };

    fetchData();
  }, [data, pathname]);

  return (
    <>
      <span
        style={{
          marginTop: "-100px",
          paddingBottom: "100px",
          display: "block",
        }}
        id="works"
      >
        &nbsp;
      </span>
      <div
        className={`${
          pathname === "/work" && "mt-[5rem]"
        } min-h-[100svh] border-b-2 border-primary px-[2rem] py-[6rem] flex justify-center items-center`}
      >
        <div className="max-w-7xl w-full">
          <div className="flex flex-col items-center mb-[4rem]">
            <div className="text-center md:w-[60%]">
              <SectionTitle
                title="We are <span>different</span> because"
                subtitle="Works"
                classes="w-full mb-4"
              />
              <span className="text-[1rem] w-[60%] md:text-[1.1rem] text-muted">
                Pleasure rationally encounter consequences that are extremely
                painful. Nor again is there anyone who loves or pursues or
                desires to obtain
              </span>
            </div>
          </div>

          {pathname === "/work" && (
            <div className="md:w-[30%] mb-[2rem]">
              <select
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                name="categoryselection"
                id="categories"
                className="w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
              >
                <option value="all">All</option>
                {categories?.map((category) => (
                  <option key={category.id} value={category.Category}>
                    {category.attributes.Category}
                  </option>
                ))}
              </select>
            </div>
          )}

          {isLoading && (
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-primary"></div>
              <span className="animate-pulse">Loading Works</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathname === "/work" &&
              data?.map((work) =>
                value === "all" || work.attributes.Category === value ? (
                  <a
                    key={work.id}
                    href={
                      work.attributes.Link != undefined && work.attributes.Link
                    }
                    target={work.attributes.Link != undefined && "_blank"}
                  >
                    <div
                      key={work.id}
                      className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary"
                    >
                      <img
                        src={`https://strapi-um.onrender.com${work.attributes.Image.data.attributes.url}`}
                        alt="Work Snapshot"
                        className="w-full h-[200px] object-cover mb-6 rounded"
                        // width={1000}
                        // height={1000}
                      />
                      <h1
                        className={`text-2xl font-semibold mb-2 ${
                          work.attributes.Link != undefined && "underline"
                        }`}
                      >
                        {work.attributes.Title}
                      </h1>
                      <p>{work.attributes.Description}</p>
                    </div>
                  </a>
                ) : null
              )}

            {pathname === "/" &&
              data?.map((work) => (
                <a
                  key={work.id}
                  href={
                    work.attributes.Link != undefined && work.attributes.Link
                  }
                  target={work.attributes.Link != undefined && "_blank"}
                >
                  <div
                    key={work.id}
                    className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary"
                  >
                    <img
                      src={`https://strapi-um.onrender.com${work.attributes.Image.data.attributes.url}`}
                      alt="Work Snapshot"
                      className="w-full h-[200px] object-cover mb-6 rounded"
                      // width={1000}
                      // height={1000}
                    />
                    <h1
                      className={`text-2xl font-semibold mb-2 ${
                        work.attributes.Link != undefined && "underline"
                      }`}
                    >
                      {work.attributes.Title}
                    </h1>
                    <p>{work.attributes.Description}</p>
                  </div>
                </a>
              ))}
          </div>

          {pathname === "/" && (
            <div className="w-full flex justify-center items-center">
              <Link href="/work" className="button mt-[3rem] button-hollow">
                View all
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Works;
