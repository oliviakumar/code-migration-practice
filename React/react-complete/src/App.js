                // hook is used to manage state in functional component
// import React, { useState } from 'react';
import React, { Component } from 'react';

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
      { name: "Olivia", age: 25},
      { name: "Asher", age: 26},
      { name: "Cathy", age: 24}
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      bonder: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> React App </h1>
        <p>Hi</p>
                        {/* // not inside class so don't need this keyword */}
        {/* <button onClick={this.switchNameHandler.bind(this, 'Olivia Kumar')}>Switch Name</button> */}
        <button
        style={style}
        // onClick={() => this.switchNameHandler('Olivia Kumar')}>Switch Name</button>
        onClick={this.togglePersonHandler}>Switch Name</button>

                        {/* // personsState is functional component */}
        {
          this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}> What is happening? </Person>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Catherine')}
                changed={this.nameChangedHandler}> What is happening? </Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}> What is happening? </Person>
              {/* <Person name={this.state.persons[2].name}> What is happening? </Person> */}
              {/* only exists in class based react components */}
            </div> : null
        }
      </div>
    );
                              // where?    // config // # of children nested inside first arg
    // return React.createElement('div', null, 'h1', 'Hi i\'m a react app!!');
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));

  }
}

export default App;
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