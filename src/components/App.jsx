import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: " ",
    sName: " ",
    email: " "
  });

  function handleContact(event) {
    const { value, name } = event.target;

    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          sName: prevValue.sName,
          email: prevValue.email
        };
      } else if (name === "sName") {
        return {
          fName: prevValue.fName,
          sName: value,
          email: prevValue.email
        };
      } else if (name === "email"){
        return {
          fName: prevValue.fName,
          sName: prevValue.sName,
          email: value
        }
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.sName}{" "}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleContact}
          name="fName"
          placeholder="First Name"
          // value={contact.fName}
        />
        <input
          onChange={handleContact}
          name="sName"
          placeholder="Last Name"
          // value={contact.sName}
        />
        <input
          onChange={handleContact}
          name="email"
          placeholder="E-mail"
          // value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
