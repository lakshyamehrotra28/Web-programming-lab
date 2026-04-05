import { useState } from "react";

function Search({ onSearch }) {
  const [country, setCountry] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={() => country && onSearch(country)}>
        Search
      </button>
    </div>
  );
}

export default Search;