import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Error from "../pages/Error";
import Navbar from "../components/Navbar";
import Blog from "../pages/Blog";
import User from "../pages/User";
import ProtectedPage from "../pages/ProtectedPage";
import Protected from "./Protected";

function Router(props) {
  const [isLogIn, setLogIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar />
      {isLogIn ? (
        <button onClick={() => setLogIn(!isLogIn)}>Log Out</button>
      ) : (
        <button onClick={() => setLogIn(!isLogIn)}>Log In</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
        {/* <Route path="/*" element={<Error />} /> */}
        <Route path="/user" element={<User />} />
        <Route
          path="/protected-page"
          element={
            <Protected isLogIn={isLogIn}>
              <ProtectedPage />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
