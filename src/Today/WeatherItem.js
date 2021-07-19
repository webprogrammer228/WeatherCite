import "./WeatherItem.css";

function WeatherItem(props) {
  const { catalog, newCatalog } = props;
  const date = new Date();
  let day = date.getDay();

  if (day === 1) {
    day = "Понедельник";
  } else if (day === 2) {
    day = "Вторник";
  } else if (day === 3) {
    day = "Среда";
  } else if (day === 4) {
    day = "Четверг";
  } else if (day === 5) {
    day = "Пятница";
  } else if (day === 6) {
    day = "Суббота";
  } else {
    day = "Воскресенье";
  }

  return (
    <div className="weatherBlock">
      <div className="card">
        <div className="top-block">
          <div className="icon">
            {Object.keys(newCatalog).map((el) => {
              if (el.includes("condition") && newCatalog[el]) {
                return (
                  <img
                    key={newCatalog[el].code}
                    src={newCatalog[el].icon}
                    alt={newCatalog[el].text}
                  />
                );
              } else return null;
            })}
          </div>

          <div className="city">
            <h1>{catalog.name}</h1>
            <h2>{catalog.country}</h2>
            <h3>
              {day}, {catalog.localtime.slice(11)}
            </h3>
          </div>
        </div>

        <div className="temperature">
          <h2>Облачность : {newCatalog.cloud}</h2>
          <h2>Температура: {newCatalog.temp_c} &#176;C</h2>
          <h3>Ощущается, как : {newCatalog.feelslike_c} &#176;C</h3>
          <h4>Ветер: {newCatalog.wind_kph} км/ч</h4>
        </div>
      </div>
    </div>
  );
}

export default WeatherItem;
