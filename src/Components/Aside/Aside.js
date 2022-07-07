import "./Aside.css";
import jeremyPicture from "../../images/image-jeremy.png";

const Aside = (props) => {
  return (
    <aside className="aside-box">
      <div className="profile-box">
        <div className="profile-image__box">
          <img className="profile-image" src={jeremyPicture} alt="jeremy" />
        </div>
        <p className="profile-report">Report for</p>
        <h2 className="profile-name">Jeremy Robson</h2>
      </div>

      <a className="link" href="#daily">
        Daily
      </a>
      <a className="link" href="#weekly">
        Weekly
      </a>
      <a className="link" href="#monthly">
        Monthly
      </a>
    </aside>
  );
};

export default Aside;
