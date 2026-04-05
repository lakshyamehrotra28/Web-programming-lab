import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CountryList from "./components/CountryList";
import { fetchCountries } from "./utils/api";

function App() {
  const [countries, setCountries] = useState(null);

  const handleSearch = async (name) => {
    const data = await fetchCountries(name);
    setCountries(data);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <CountryList countries={countries} />
    </div>
  );
}

export default App;