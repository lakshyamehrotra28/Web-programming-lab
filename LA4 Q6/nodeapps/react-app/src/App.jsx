import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import { fetchWeather } from "./utils/api";

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <Dashboard weather={weather} />
    </div>
  );
}

export default App;