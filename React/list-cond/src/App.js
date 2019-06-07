import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
// import './Validation/Validation.css';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: '',
    lengthReq: false,
    id: ''
  }

  minLength = 5;

  textChangeHandler = (event) => {
    // return text.length;
    this.setState({userInput: event.target.value});
  }

  lengthReqHandler = () => {
    this.setState({lengthReq: true});
  }

  removeCharHandler = (charIndex) => {
    // const chars = [...this.state.userInput].split(''); // only for arrays?
    const chars = this.state.userInput.split('');
    chars.splice(charIndex, 1);
    this.setState({userInput: chars.join('')});

  }

  render() {
    const charList = this.state.userInput.split('').map((c, index) => {
      return <Char
        character={c}
        // key={this.state.id}/>;
        key={index}
        clicked={() => this.removeCharHandler(index)}
        />;
    });

    return (
      // this.state.userInput.length > 5 ?
      // lengthReq={lengthReqHandler} : 

      <div className="App">
          <input
            type="text"
            onChange={this.textChangeHandler}
            value={this.state.userInput}>
          </input>
          <Validation userInputLen={this.state.userInput.length}/>
        <p>{this.state.userInput}</p>
        {charList}
      </div> 
    );
  }
}

export default App;
