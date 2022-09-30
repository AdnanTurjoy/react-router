import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function User(props) {
  //const { userid } = useParams();
  const [searchParam, setSearchParam] = useSearchParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const handleForm = (e) => {
    e.preventDefault();
    setSearchParam({ name: name, age: age });
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          {" "}
          Name :
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          Age :
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div>
          <button type="submit"> submit</button>
        </div>
      </form>
    </div>
  );
}

export default User;
