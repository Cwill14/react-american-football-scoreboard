import React, { useState } from 'react';

const SetTimeForm = props => {
    const [inputValue, setInputValue] = useState();


    const checkInput = input => props.setTime(input > 900 ? 900 : input < 0 ? 0 : input)

    return (
        <form onSubmit={e => {
            e.preventDefault();
           checkInput(inputValue);
        }}>
            <p>set Clock Time here</p>
            <input type="number" placeholder="clock time" value={inputValue} onChange={e => {
                setInputValue(e.target.value)
            }}/>
            <button>Update Clock Time</button>
        </form>
    );
    
};

export default SetTimeForm;