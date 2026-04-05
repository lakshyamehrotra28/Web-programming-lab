import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  if (!countries) return null;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        marginTop: "20px"
      }}
    >
      {countries.map((c, index) => (
        <CountryCard key={index} country={c} />
      ))}
    </div>
  );
}

export default CountryList;