"use client";

import { db } from "@/firebase";
import { child, get, getDatabase, ref, set } from "firebase/database";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Timestamp = () => {
  const [data, setData] = useState(null);
  const pathname = usePathname();
  const parts = pathname.split("/");
  const timestamp = parts[2];

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(db);
      get(child(dbRef, `unscrapMedia/contact/${timestamp}`)).then(
        (snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            setData(snapshot.val());
          } else {
            console.log("No data available");
          }
        }
      );
    };

    // Add read=true in firebase if the read is undefined or null
    const dbRef = ref(db, `unscrapMedia/contact/${timestamp}`);
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        if (snapshot.val().read === undefined || snapshot.val().read === null) {
          set(ref(db, `unscrapMedia/contact/${timestamp}/read`), true);
        }
      } else {
        console.log("No data available");
      }
    });

    fetchData();
  }, [timestamp]);

  return (
    <div>
      <div className="min-h-[100svh] flex justify-center w-full items-center">
        <div className="w-full max-w-[36rem] min-w-[10rem]  mx-auto bg-gray-100 rounded-xl shadow-2xl">
          <div className="flex items-center p-3 border-b-2">
            <div className="px-1">
              <Link href="/umdashboard" className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
                <span className="font-extrabold">Close</span>
              </Link>
            </div>

            {/* <div className="px-1">
              <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
            </div>
            <div className="px-1">
              <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
            </div> */}
          </div>
          <div className="flex flex-col gap-6 p-10">
            <span>{data?.name}</span>
            <a href={`tel:${data?.phoneNo}`}>{data?.phoneNo}</a>
            <a href={`mailto:${data?.email}`}>{data?.email}</a>
            <span>{data?.message}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timestamp;
