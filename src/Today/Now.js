import { useState, useEffect } from "react";
import { getApiInfo } from "../api";
import Preloader from "../preloader/Preloader";
import WeatherList from "./WeatherList";

function Today() {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    getApiInfo().then((data) => {
      setCatalog(data.location);
    });
  }, []);

  const [newCatalog, setNewCatalog] = useState([]);
  useEffect(() => {
    getApiInfo().then((data) => {
      setNewCatalog(data.current);
    });
  }, []);

  return (
    <div>
      {catalog.length ? (
        !(<Preloader />)
      ) : (
        <WeatherList catalog={catalog} newCatalog={newCatalog} />
      )}
    </div>
  );
}

export default Today;
