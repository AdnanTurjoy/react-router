import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Contact(props) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Pages</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempora,
        consequuntur harum nulla sed nihil quam maiores sit culpa distinctio ad
        quos suscipit beatae earum vel, ipsa facere aliquid adipisci recusandae?
        Enim inventore doloremque quibusdam dicta architecto cumque beatae
        laborum ex explicabo sapiente, ad sit laudantium, provident accusantium
        ducimus placeat iusto maiores error eius voluptas harum iste officia?
        Atque, numquam!
      </p>
      <button onClick={() => navigate("/")}>Go to home</button>
    </div>
  );
}

export default Contact;
