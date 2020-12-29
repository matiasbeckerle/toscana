import React from 'react';
import { RecipeContainer } from './components/RecipeContainer';
import './App.css';

type AppProps = {};
type AppState = {
  selectedRecipe: string
};

export default class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    selectedRecipe: 'pizza'
  };
  
  pickRecipe = (e: React.FormEvent<HTMLButtonElement>): void => {
    const recipe = e.currentTarget.value;
    this.setState((_state) => ({
      selectedRecipe: recipe,
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Toscana</h1>
          <h2>Dough calculator</h2>
        </header>
        <button onClick={this.pickRecipe} value="pizza">Pizza Napoletana</button>
        <button onClick={this.pickRecipe} value="bread">Bread</button>
        <button onClick={this.pickRecipe} value="focaccia">Focaccia alle olive</button>
        <RecipeContainer recipe={this.state.selectedRecipe} />
      </div>
    );
  }
}
