import React, { Component } from 'react';
import './App.css';
import Bubble from './Bubble';
import AddBubble from './AddBubble';


class App extends Component {
  // const index;

  state = {
    bubbles: [
      { name: 'olivia', age: 25, jacket: 'denim', id: 1},
      { name: 'cathy', age: 26, jacket: 'white', id: 2},
      { name: 'sherry', age: 24, jacket: 'black', id: 3},
    ],
    count: 4,
  }

  addBubble = (bubble) => {
    // bubble.id = Math.random();

    let countInc = this.state.count + 1;
    this.setState({
      count: countInc,
    });
    bubble.id = this.state.count;
    // let bubbles = [...this.state.bubbles];
    let bubbles = [...this.state.bubbles, bubble];

    this.setState({
      // bubbles: bubbles.push(bubble),
      bubbles: bubbles,

    });
    // console.log(this.state.count);
    // console.log(bubble.id);

  }

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);

  }

  deleteBubble = (id) => {
    let bubbles = this.state.bubbles.filter(bubble => {
      return bubble.id !== id;
    });
    // console.log(id);
    let countInc = this.state.count + 1;
    this.setState({
      count: countInc,
    });

    this.setState({
      bubbles: bubbles,
    });

  }

  render() {
    return (
      <div className="App">
        <h1> Hi </h1>
          <p>
            My app!
          </p>
          <Bubble deleteBubble={this.deleteBubble} bubbles={this.state.bubbles} /> 
          <AddBubble addBubble={this.addBubble}/>
      </div>
    );
  }
}

export default App;
