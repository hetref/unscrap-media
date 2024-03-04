"use client";

import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";

const DashboardLogin = () => {
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true);
      // console.log(user);
    } else {
      setUser(false);
    }
  });

  return <div>page</div>;
};

export default DashboardLogin;
