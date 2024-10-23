import React, { useState } from "react";
import Contries from "./components/countries";
import Loader from "./components/Loader";

export default function App() {
  const [hasLoaded, setLoaded] = useState(false);
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const [searchedText, setsearchedText] = useState("");
  const [isHideVisited, setIsHideVisited] = useState(false);

  // search handler
  const changeHandler = (text) => {
    // put the search text and push in state
    if (!text) {
      setUrl("https://restcountries.com/v3.1/all");
      setIsHideVisited(false);
      setsearchedText(text);
      return;
    }
    setIsHideVisited(true);
    setUrl(`https://restcountries.com/v3.1/name/${text}`);
    setsearchedText(text);
  };

  const loadPage = () => {
    setLoaded(true);
    console.log("loaded");
  };

  return (
    <>
      {!hasLoaded && <Loader />}
      <Contries
        isHideVisited={isHideVisited}
        loadPage={loadPage}
        url={url}
        changeHandler={changeHandler}
        searchedText={searchedText}
      />
    </>
  );
}
