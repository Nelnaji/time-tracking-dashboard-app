import "./Content.css";
import Card from "../Card/Card";
import Aside from "../Aside/Aside";

const Content = ({ myData }) => {
  return (
    <section className="grid-section">
      <Aside />
      <Card individualData={myData} />
    </section>
  );
};

export default Content;
