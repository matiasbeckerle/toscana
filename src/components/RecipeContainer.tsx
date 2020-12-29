import React from 'react';
import { Recipe } from './../models/recipe';

type RecipeProps = {
  recipe: string
};

type RecipeState = {
  recipes: Array<Recipe>
};

export class RecipeContainer extends React.Component<RecipeProps, RecipeState> {
  state: RecipeState = {
    recipes: [
      { code: 'pizza', water: 58, salt: 2.5 },
      { code: 'bread', water: 60, salt: 2 },
      { code: 'focaccia', water: 70, salt: 3 }
    ]
  };

  calculateQuantity = (percentage: number) => {
    return (1000 * percentage) / 100;
  };

  render() {
    const recipe = this.state.recipes.find(({ code }) => code === this.props.recipe);
    if (!recipe)
      return (<p>You must select a recipe first.</p>);

    return (
      <dl>
        <dt>Flour (100%)</dt>
        <dd>1000<abbr title="grams">gr</abbr></dd>
        <dt>Water ({recipe.water}%)</dt>
        <dd>{this.calculateQuantity(recipe.water)}<abbr title="grams">gr</abbr></dd>
        <dt>Salt ({recipe.salt}%)</dt>
        <dd>{this.calculateQuantity(recipe.salt)}<abbr title="grams">gr</abbr></dd>
      </dl>
    );
  }
}
