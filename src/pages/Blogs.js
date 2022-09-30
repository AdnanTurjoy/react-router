import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../Data";
function Blogs(props) {
  const [blogs, setBlogs] = useState(blogData);
  //console.log(blogs);
  const truncateBlog = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <section>
      {blogs.map((blog) => {
        const { id, title, body } = blog;
        return (
          <article key={id}>
            <h1>{title}</h1>
            <p>{truncateBlog(body, 100)}</p>
            <button className="nav-link">
              <Link to={title}> Learn More</Link>
            </button>
          </article>
        );
      })}
    </section>
  );
}

export default Blogs;
