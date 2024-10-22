import DisplayCountry from "./DisplayCountry";

function Country({ countriesData = [], visitedCountryHandler = null }) {
  return (
    <>
      {countriesData.map((country, i) => {
        return (
          <div className="country" key={i}>
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
