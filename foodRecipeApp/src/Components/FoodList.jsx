import { FoodItem } from "./FoodItem";

export function FoodLiist({ foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
