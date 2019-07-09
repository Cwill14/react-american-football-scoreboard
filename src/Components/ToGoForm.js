import React, { useState } from 'react';

const ToGoForm = props => {
    const [inputValue, setInputValue] = useState(0);

    // setInputValue(e => {(props.toGo * 0) + e.target.value})
    // setInputValue(e => {e.target.value})
    const checkInput = input => props.setToGo(input > 99 ? 99 : input < 0.1 ? "inches" : input)
    console.log("props.toGo: ",props.toGo);
    return (
        <form onSubmit={e => {
            e.preventDefault();
            console.log("before checkInput: ", inputValue); 
           checkInput(inputValue);
           console.log("after checkInput: ", inputValue); 
        }}>
            <p>set "To Go" here</p>
            <input type="number" placeholder="to go" value={inputValue} onChange={e => {
                console.log("before setInput: ", inputValue); 
                setInputValue(e.target.value)
            }}/>
            <button>Update To Go</button>
        </form>
    );
    
};

export default ToGoForm;