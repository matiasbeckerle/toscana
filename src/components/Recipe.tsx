import React from 'react';

type RecipeProps = {
  water: number,
  salt: number
};

type RecipeState = {
};

export default class Recipe extends React.Component<RecipeProps, RecipeState> {
  state: RecipeState = {
  };

  calculateQuantity = (percentage: number) => {
    return (1000 * percentage) / 100;
  };

  render() {
    return (
      <dl>
        <dt>Flour (100%)</dt>
        <dd>1000<abbr title="grams">gr</abbr></dd>
        <dt>Water ({this.props.water}%)</dt>
        <dd>{this.calculateQuantity(this.props.water)}<abbr title="grams">gr</abbr></dd>
        <dt>Salt ({this.props.salt}%)</dt>
        <dd>{this.calculateQuantity(this.props.salt)}<abbr title="grams">gr</abbr></dd>
      </dl>
    );
  }
}
