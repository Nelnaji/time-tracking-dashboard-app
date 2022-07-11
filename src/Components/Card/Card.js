import "./Card.css";
import work from "../../images/icon-ellipsis.svg";
const Card = ({ individualData }) => {
  console.log(individualData);
  return (
    <div className="card-box">
      <div className="inside-box">
        <div className="title">
          <h3>Work</h3> <img src={work} alt="elipsis" />
        </div>
      </div>
    </div>
  );
};

export default Card;
