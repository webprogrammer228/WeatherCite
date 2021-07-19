import "./Item.css";
import WeatherIcons from "./WeatherIcons";

function Item(props) {
  const { dayCatalog } = props;
  return (
    <>
      <WeatherIcons dayCatalog={dayCatalog}/>
      {Object.keys(dayCatalog).map((el, index) => {
        if (
          el !== "condition" &&
          el !== "totalprecip_mm" &&
          el !== "totalprecip_in" &&
          el !== "daily_will_it_rain" &&
          el !== "daily_chance_of_rain" &&
          el !== "daily_will_it_snow" &&
          el !== "daily_chance_of_snow" &&
          el !== "maxtemp_f" &&
          el !== "mintemp_f" &&
          el !== "avgtemp_f" &&
          el !== "avgvis_km" &&
          el !== "avgvis_miles" &&
          el !== "avghumidity" &&
          el !== "uv"
        )
          return (
            <td key={index + Math.random()}>
              <p>
                {el.includes("maxtemp_c")
                  ? "Максимальная температура:" + dayCatalog[el] + " C"
                  : ""}
                {el.includes("mintemp_c")
                  ? "Минимальная температура:" + dayCatalog[el] + " C"
                  : null}
                {el.includes("avgtemp_c")
                  ? "Средняя температура: " + dayCatalog[el] + " C"
                  : null}
                {el.includes("maxwind_mph")
                  ? "Скорость ветра м/с: " + dayCatalog[el]
                  : null}
                {el.includes("maxwind_kph")
                  ? "Скорость ветра км/ч: " + dayCatalog[el]
                  : ""}
              </p>
            </td>
          );
        else return null;
      })}
    </>
  );
}

export default Item;
