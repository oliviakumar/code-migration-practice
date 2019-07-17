import React from 'react';
// import {createUseStyles} from 'react-jss'


const Counter = (props) => {
    return (
      <div>
        <button onClick={props.removeCounter}> [ X ] </button>
        <button style={props.style} onClick={props.deClick}> - </button>
          {props.counter}
          {/* {props.id} */}
        <button style={props.style} onClick={props.inClick}> + </button>
      </div>
    )
  // }
}

export default Counter;