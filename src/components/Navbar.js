import React from "react";
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/blogs" className="nav-link">
        Blogs
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
