import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../Data";
function Blog(props) {
  const { title } = useParams();
  const [body, setBody] = useState("");
  useEffect(() => {
    const bodyData = blogData.filter((body) => body.title === title);
    setBody(bodyData[0].body);
  }, []);

  return (
    <div>
      <h1>{title} Pages</h1>
      <p>{body}</p>
    </div>
  );
}

export default Blog;
