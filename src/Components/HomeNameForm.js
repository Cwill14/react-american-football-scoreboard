import React, { useState } from 'react';

const HomeNameForm = props => {
    const [inputValue, setInputValue] = useState("");


    const checkInput = input => props.setHomeName(input);

    return (
        <form onSubmit={e => {
            e.preventDefault();
           checkInput(inputValue);
           props.setHomeNameStatus(false);
        }}>
            <p>set Home Team Name here</p>
            <input type="text" placeholder="home team name" value={inputValue} onChange={e => {
                setInputValue(e.target.value)
            }}/>
            <button>Update Home Team Name</button>
        </form>
    );
    
};

export default HomeNameForm;