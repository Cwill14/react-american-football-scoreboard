import React, { useState } from 'react';

const BallOnForm = props => {
    const [inputValue, setInputValue] = useState();


    const checkInput = input => props.setBallOn(input > 50 ? 50 : input < 1 ? 1 : input)

    return (
        <form onSubmit={e => {
            e.preventDefault();
           checkInput(inputValue);
        }}>
            <p>set "To Go" here</p>
            <input type="number" placeholder="ball on" value={inputValue} onChange={e => {
                setInputValue(e.target.value)
            }}/>
            <button>Update Ball On</button>
        </form>
    );
    
};


export default BallOnForm;