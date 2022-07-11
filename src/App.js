import "./App.css";
import data from "./data/data.json";

import Content from "./Components/Grid/Content";
//Data that I will be fetching from a json file at one point

function App() {
  return (
    <main className="main-box">
      <Content myData={data} />
    </main>
  );
}

export default App;
