import React from 'react';

const person = (props) => {
    return <p>{props.children} I am a person named {props.name}.</p>
};

export default person;