import "./App.css";
import data from "./data/data.json";
import Aside from "./Components/Aside/Aside";
import Grid from "./Components/Grid/Grid";
//Data that I will be fetching from a json file at one point

console.log(data[0].title);
console.table(data);
console.log(data[0].timeframes);

function App() {
  return (
    <main className="main-box">
      <Aside />
      <Grid />
    </main>
  );
}

export default App;
