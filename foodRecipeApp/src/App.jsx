import { useState } from "react";
import { SearchComponent } from "./Components/SearchComponents";
import { FoodLiist } from "./Components/FoodList";
import { Nav } from "./Components/Nav";
import "./App.css";
import { Container } from "./Components/Container";
import { InnerContainer } from "./Components/InnerContainer";
import { FoodDetails } from "./Components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <div className="App">
      <Nav />
      <SearchComponent foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodLiist foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
