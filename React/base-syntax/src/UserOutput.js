import React from 'react';

const output = (props) => {
    return (
        <div className="UserOutput">
            {/* console.log(props); */}
            <p> Username: {props.username} </p>
            <p> Cool, huh? </p>
            <p> Thought so. </p>
        </div>
    );
};

export default output;