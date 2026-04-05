function Dashboard({ weather }) {
  if (!weather || !weather.main) return <p>No data available</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default Dashboard;