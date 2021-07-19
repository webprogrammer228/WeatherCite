import Item from "./Item";
import moment from "moment";

function WeekItem(props) {
  const { folder } = props;

  return (
    <div>
      <table className="resp-tab">
        {folder.map((el, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th colSpan="3">{moment(el.date).format("DD.MM.YYYY")}</th>
              </tr>

              <tr>
                <Item dayCatalog={el.day} />
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default WeekItem;
