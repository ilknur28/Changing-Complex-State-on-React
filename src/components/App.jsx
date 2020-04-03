import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: " ",
    sName: " ",
    email: " ",
  });

  function handleContact(event) {
    const { value, name } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value,
      };
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
          value={contact.fName}
        />
        <input
          onChange={handleContact}
          name="sName"
          placeholder="Last Name"
          value={contact.sName}
        />
        <input
          onChange={handleContact}
          name="email"
          placeholder="E-mail"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
