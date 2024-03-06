"use client";

import { auth, db } from "@/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
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

  const signOutHandle = () => {
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
    const fetchData = async () => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `unscrapMedia/contact/`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      {user === null && <div>Loading...</div>}

      {user === false && (
        <div>
          <div>
            <form>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={loginHandle}>Login</button>
            </form>
          </div>
        </div>
      )}

      {user === true && (
        <div className="min-h-[100svh] py-[3rem] md:py-[6rem] px-[2rem] flex justify-center items-center">
          <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center">
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
          {/* <button onClick={signOutHandle}>SignOut</button> */}
          {/* <button onClick={getData}>GetData</button> */}
        </div>
      )}
    </div>
  );
};

export default DashboardLogin;
