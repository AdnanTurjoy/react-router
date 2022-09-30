import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
        {/* <Route path="/*" element={<Error />} /> */}
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
