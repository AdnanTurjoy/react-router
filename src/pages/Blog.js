import React from "react";
import { Link, useLocation } from "react-router-dom";
function Blog(props) {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>{location.state.title} Pages</h1>
      <p>{location.state.body}</p>
      <Link to="/blogs">back</Link>
    </div>
  );
}

export default Blog;
