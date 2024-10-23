import { useEffect, useState } from "react";
import MyFetch from "../fetch/MyFetch";
import Country from "./Country";
import Header from "./header";
import {
  getVisiteData,
  removeItem,
  setNewVisitedData,
} from "./lsIntegration/localStorage";
import VisitedContainer from "./VisitedContainer";

function Contries({
  loadPage,
  url,
  changeHandler,
  searchedText,
  isHideVisited,
}) {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    MyFetch(url)
      .then((responseCountries) => {
        setCountries(responseCountries);
        loadPage ? loadPage() : null;

        // handle re-render visited datas
        if (visitedCountry.length === getVisiteData().length) return;

        // get all countries which mached with localStorage ids
        for (let id of getVisiteData()) {
          let res = responseCountries.find((c) => c.cca2 == id);

          setVisitedCountry((pre) => [...pre, res]);
        }
      })
      .catch((error) => {
        setCountries(["NO Data Found"]);
        console.log("data is not found");
      });
  }, [url]);

  const visitedCountryHandler = (country) => {
    if (visitedCountry.includes(country)) {
      return;
    }
    if (!visitedCountry.includes(country)) {
      setVisitedCountry([...visitedCountry, country]);
    }
    setNewVisitedData(country.cca2);
  };

  const removeVisitedCountryHandler = (country) => {
    removeItem(country);
    const filteredCountries = visitedCountry.filter((c) => c !== country);

    setVisitedCountry(filteredCountries);
    console.log("removed", country.cca2);
  };
  return (
    <>
      <Header changeHandler={changeHandler} searchedText={searchedText} />
      <div className="mt-7">
        {!isHideVisited && (
          <VisitedContainer
            visitedCuntries={visitedCountry}
            removeVisitedCountryHandler={removeVisitedCountryHandler}
          />
        )}
      </div>
      <div className={`${countries.length === 1 ? "noDataFound" : "Crid"}`}>
        {countries.length === 1 ? (
          <h2 className="text-3xl">No data found</h2>
        ) : (
          <Country
            visitedCountryHandler={visitedCountryHandler}
            countriesData={countries}
          />
        )}
      </div>
    </>
  );
}

export default Contries;
