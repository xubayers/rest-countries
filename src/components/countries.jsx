import { useEffect, useState } from "react";
import MyFetch from "../fetch/MyFetch";
import Country from "./Country";
import Header from "./header";
import { getVisiteData, setNewVisitedData } from "./lsIntegration/localStorage";
import VisitedContainer from "./VisitedContainer";

function Contries({ loadPage, url = "https://restcountries.com/v3.1/all" }) {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [searchedText, setsearchedText] = useState("");

  useEffect(() => {
    MyFetch(url)
      .then((responseCountries) => {
        setCountries(responseCountries);
        loadPage ? loadPage() : null;

        for (let id of getVisiteData()) {
          let res = responseCountries.filter((c) => c.cca2 == id)[0];
          setVisitedCountry((pre) => [...pre, res]);
        }
      })
      .catch((err) => {
        console.log("data is not loaded please try again", err);
      });
  }, []);

  const visitedCountryHandler = (country) => {
    if (visitedCountry.includes(country)) {
      return;
    }
    setVisitedCountry([...visitedCountry, country]);
    setNewVisitedData(country.cca2);

    // console.log(getVisiteData());
  };

  console.log(visitedCountry);

  const changeHandler = (text) => {
    setsearchedText(text);
    Contries(`https://restcountries.com/v3.1/name/${text}`);
  };
  return (
    <>
      <Header changeHandler={changeHandler} searchedText={searchedText} />
      <div className="mt-7">
        <VisitedContainer visitedCuntries={visitedCountry} />
      </div>
      <div className="Crid">
        <Country
          visitedCountryHandler={visitedCountryHandler}
          countriesData={countries}
        />
      </div>
    </>
  );
}

export default Contries;
