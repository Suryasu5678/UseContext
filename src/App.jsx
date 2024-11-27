import React, { useState } from "react";
import Ptag from "./Components/Ptag";
import Input from "./Components/Input";
import Button from "./Components/Button";
import "./app.css";
import AuthContext from "./Components/UseContexxt";
<app className="css"></app>;
const App = () => {
  const [value, setValue] = useState(0);
  const [add, setAdd] = useState(0);
  const [result, setResult] = useState(null);

  const handleClick = () => {
    setResult(value + add);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        background: "linear-gradient(to right, #ff7e5f, #feb47b)",
        height: "400px",
        width: "50%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          paddingLeft: "140px",
          paddingTop: "50px",
          marginTop: "50px",
          justifyContent: "center",
          fontFamily: "bold",
        }}
      >
        <Ptag h3=" Calculator" />
      </div>

      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Input
          placeholder="Insert Number"
          type="number"
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "10px",
          marginBottom: "10px",
        }}
      >
        {" "}
        <Input
          placeholder="Insert Number "
          type="number"
          onChange={(e) => setAdd(Number(e.target.value))}
        />{" "}
      </div>
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "1px",
          backgroundColor: "red",
          marginBottom: "18px",
          paddingLeft: "5px",
        }}
      >
        <Button button="ADD" onClick={handleClick} />
      </div>

      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "10px",
          paddingRight: "220px",
          fontSize:"13px",
          fontFamily:"arial"
        }}
      >
        Answer is : {result !== null ? result : "enter the value"}{" "}
      </div>
      <div style={{ justifyContent: "center", textAlign: "center" }}>
        <div>
          <a
            href=""
            style={{
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "65%",
              marginTop: "15px",

            }}
            onClick={() => {
              setValue(0);
              setAdd(0);
              setResult(null);
            }}
          >
            Clear All
          </a>
        </div>
        <div>
          <AuthContext/>
        </div>
      </div>
    </div>
  );
};

export default App;
