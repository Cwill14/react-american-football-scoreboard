import React, { useState } from 'react';

const HomeScoreForm = props => {
    const [inputValue, setInputValue] = useState();


    const checkInput = input => props.setHomeScore( input < 0 ? 0: input)

    return (
        <form onSubmit={e => {
            e.preventDefault();
           checkInput(inputValue);
        }}>
            <p>set Home Team Score here</p>
            <input type="number" placeholder="home team score" value={inputValue} onChange={e => {
                setInputValue(e.target.value)
            }}/>
            <button>Update Home Team Score</button>
        </form>
    );
    
};

export default HomeScoreForm;