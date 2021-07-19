import { useState, useEffect } from "react";
import { getForecastInfo } from "../api";
import Preloader from "../preloader/Preloader";
import WeekList from "./WeekList";

function Week() {
  const [folder, setFolder] = useState([]);
  useEffect(() => {
    getForecastInfo().then((data) => {
      setFolder(data.forecast);
    });
  }, []);

  const dayCatalog = [];
  return (
    <div>
      {folder.length ? (
        !(<Preloader />)
      ) : (
        <WeekList folder={folder} dayCatalog={dayCatalog} />
      )}
    </div>
  );
}

export default Week;
