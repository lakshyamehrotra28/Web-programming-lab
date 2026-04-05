import React from "react";

// Functional Component using Props
function Welcome(props) {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>Hello, {props.name}!</h2>
      <p>Welcome to {props.city}.</p>
      <p>This is a personalized welcome message using React props.</p>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Welcome Application</h1>

      {/* Passing Props */}
      <Welcome name="Lakshya" city="Vellore" />
    </div>
  );
}

export default App;