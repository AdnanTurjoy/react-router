import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ isLogIn, children }) {
  return !isLogIn ? <Navigate to="/" /> : children;
}

export default Protected;
