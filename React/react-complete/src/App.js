import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
 

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

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={this.nameChangedHandler}/>
          })}
      </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1> React App </h1>
        <p className={classes.join(' ')}>Will the real slim shady please stand up?</p>

        <button
        style={style}
        onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}
export default App;