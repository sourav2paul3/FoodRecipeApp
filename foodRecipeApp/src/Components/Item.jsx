import styles from "../css/Item.module.css";
export function Item({ ingredient }) {
  return (
    <div>
      <div className={styles.ingredientContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt=""
          ></img>
        </div>

        <div className={styles.nameContainer}>
          <div className={styles.name}>{ingredient.name}</div>
          <div className={styles.amount}>
            {ingredient.amount} {ingredient.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
