import React, { useState } from "react";

function App() {
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");
  const [result, setResult] = useState("");

  const calculateGrade = () => {
    const avg = (Number(m1) + Number(m2) + Number(m3)) / 3;

    let grade = "";

    if (avg >= 90) grade = "A";
    else if (avg >= 75) grade = "B";
    else if (avg >= 60) grade = "C";
    else grade = "Fail";

    setResult(`Average: ${avg.toFixed(2)} | Grade: ${grade}`);
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
        backgroundColor: "#e6f2ff"
      }}
    >
      <h1>Grade Calculator</h1>

      <input
        type="number"
        placeholder="Subject 1"
        value={m1}
        onChange={(e) => setM1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Subject 2"
        value={m2}
        onChange={(e) => setM2(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Subject 3"
        value={m3}
        onChange={(e) => setM3(e.target.value)}
      />
      <br /><br />

      <button onClick={calculateGrade}>
        Calculate Grade
      </button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;