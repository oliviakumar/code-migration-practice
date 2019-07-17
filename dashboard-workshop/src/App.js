import React, { Component } from 'react';
import './App.css';
// import Counter from './components/Counter/Counter';
import CounterList from './components/CounterList/CounterList';

class App extends Component {
  state = {
    counters: [
      { value: 0 },
      { value: 2 },
      { value: 4 },
      { value: 7 },
    ],
    initValue: 0,
  }

  // inClick(i) { // TODO difference????
  inClick = (i) => {
    const counters = {...this.state.counters};
    counters[i].value += 1;
    this.setState({...counters});
  }

  deClick = (i) => {
    const counters = {...this.state.counters};
    counters[i].value -= 1;
    this.setState({...counters});
  }

  removeCounter = (id) => {
    const counters = [...this.state.counters];
    counters.splice(id, 1);
    this.setState({counters});
  }

  addCounter = () => {
    const counters = [...this.state.counters];
    counters.push({value: this.state.initValue});
    // counters.push( <Counter counter={counters.initValue}/>);
    console.log(counters[3].id);
    this.setState({counters});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Counter counter={0} style={buttonStyle} /> */}
          {/* <Counter counter={0} style={styleAlt}/> */}
          <CounterList
            style={buttonStyle}
            counters={this.state.counters}
            inClick={this.inClick}
            deClick={this.deClick}
            removeCounter={this.removeCounter}
            addCounter={this.addCounter}
          />
        </header>
      </div>
    );
  }
}

const buttonStyle = {
  backgroundColor: 'green',
  padding: '8px',
  border: '1px solid #eee',
  height: '100px',
  width: '100px',
  textAlign: 'center',
  fontSize: '75px',
};

const styleAlt = {
  backgroundColor: 'lightpink',
  margin: {
    // jss-plugin-expand gives more readable syntax
    top: 5, // jss-plugin-default-unit makes this 5px
    right: 0,
    bottom: 0,
    left: '1rem'
  },
  // '& span': {
  //   // jss-plugin-nested applies this to a child span
  //   fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
  // }
}

// const useStyles = createUseStyles({
//   myButton: {
//     color: 'green',
//     margin: {
//       // jss-plugin-expand gives more readable syntax
//       top: 5, // jss-plugin-default-unit makes this 5px
//       right: 0,
//       bottom: 0,
//       left: '1rem'
//     },
//     '& span': {
//       // jss-plugin-nested applies this to a child span
//       fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
//     }
//   },
//   myLabel: {
//     fontStyle: 'italic'
//   }
// })

// ReactDOM.render(
//   App,
//   document.getElementById('root')
// );
export default App;