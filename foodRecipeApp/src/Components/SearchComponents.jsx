import { useEffect, useState } from "react";
import styles from "../css/search.module.css";
const url = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "3123cc3661734b41bc557c7fbb978444";
import demoResponse from "../DemoSearch.json";

export function SearchComponent({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      //const jsonData = demoResponse;
      setFoodData(jsonData.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for Recipe"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
