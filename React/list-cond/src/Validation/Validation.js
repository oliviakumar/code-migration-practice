import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.userInputLen <= 5) {
        validationMessage = 'Text too short';
    }

    return (
        <div>
            <p>Text Length: {props.userInputLen}</p>
            <p>{validationMessage}</p>
            {/* {
                props.userInputLen > 5 ? (
                <p>Text long enough</p> ) :
                <p>Text too short</p>
            } */}
        </div>
    )
};

export default validation;