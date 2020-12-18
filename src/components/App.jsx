import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });
  function updateFullName(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: prevValue.lastName
        };
      } else if (name === "lName") {
        return {
          firstName: prevValue.firstName,
          lastName: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={updateFullName}
          name="fName"
          placeholder="First Name"
        />
        <input onChange={updateFullName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
