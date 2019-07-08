import React, { useState } from 'react';

const ToGoForm = props => {
    const [inputValue, handleChange] = useState(1);

    // handleChange(e => {(props.toGo * 0) + e.target.value})
    // handleChange(e => {e.target.value})

    return (
        <form onSubmit={e => {
            e.preventDefault();
            console.log(e.target.value);
            props.setToGo(
                // (props.toGo * 0) + inputValue)
                // e.target.value);
                inputValue)
        }}>
            <p>set "To Go" here</p>
            <input type="number" placeholder="to go" value={inputValue} />
            <button>Update To Go</button>
        </form>
    );
};

export default ToGoForm;