import { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
}

export default Search;