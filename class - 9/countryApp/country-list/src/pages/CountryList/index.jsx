import React, { useCallback, useContext } from "react";
import { CountryContext } from "../../context/CountryContext";

const CountryList = () => {
  const { loading, filteredCountries, setSearch } = useContext(CountryContext);

  const handleSearch = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <h1>CountryList</h1>
      <div>
        <input
          type="text"
          placeholder="Search the country by name"
          onChange={handleSearch}
        />
      </div>
      <hr />
      {filteredCountries.map((country, idx) => {
        return (
          <div
            style={{
              border: "1px solid white",
              marginBottom: "10px",
              maxWidth: "200px",
              padding: "10px",
            }}
            key={idx}
          >
            <img src={country.flags.png} alt="" width={100} height={100} />
            <h3>{country.name.common}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CountryList;
