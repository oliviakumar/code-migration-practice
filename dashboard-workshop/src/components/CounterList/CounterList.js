import React from 'react';
import Counter from '../Counter/Counter';

const CounterList = (props) => {
    return (
      <div>
        {props.counters.map((c, i) => {
          return <Counter
                    key={i}
                    id={i}
                    counter={c.value}
                    style={props.style}
                    inClick={() => props.inClick(i)}
                    deClick={() => props.deClick(i)}
                    inClicked={() => props.inClicked(i)}
                    removeCounter={() => props.removeCounter(i)}
                  />
        })}
        <button onClick={props.addCounter}> ADD </button>
      </div>
    );
  }

// React.createElement()
// ReactDOM.render(
//   CounterList,
// )
export default CounterList;