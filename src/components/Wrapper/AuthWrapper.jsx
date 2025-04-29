"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
const AuthWrapper = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthWrapper;
