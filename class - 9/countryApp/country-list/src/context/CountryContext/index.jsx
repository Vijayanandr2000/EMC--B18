import { createContext, useEffect, useMemo, useState } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getAllCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const datas = await response.json();
      setCountries(datas);
    } catch (error) {
      console.error("Error fetching countries:", error);
      // alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  // const filteredCountries = (search) =>
  //   countries.filter((country) => {
  //     return country.name.common.toLowerCase().includes(search.toLowerCase());
  //   });

  // useEffect(() => {
  //   filteredCountries(search);
  // }, [search]);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, countries]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        loading,
        setSearch,
        search,
        filteredCountries,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
