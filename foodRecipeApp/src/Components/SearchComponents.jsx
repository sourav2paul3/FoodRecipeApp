import { useEffect, useState } from "react";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9f601c1d559d4d4b9dff464e4b513b00";

export function SearchComponent({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      setFoodData(jsonData.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search for Recipe"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
