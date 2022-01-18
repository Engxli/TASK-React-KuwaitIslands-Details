import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islads from "../src/data/islands";

function App() {
  // eslint-disable-next-line
  let defaultIsland = {
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  };

  const [island, setIsland] = useState(defaultIsland);
  const [visitors, setVisitors] = useState(islads.map((island) => 0));

  console.log("hi");
  console.log(visitors);

  const changeVisitorCount = (id) => {
    let visitorsArray = visitors.map((visitor) => visitor);
    visitorsArray[id] += 1;
    setVisitors(visitorsArray);
  };
  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} visitors={visitors} />
        <IslandForm island={island} changeVisitorCount={changeVisitorCount} />
      </div>
    </div>
  );
}

export default App;
