import React from 'react';
import './App.css';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! This is a static message.");
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  render() {
    return (
      <div className="App">
        <h1>React Event Handling Examples</h1>

        {/* Counter with multiple handlers */}
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        {/* Function with argument */}
        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
          Say Welcome
        </button>

        <hr />

        {/* Synthetic event */}
        <button onClick={this.handleSyntheticEvent}>OnPress</button>

        <hr />

        {/* Currency converter component */}
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
