import React, { useState } from 'react';

const ToGoForm = props => {
    const [inputValue, setInputValue] = useState(0);


    const checkInput = input => props.setToGo(input > 99 ? 99 : input < 1 ? "inches" : input)

    return (
        <form onSubmit={e => {
            e.preventDefault();
           checkInput(inputValue);
        }}>
            <p>set "To Go" here</p>
            <input type="number" placeholder="to go" value={inputValue} onChange={e => {
                setInputValue(e.target.value)
            }}/>
            <button>Update Home Team Name</button>
        </form>
    );
    
};

export default ToGoForm;