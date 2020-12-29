import React from 'react';
import { RecipeContainer } from './components/RecipeContainer';
import { Recipe } from './models/recipe';
import './App.css';

type AppProps = {
  recipes: Array<Recipe>
};

type AppState = {
  selectedRecipe: Recipe
};

export default class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    selectedRecipe: this.props.recipes[0]
  };

  pickRecipe = (e: React.FormEvent<HTMLButtonElement>): void => {
    const recipeCode = e.currentTarget.value;
    const recipe = this.props.recipes.find(({ code }) => code === recipeCode);
    if (!recipe) return;
    this.setState((_state) => ({
      selectedRecipe: recipe,
    }));
  };

  render() {
    const recipes = this.props.recipes.map((recipe, _index) => {
      return (
        <li key={recipe.code}>
          <button onClick={this.pickRecipe} value={recipe.code}>{recipe.name}</button>
        </li>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Toscana</h1>
          <h2>Dough calculator</h2>
        </header>
        {recipes}
        <RecipeContainer recipe={this.state.selectedRecipe} />
      </div>
    );
  }
}
