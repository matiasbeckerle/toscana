import React from 'react';
import { Recipe } from './../models/recipe';

type RecipeProps = {
  recipe: Recipe
};

type RecipeState = {};

export class RecipeContainer extends React.Component<RecipeProps, RecipeState> {
  calculateQuantity = (percentage: number) => {
    return (1000 * percentage) / 100;
  };

  render() {
    return (
      <dl>
        <dt>Flour (100%)</dt>
        <dd>1000<abbr title="grams">gr</abbr></dd>
        <dt>Water ({this.props.recipe.water}%)</dt>
        <dd>{this.calculateQuantity(this.props.recipe.water)}<abbr title="grams">gr</abbr></dd>
        <dt>Salt ({this.props.recipe.salt}%)</dt>
        <dd>{this.calculateQuantity(this.props.recipe.salt)}<abbr title="grams">gr</abbr></dd>
      </dl>
    );
  }
}
