import DisplayCountry from "./DisplayCountry";

function Country({ countriesData, visitedCountryHandler }) {
  return (
    <>
      {countriesData.map((country) => {
        return (
          <div className="country" key={country.cca2}>
            <DisplayCountry
              country={country}
              visitedCountryHandler={visitedCountryHandler}
            />
          </div>
        );
      })}
    </>
  );
}

export default Country;
