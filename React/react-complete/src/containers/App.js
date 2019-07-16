import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      {name: 'olivia', height: '62'}, // id: ''
      {name: 'nicole', height: '60'},
      {name: 'hannah', height: '69'},
    ],
    showPersons: true,
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

  handleEntryChange = (event, i) => {
    // const personIndex = this.state.persons.findIndex(p => {
    //   return p === i;
    // });
    // const persons = [...this.state.persons]; // const persons = {...this.state.persons};
    const persons2 = {
      ...this.state.persons[i]
    };

    // const person = Object.assign({}, this.state.persons[i]); // console.log(person);
    // console.log(persons);
    // console.log(persons2);
    // persons[i].name = event.target.value;
    persons2.name = event.target.value;
    this.setState({persons2});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (i) => {
    // arrays are reference types
    // when you get state from array, get pt to the original object/original state
    console.log('clicked');
    // better to make a copy with .slice()
    // const persons = this.state.persons.slice();
    // ES6 spread operator
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({persons});
    console.log(persons);
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
  
    if (this.state.showPersons) {
      persons = (<div>

        {this.state.persons.map((p, i) => {
          if (i === 2) {
            return <Person
              key={i}
              name={p.name}
              height={p.height}
              changed={(event) => this.handleEntryChange(event, i)}
              clicked={() => this.deletePersonHandler(i)}
            > tee hee 69 </Person>;
          } else {
              return <Person
                key={i}
                name={p.name}
                height={p.height}
                changed={(event) => this.handleEntryChange(event, i)}
                clicked={(event) => this.deletePersonHandler(event, i)}
                // TODO: how to pass i to handleEntryChange??
                // TODO: why do you not need to pass i in the first parens???? and error if you do...
                // TODO: why does event not need to be accepted by deletePersonHandler????????
              />;
          }
        })}
      </div>)
    }

    return (
      <div className="App">
        <h1> React App </h1>
        {/* <button onClick={() => this.handleClick(0)}> switch name </button> */}
        <button style={style} onClick={this.togglePersonHandler}> switch name </button>
        {persons}
        
        {/* {this.state.persons[0].name} */}
        {/* <Person name="nicole" height="60"/> */}
        {/* <Person name="hannah" height="69"> tee hee 69 </Person> */}
      </div>
    );
  }
}
export default App;
                {/* changed={(event, i) => this.handleEntryChange(event, i)} */}


          {/* this.state.showPersons === true ?
            <div>
            {this.state.persons.map((p, i) => {
              if (i === 2) {
                return <Person
                  key={i}
                  name={p.name}
                  height={p.height}
                > tee hee 69 </Person>;
              } else {
                  return <Person
                    key={i}
                    name={p.name}
                    height={p.height}
                    changed={this.handleEntryChange}
                    // TODO: how to pass i to handleEntryChange??
                  />;
              }
            })}
          </div> : null */}