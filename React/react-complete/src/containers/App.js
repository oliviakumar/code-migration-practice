import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      {name: 'olivia', height: '62'},
      {name: 'nicole', height: '60'},
      {name: 'hannah', height: '69'},
    ]
  }
  handleClick(i) {
    const persons = {...this.state.persons};
    persons[i].name = 'liv';
    this.setState({...persons});
    
    // this.setState({persons: [//...this.state.persons,
    //   // this.state.persons[i]:
    //   ...{name: 'liv', height: '62'}
    //   // {name: 'nicole', height: '60'},
    //   // {name: 'hannah', height: '69'},
    // ]});
  }

  render() {
    return (
      <div className="App">
        <h1> React App </h1>
        <button onClick={() => this.handleClick(0)}> switch name </button>
        {this.state.persons.map((p, i) => {
          if (i === 2) {
            return <Person key={i} name={p.name} height={p.height}> tee hee 69 </Person>;
          } else
            return <Person key={i} name={p.name} height={p.height}/>;
        })}
        {/* {this.state.persons[0].name} */}
        {/* <Person name="nicole" height="60"/> */}
        {/* <Person name="hannah" height="69"> tee hee 69 </Person> */}
      </div>
    );
  }
}
export default App;