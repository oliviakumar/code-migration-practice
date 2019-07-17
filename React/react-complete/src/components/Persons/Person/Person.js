import React from 'react';
import './Person.css';

const style = {
    width: '60%',
    margin: '16px auto',
    border: '1px solid #eee',
    boxShadow: '0 2px 3px #ccc',
    padding: '16px',
    textAlign: 'center',
};

const Person = (props) => {
    return (
        <div style={style}>
            <p  onClick={props.clicked}> {props.name} is {props.height} cm tall. </p>
            <p style={{fontSize: 5}}> {props.children} </p>
            <input type="text" value={props.name} onChange={props.changed} />
            {/* <p> Confirmation: </p> */}
        </div>
    )
};

export default Person;


// onSelect={this.setState({})} 