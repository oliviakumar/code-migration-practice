import React from 'react';

const input = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };

    return (
        <div>
            <input
            type="text"
            style={inputStyle}
            onChange={props.changed}
            value={props.currname} />
        </div>
    );
};

export default input;