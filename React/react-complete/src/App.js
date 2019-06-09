                // hook is used to manage state in functional component
// import React, { useState } from 'react';
import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';


class App extends Component {
// const app = props => {
  // returns array with two elems
    // gives access to persons object   // function that allows you to set person's state
  // const [ personsState, setPersonsState ] = useState({ // adds state management to functional components
  //   persons: [
  //     { name: "Olivia", age: 25},
  //     { name: "Asher", age: 26},
  //     { name: "Cathy", age: 24}
  //   ],
  //   otherState: 'other val'
  // })

  state = {
    persons: [
      { id: '', name: "Olivia", age: 25},
      { id: '', name: "Asher", age: 26},
      { id: '', name: "Cathy", age: 24}
    ],
    otherState: 'other val',
    showPersons: false
  };
  // const [otherState, setOtherState] = useState('some other val');

  // console.log(personsState, otherState);

  // const switchNameHandler = () => {
  //   console.log("was clicked!");
  //   // this.setState({
  //   setPersonsState({
  //     persons: [
  //       { name: "Liv", age: 25},
  //       { name: "Sherry", age: 27},
  //       { name: "Cathy", age: 24}
  //     ],
  //     otherState: personsState.otherState
  //   });
  // };
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
    // const persons = this.state.persons;
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
      // backgroundColor: 'white',
      backgroundColor: 'green',
      font: 'inherit',
      bonder: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // assign property with radium
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}> What is happening? </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Catherine')}
            changed={this.nameChangedHandler}> What is happening? </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}> What is happening? </Person> */}
          {/* <Person name={this.state.persons[2].name}> What is happening? </Person> */}
          {/* only exists in class based react components */}
      </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    // let classes = ['red', 'bold'].join(' ');
    // let classes = []; // let is es6 version of var
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

        {/* <p className={classes}>Will the real slim shady please stand up?</p> */}
                        {/* // not inside class so don't need this keyword */}
        {/* <button onClick={this.switchNameHandler.bind(this, 'Olivia Kumar')}>Switch Name</button> */}
        <button
        style={style}
        // onClick={() => this.switchNameHandler('Olivia Kumar')}>Switch Name</button>
        onClick={this.togglePersonHandler}>Switch Name</button>

                        {/* // personsState is functional component */}

        {persons}
      </div>
    );
                              // where?    // config // # of children nested inside first arg
    // return React.createElement('div', null, 'h1', 'Hi i\'m a react app!!');
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));

  }
}
              // higher ordered component
export default Radium(App);
// export default app;

// state = ;


// switchNameHandler = () => {
//   console.log("was clicked!");
//   this.setState( {
//     persons: [
//       { name: "Liv"}
//     ]
//   } );
// }