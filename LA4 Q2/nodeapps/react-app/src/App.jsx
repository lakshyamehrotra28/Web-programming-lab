import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        border: "2px solid black",
        padding: "20px",
        width: "300px",
        margin: "auto",
        backgroundColor: "#f2f2f2"
      }}
    >
      <h1>Basic Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <button onClick={add} style={{ marginRight: "10px" }}>
        Add
      </button>

      <button onClick={subtract}>
        Subtract
      </button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;