import React, { useState } from 'react';

const SetTImeForm = props => {
    const [inputValue, handleChange] = useState(0);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            console.log(e.target.value);
            props.setTime(
                // (props.toGo * 0) + inputValue)
                // e.target.value);
                inputValue)
        }}>
            <p>set time " here</p>
            <input type="number" placeholder="time" value={inputValue} />
            <button>Update Time</button>
        </form>
    );
};

export default SetTImeForm;