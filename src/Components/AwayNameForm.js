import React, { useState } from 'react';

const AwayNameForm = props => {
    const [inputValue, setInputValue] = useState("");


    const checkInput = input => props.setAwayName(input)

    return (
        <form onSubmit={e => {
            e.preventDefault();
           checkInput(inputValue);
        }}>
            <p>set Away Team Name here</p>
            <input type="text" placeholder="away team name" value={inputValue} onChange={e => {
                setInputValue(e.target.value)
            }}/>
            <button>Update Away Team Name</button>
        </form>
    );
    
};

export default AwayNameForm;