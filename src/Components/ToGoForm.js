import React, { useState } from 'react';

const ToGoForm = props => {
    const [inputValue, setInputValue] = useState();


    const checkInput = input => props.setToGo(input > 99 ? 99 : input < 1 ? "inches" : input)

    return (
        <form onSubmit={e => {
            e.preventDefault();
           checkInput(inputValue);
           props.setToGoStatus(false);
        }}>
            <p>set "To Go" here</p>
            <input type="number" placeholder="to go" value={inputValue} onChange={e => {
                setInputValue(e.target.value)
            }}/>
            <button>Update To Go</button>
        </form>
    );
    
};

export default ToGoForm;