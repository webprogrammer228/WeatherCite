function WeatherIcons(props) {
  const { dayCatalog = [] } = props;
  return (
    <>
      {Object.keys(dayCatalog).map((elem) => {
        if (elem.includes('condition') && dayCatalog[elem]) {
        return <td key={dayCatalog[elem].code}><img  src={dayCatalog[elem].icon} alt={dayCatalog[elem].text} /></td>
        }
        else return null;
      })}
    </>
  );
}

export default WeatherIcons;
