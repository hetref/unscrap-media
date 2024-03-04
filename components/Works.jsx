"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import SectionTitle from "./supporters/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const people = [
  {
    name: "Wade Cooper",
  },
  {
    name: "Arlene Mccoy",
  },
  {
    name: "Devon Webb",
  },
  {
    name: "Tom Cook",
  },
];

const Works = () => {
  const [selected, setSelected] = useState(people[3]);
  const pathname = usePathname();
  console.log(pathname);

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
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                      Category
                    </Listbox.Label>
                    <div className="relative mt-2">
                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">
                            {selected.name}
                          </span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person, index) => (
                            <Listbox.Option
                              key={index}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "bg-primary text-white"
                                    : "text-gray-900",
                                  "relative cursor-default select-none py-2 pl-3 pr-9"
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "ml-3 block truncate"
                                      )}
                                    >
                                      {person.name}
                                    </span>
                                  </div>
                                  {console.log(selected)}

                                  {selected && (
                                    <span
                                      className={classNames(
                                        active ? "text-white" : "text-primary",
                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  )}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blaze-plan-account.appspot.com/o/works%2FDemo%20Work?alt=media&token=01b58be3-226a-4b48-8f6c-242de1718721"
                alt="Work Snapshot"
                className="w-full h-[200px] object-cover mb-6 rounded"
              />
              <h1 className="text-2xl font-semibold mb-2">Work Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div>
            <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blaze-plan-account.appspot.com/o/works%2FDemo%20Work?alt=media&token=01b58be3-226a-4b48-8f6c-242de1718721"
                alt="Work Snapshot"
                className="w-full h-[200px] object-cover mb-6 rounded"
              />
              <h1 className="text-2xl font-semibold mb-2">Work Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div>
            <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blaze-plan-account.appspot.com/o/works%2FDemo%20Work?alt=media&token=01b58be3-226a-4b48-8f6c-242de1718721"
                alt="Work Snapshot"
                className="w-full h-[200px] object-cover mb-6 rounded"
              />
              <h1 className="text-2xl font-semibold mb-2">Work Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div>
            <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blaze-plan-account.appspot.com/o/works%2FDemo%20Work?alt=media&token=01b58be3-226a-4b48-8f6c-242de1718721"
                alt="Work Snapshot"
                className="w-full h-[200px] object-cover mb-6 rounded"
              />
              <h1 className="text-2xl font-semibold mb-2">Work Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div>
            <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blaze-plan-account.appspot.com/o/works%2FDemo%20Work?alt=media&token=01b58be3-226a-4b48-8f6c-242de1718721"
                alt="Work Snapshot"
                className="w-full h-[200px] object-cover mb-6 rounded"
              />
              <h1 className="text-2xl font-semibold mb-2">Work Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div>
            <div className="bg-light w-full hover:bg-lightprimary duration-300 px-[2rem] md:px-[2.6rem] rounded py-[1.8rem] md:py-[2.4rem] cursor-pointer border-2 border-primary">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blaze-plan-account.appspot.com/o/works%2FDemo%20Work?alt=media&token=01b58be3-226a-4b48-8f6c-242de1718721"
                alt="Work Snapshot"
                className="w-full h-[200px] object-cover mb-6 rounded"
              />
              <h1 className="text-2xl font-semibold mb-2">Work Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacinia, eros nec tincidunt volutpat, nulla mi tristique metus,
                nec tempus erat nunc nec libero.
              </p>
            </div>
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
