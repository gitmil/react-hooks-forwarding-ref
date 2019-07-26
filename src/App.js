import React, { useRef, useEffect } from "react";
import Input from "./components/Input";

import "./App.css";

const inputStlye = {
  width: "400px",
  height: "40px",
  fontSize: "30px",
  marginBottom: "10px"
};

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function firstNameKeyDown(e){
    if(e.key === "Enter"){
      lastNameRef.current.focus();
    }
  }

  function lastNameKeyDown(){

  }

  return (
    <div className="App">
      <header className="App-header">
        <Input
          ref={firstNameRef}
          placeholder="type first name here "
          style={inputStlye}
          onKeyDown={firstNameKeyDown}
        />
        <Input
          ref={lastNameRef}
          placeholder="type last name here "
          style={inputStlye}
          onKeyDown={lastNameKeyDown}
        />
      </header>
    </div>
  );
}

export default App;
