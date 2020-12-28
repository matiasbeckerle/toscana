import React from 'react';
import Recipe from './components/Recipe';
import './App.css';

type AppProps = {};
type AppState = {};

export default class App extends React.Component<AppProps, AppState> {
  handleClick = (e: React.FormEvent<HTMLButtonElement>): void => {
    alert(e.currentTarget.value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Toscana</h1>
          <h2>Dough calculator</h2>
        </header>
        <button onClick={this.handleClick} value="pizza">Pizza Napoletana</button>
        <button onClick={this.handleClick} value="bread">Bread</button>
        <Recipe water={58} salt={2.5} />
      </div>
    );
  }
}
