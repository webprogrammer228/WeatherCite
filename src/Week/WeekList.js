import WeekItem from "./WeekItem";

function WeekList({ folder = []}) {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Погода на 3 дня:</h2>
      {Object.keys(folder).map((el) => {
        return <WeekItem key={el * Math.random()} folder={folder[el]} />;
      })}
    </div>
  );
}

export default WeekList;
