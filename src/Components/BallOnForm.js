import React, { useState } from 'react';

const BallOnForm = props => {
    const [inputValue, handleChange] = useState(1);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            console.log(e.target.value);
            props.setBallOn(
                // (props.toGo * 0) + inputValue)
                // e.target.value);
                inputValue)
        }}>
            <p>set "Ball On" here</p>
            <input type="number" placeholder="Ball On" value={inputValue} />
            <button>Update Ball On</button>
        </form>
    );
};

export default BallOnForm;