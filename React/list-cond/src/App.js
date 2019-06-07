import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }

  textChangeHandler = (event) => {
    // return text.length;
    this.setState({userInput: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <p>
          <input
            type="text"
            onChange={this.textChangeHandler}
            value={this.state.userInput}>
          </input>
        </p>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
