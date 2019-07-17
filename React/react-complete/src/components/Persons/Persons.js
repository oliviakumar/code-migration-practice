import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((p, i) => {
    if (i === 2) {
      return <Person
        key={i}
        name={p.name}
        height={p.height}
        changed={(event) => props.changed(event, i)}
        clicked={() => props.clicked(i)}
      > tee hee 69 </Person>;
    } else {
        return <Person
          key={i}
          name={p.name}
          height={p.height}
          changed={(event) => props.changed(event, i)}
          clicked={() => props.clicked(i)}
        > </Person>;
    }
  });

// TODO: how to pass i to handleEntryChange??
// TODO: why do you not need to pass i in the first parens???? and error if you do...
// TODO: why does event not need to be accepted by deletePersonHandler????????

export default Persons;