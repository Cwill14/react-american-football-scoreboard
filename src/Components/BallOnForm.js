import React, { useState } from 'react';

const BallOnForm = props => {
    const [inputValue, setInputValue] = useState(0);

    // setInputValue(e => {(props.toGo * 0) + e.target.value})
    // setInputValue(e => {e.target.value})
    const checkInput = input => props.setBallOn(input > 99 ? 99 : input < 0.1 ? "inches" : null)
    return (
        <form onSubmit={e => {
            e.preventDefault();
           checkInput(inputValue);
        }}>
            <p>set "Ball On" here</p>
            <input type="number" placeholder="ball on" value={inputValue} onChange={e => {
                // console.log("before: ", inputValue); 
                setInputValue(e.target.value)
            }}/>
            <button>Update Ball On</button>
        </form>
    );
};


export default BallOnForm;