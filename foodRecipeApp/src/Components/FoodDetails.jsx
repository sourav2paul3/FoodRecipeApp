import { useEffect } from "react";
import { useState } from "react";
import styles from "../css/foodDetails.module.css";
import demoResponse from "../DemoResponse.json";
import greenIcon from "../images/Green.png";
import redIcon from "../images/Red.png";
import vegan from "../images/Vegan.png";
import { IngredientsList } from "./IngredientsList";

export function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "3123cc3661734b41bc557c7fbb978444";
  const ulr = `https://api.spoonacular.com/recipes/${foodId}/information`;
  useEffect(() => {
    if (foodId) {
      async function fetchFood() {
        const res = await fetch(`${ulr}?apiKey=${API_KEY}`);
        const jsonData = await res.json();
        //const jsonData = demoResponse;
        setFood(jsonData);
        setIsLoading(false);
        console.log(jsonData);
      }
      fetchFood();
    }
  }, [foodId]);
  return (
    <div>
      {isLoading ? (
        <p>
          <strong>Please select a dish</strong>
        </p>
      ) : (
        <div className={styles.recipeCard}>
          <h1 className={styles.recipeName}>{food.title}</h1>
          <img className={styles.recipeImage} src={food.image} alt="" />
          <div className={styles.recipeDetails}>
            <span>
              <strong>⏰{food.readyInMinutes} Minutes</strong>
            </span>
            <span>
              <strong>👪Serves {food.servings}</strong>
            </span>
            <div className={styles.logoContainer}>
              <span>
                <img
                  className={styles.logoCategory}
                  src={food.vegetarian ? greenIcon : redIcon}
                  alt=""
                />
              </span>
              <span>
                {food.vegan && (
                  <img className={styles.veganLogo} src={vegan} alt="" />
                )}
              </span>
            </div>
          </div>
          <div>
            <span>
              <strong>
                ${(food.pricePerServing / 100).toFixed(2)} Per serving{" "}
              </strong>
            </span>
          </div>
          <div>
            <h2>Ingredients</h2>
            <IngredientsList food={food} />
            <h2>Instructions</h2>
          </div>
          <div className={styles.recipeInstructions}>
            <ol>
              {food.analyzedInstructions &&
                food.analyzedInstructions.length > 0 &&
                food.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
