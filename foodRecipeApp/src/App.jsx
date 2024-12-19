import { useState } from "react";
import { SearchComponent } from "./Components/SearchComponents";
import { FoodLiist } from "./Components/FoodList";
import { Nav } from "./Components/Nav";
import "./App.css";
import { Container } from "./Components/Container";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <SearchComponent foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <FoodLiist foodData={foodData} />
      </Container>
    </div>
  );
}

export default App;
