import { Item } from "./Item";

export function IngredientsList({food}){
    return <div> {food.extendedIngredients.map((ingredient) => (
                 <Item ingredient={ingredient}/>
                ))}</div>
}