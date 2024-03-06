"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "./supporters/SectionTitle";
import emailjs from "@emailjs/browser";
import { ref, serverTimestamp, set } from "firebase/database";
import { database, db } from "@/firebase";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [timestamp, setTimestamp] = useState();

  useEffect(() => {
    const today = new Date();
    setTimestamp(
      `${today.getFullYear()}${today.getMonth()}${today.getDate()}${today.getHours()}${today.getMinutes()}${today.getSeconds()}`
    );
    console.log(timestamp);
    console.log(today);
  }, [timestamp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      firstName === "" ||
      firstName.length === 0 ||
      lastName === "" ||
      lastName.length === 0 ||
      phoneNo === "" ||
      phoneNo.length === 0 ||
      email === "" ||
      email.length === 0
    ) {
      notifyError("Please enter all the required fields", "🙏");
      setLoading(false);
    } else {
      set(ref(db, "unscrapMedia/contact/" + timestamp), {
        name: firstName + " " + lastName,
        phoneNo,
        email,
        message:
          message.length === 0 || message === "" ? "No Message" : message,
        timestamp: serverTimestamp(),
        storedTimestamp: timestamp,
      })
        .then(() => {
          console.log("Contcted Successfully");
        })
        .catch((err) => {
          console.log(err);
        });

      emailjs
        .send(
          "service_0zyslu8",
          "template_cadhcun",
          {
            from_name: firstName + " " + lastName,
            to_name: "Aryan Shinde",
            from_email: email,
            to_email: "aryan.unscrapmedia@gmail.com",
            from_phoneNo: phoneNo,
            message:
              message === "" || message.length === 0 ? "No Message" : message,
          },
          "_lFuPk3VscEw-5oGu"
        )
        .then(() => {
          console.log("Success");
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNo("");
          setMessage("");
        });
    }
  };

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
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 mt-4 items-center">
                  <div className="flex md:flex-row flex-col w-full gap-4 md:gap-0">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border-2 border-[#ebf1f6] py-2 rounded-md text-[16px] px-3 w-full md:mr-2"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border-2 border-[#ebf1f6] py-2 rounded-md text-[16px] px-3 w-full md:ml-2"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="flex w-full md:flex-row flex-col gap-4 md:gap-0">
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="border-2 border-[#ebf1f6] py-2 rounded-md text-[16px] px-3 w-full md:mr-2"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="border-2 border-[#ebf1f6] py-2 rounded-md text-[16px] px-3 w-full md:ml-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <textarea
                    placeholder="Your Message"
                    className="border-2 border-[#ebf1f6] py-2 rounded-md text-[16px] px-3 w-full resize-none"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-primary text-white px-[16px] py-[8px] rounded-md mt-2 hover:bg-[#3d72a3bc] duration-200 ease-in-out"
                  >
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
