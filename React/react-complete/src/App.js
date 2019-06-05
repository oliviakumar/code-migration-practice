                // hook is used to manage state in functional component
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // returns array with two elems
    // gives access to persons object   // function that allows you to set person's state
  const [ personsState, setPersonsState ] = useState({ // adds state management to functional components
    persons: [
      { name: "Olivia", age: 25},
      { name: "Asher", age: 26},
      { name: "Cathy", age: 24}
    ],
    otherState: 'other val'
  });

  const [otherState, setOtherState] = useState('some other val');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    console.log("was clicked!");
    // this.setState({
    setPersonsState({
      persons: [
        { name: "Liv", age: 25},
        { name: "Sherry", age: 27},
        { name: "Cathy", age: 24}
      ],
      otherState: personsState.otherState
    });
  };
  render() {
    return (
      <div className="App">
        <h1> React App </h1>
        <p>Hi</p>
                        {/* // not inside class so don't need this keyword */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
                        {/* // personsState is functional component */}
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}> What is happening? </Person>
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={this.switchNameHandler}> What is happening? </Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}> What is happening? </Person>
        {/* <Person name={this.state.persons[2].name}> What is happening? </Person> */}
        {/* only exists in class based react components */}
      </div>
    );
                              // where?    // config // # of children nested inside first arg
    // return React.createElement('div', null, 'h1', 'Hi i\'m a react app!!');
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));

  }
}

// export default App;
export default app;

// state = ;


// switchNameHandler = () => {
//   console.log("was clicked!");
//   this.setState( {
//     persons: [
//       { name: "Liv"}
//     ]
//   } );
// }