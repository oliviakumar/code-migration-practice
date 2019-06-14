import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: '', name: "Olivia", age: 25},
      { id: '', name: "Asher", age: 26},
      { id: '', name: "Cathy", age: 24}
    ],
    otherState: 'other val',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: "Liv", age: 25},
        { name: "Sherry", age: 27},
        { name: newName, age: 24}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Liv", age: 25},
        { name: "Sherry", age: 27},
        { name: event.target.value, age: 24}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      bonder: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);//'red');
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);//'bold');
    }

    return (
      <div className="App">
        <h1> React App </h1>
        <p className={assignedClasses.join(' ')}>Will the real slim shady please stand up?</p>

        <button
        style={style}
        onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}
export default App;