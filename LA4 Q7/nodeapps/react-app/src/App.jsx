import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import BookList from "./components/BookList";
import { fetchBooks } from "./utils/api";

function App() {
  const [books, setBooks] = useState(null);

  const handleSearch = async (query) => {
    const data = await fetchBooks(query);
    setBooks(data);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
}

export default App;