import { useEffect, useState } from "react";

export default function DisplayCountry({ country, visitedCountryHandler }) {
  const [visitBtnText, setVisitBtnText] = useState("Visit");
  useEffect(() => {}, [visitBtnText]);

  const visitedBtnHandler = (country) => {
    visitedCountryHandler(country);
    setVisitBtnText("Visited");
  };

  return (
    <>
      <img src={country?.flags.png} className="flag" />
      <h2 className="text-xl">{country?.name.common}</h2>
      <div className="flex">
        <button className="btn hover:bg-yellow-700">Details</button>
        <button
          onClick={() => visitedBtnHandler(country)}
          className="btn bg-green-600"
        >
          {visitBtnText}
        </button>
      </div>
    </>
  );
}
