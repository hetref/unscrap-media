"use client";

import { auth, db } from "@/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  child,
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
} from "firebase/database";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardLogin = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true);
      console.log(user);
    } else {
      setUser(false);
    }
  });

  const signOutHandle = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const loginHandle = (e) => {
    e.preventDefault();
    console.log("login");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   const dbRef = ref(getDatabase());
    //   get(child(dbRef, `unscrapMedia/contact/`)).then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //       setData(snapshot.val());
    //     } else {
    //       console.log("No data available");
    //     }
    //   });
    // };

    const fetchData = async () => {
      const dbRef = ref(getDatabase());
      const queryRef = query(
        child(dbRef, "unscrapMedia/contact/"),
        orderByKey()
      ); // Use orderByKey for sorting by ID

      get(queryRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          // Convert the data object into an array for sorting
          const dataArray = Object.values(data);
          // Sort the array in descending order based on the key (ID)
          dataArray.sort((a, b) => b.timestamp - a.timestamp); // Change to sort in descending order

          console.log(dataArray);
          setData(dataArray);
        } else {
          console.log("No data available");
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      {user === null && (
        <div className="flex justify-center items-center min-h-[100svh] font-bold text-[24px] animate-pulse">
          Loading...
        </div>
      )}

      {user === false && (
        <div className="flex justify-center items-center min-h-[100svh]">
          <div>
            <Link
              href="/"
              className="border-2 border-primary px-3 py-1 rounded hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out text-primary font-semibold"
            >
              Go Home
            </Link>
            <form className="mt-6 flex flex-col gap-8 items-center border-2 px-6 py-10 rounded border-black/70">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[200px] md:w-[300px] border-2 border-black rounded px-3 py-1"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[200px] md:w-[300px] border-2 border-black rounded px-3 py-1"
              />
              <button
                onClick={loginHandle}
                className="border-2 border-primary px-4 py-2 hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out rounded-md bg-white text-primary font-semibold"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {user === true && (
        <div className="min-h-[100svh] py-[3rem] md:py-[6rem] px-[2rem] flex justify-center items-center">
          <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center">
            <div className="w-full">
              <button
                onClick={(e) => signOutHandle(e)}
                className="border-2 border-primary px-4 py-2 hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out rounded-md bg-white text-primary font-semibold mb-4"
              >
                Logout
              </button>
              <ul role="list" className="divide-y divide-gray-100 w-full">
                {data != null &&
                  Object.values(data)?.map((person) => (
                    <li
                      key={person.email}
                      className="flex justify-between gap-x-6 py-5 cursor-pointer hover:bg-gray-200 transition-colors duration-200 ease-in-out px-4 rounded-lg"
                      onClick={() =>
                        router.push(`/umdashboard/${person.storedTimestamp}`)
                      }
                    >
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {person?.name}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {person.email}
                          </p>
                        </div>
                      </div>
                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">
                          {new Date(person.timestamp).toLocaleDateString()}
                        </p>
                        {person.read ? (
                          <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-gray-500/20 p-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                            </div>
                            <p className="text-xs leading-5 text-gray-500">
                              {new Date(person.timestamp).toLocaleTimeString()}
                            </p>
                          </div>
                        ) : (
                          <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </div>
                            <p className="text-xs leading-5 text-gray-500">
                              {new Date(person.timestamp).toLocaleTimeString()}
                            </p>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {/* <button onClick={signOutHandle}>SignOut</button> */}
          {/* <button onClick={getData}>GetData</button> */}
        </div>
      )}
    </div>
  );
};

export default DashboardLogin;
