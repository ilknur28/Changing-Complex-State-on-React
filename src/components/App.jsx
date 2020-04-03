import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: " ",
    sName: " "
  });

  function handleFullName(event) {
    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          sName: prevValue.sName
        };
      } else if (name === "sName") {
        return {
          fName: prevValue.fName,
          sName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.sName}{" "}
      </h1>
      <form>
        <input
          onChange={handleFullName}
          name="fName"
          placeholder="First Name"
          // value={fullName.fName}
        />
        <input
          onChange={handleFullName}
          name="sName"
          placeholder="Last Name"
          // value={fullName.sName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
