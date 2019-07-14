import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div>
            <p> {props.name} is {props.height} cm tall. </p>
            <p style={{fontSize: 5}}> {props.children} </p>
        </div>
    )
};

export default person;