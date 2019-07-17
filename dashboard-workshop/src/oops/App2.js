import React from 'react';
import './App.css';

class App extends React.Component {
// cconst App = {
  state = {
    counter: 0,
  };

  decrementCount() {
    const { counter } = this.state;
    // counter--;
    this.setState({counter}, counter-1)
  }

  render() {
    const { counter } = this.props;
    return (
      // const counter = 0;
      <div className="App">
        <header className="App-header">
          <h1>
            <button onClick={this.decrementCount}> - </button>
            {counter}
            {/* <h1> {counter} </h1> */}
            <button> + </button>
          </h1>
        </header>
      </div>
    );
  }
}

// ReactDOM.render(
//   App,
//   document.getElementById('root')
// );
export default App;