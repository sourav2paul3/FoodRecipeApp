import { useEffect } from "react";
import { useState } from "react";

export function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const API_KEY = "9f601c1d559d4d4b9dff464e4b513b00";
  const ulr = `https://api.spoonacular.com/recipes/${foodId}/information`;
  useEffect(() => {
    if (foodId) {
      async function fetchFood() {
        const res = await fetch(`${ulr}?apiKey=${API_KEY}`);
        const jsonData = await res.json();
        setFood(jsonData);
      }
      fetchFood();
    }
  }, [foodId]);
  return (
    <div>
      Food Details {foodId} {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}
