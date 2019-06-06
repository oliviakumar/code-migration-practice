import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './UserOutput.css';

// funtion App() {
class App extends Component {
  // state is a property of a class
  state = {
    usernames: [
      {username: "oliviakumar"},
      {username: "cathyjohnson"},
      {username: "asherjayakumar"}
    ]
    // username: "oliviakumar"
  }

  changeStateHandler = (event) => {
    this.setState({
      usernames: [
        {username: event.target.value},
        {username: "cjohnson"},
        {username: "ajk"}
      ]
      // username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Base Syntax Exercise</h1>
        <UserInput changed={this.changeStateHandler}/>

        {/* <UserOutput username="oliviakumar"/>
        <UserOutput username="cathyjohnson"/>
        <UserOutput username="asherjayakumar"/> */}

        <UserOutput
          username={this.state.usernames[0].username}
          currname={this.state.usernames[0].username}
        />
        <UserOutput
          username={this.state.usernames[1].username}/>
        <UserOutput
          username={this.state.usernames[2].username}/>
        {/* <UserOutput username={this.state.username} /> */}
      </div>
    );
  }
}

export default App;
