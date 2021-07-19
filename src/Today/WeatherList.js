import WeatherItem from "./WeatherItem";

function WeatherList({ catalog = [], newCatalog = [] }) {
  return (
    <div>
      {Object.keys(catalog).map((el) => {
        if (el.includes("name") && catalog[el]) {
          return (
            <WeatherItem
              key={el * Math.random()}
              catalog={catalog}
              newCatalog={newCatalog}
            />
          );
        } else return null;
      })}
    </div>
  );
}

export default WeatherList;
