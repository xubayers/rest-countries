import React, { useState } from "react";
import Contries from "./components/countries";
import Loader from "./components/Loader";

export default function App() {
  const [hasLoaded, setLoaded] = useState(false);

  const loadPage = () => {
    setLoaded(true);
    console.log("loaded");
  };

  return (
    <>
      {!hasLoaded && <Loader />}
      <Contries loadPage={loadPage} />
    </>
  );
}
