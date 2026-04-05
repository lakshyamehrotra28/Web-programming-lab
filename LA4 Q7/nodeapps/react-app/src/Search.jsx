import { useState } from "react";

function Search({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => onSearch(city)}>Search</button>
    </div>
  );
}

export default Search;