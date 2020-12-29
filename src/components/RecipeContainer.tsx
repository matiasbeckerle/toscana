import { Recipe } from './../models/recipe';

type RecipeProps = {
  recipe: Recipe
};

export const RecipeContainer = ({ recipe }: RecipeProps) =>
  <dl>
    <dt>Flour (100%)</dt>
    <dd>1000<abbr title="grams">gr</abbr></dd>
    <dt>Water ({recipe.water}%)</dt>
    <dd>{calculateQuantity(recipe.water)}<abbr title="grams">gr</abbr></dd>
    <dt>Salt ({recipe.salt}%)</dt>
    <dd>{calculateQuantity(recipe.salt)}<abbr title="grams">gr</abbr></dd>
  </dl>;

function calculateQuantity(percentage: number): number {
  return (1000 * percentage) / 100;
}
