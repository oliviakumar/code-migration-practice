import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Olivia", age: 25},
      { name: "Sherry", age: 26},
      { name: "Cathy", age: 24}
    ],
    otherState: 'other val'
  };

  switchNameHandler = () => {
    console.log("was clicked!");
    this.setState( {
      persons: [
        { name: "Liv"}
      ]
    } );
  }
  render() {
    return (
      <div className="App">
        <h1> React App </h1>
        <p>Hi</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name}> What is happening? </Person>
        <Person name={this.state.persons[1].name}> What is happening? </Person>
        <Person name={this.state.persons[2].name}> What is happening? </Person>

      </div>
    );
                              // where?    // config // # of children nested inside first arg
    // return React.createElement('div', null, 'h1', 'Hi i\'m a react app!!');
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));

  }
}

export default App;
