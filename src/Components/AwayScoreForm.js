import React, { useState } from 'react';

const AwayScoreForm = props => {
    const [inputValue, setInputValue] = useState();


    const checkInput = input => props.setAwayScore( input < 0 ? 0 : input)

    return (
        <form onSubmit={e => {
            e.preventDefault();
           checkInput(inputValue);
           props.setAwayScoreStatus(false);
        }}>
            <p>set Away Team Score here</p>
            <input type="number" placeholder="away team score" value={inputValue} onChange={e => {
                setInputValue(e.target.value)
            }}/>
            <button className="otherButton">Update Away Team Score</button>
        </form>
    );
    
};

export default AwayScoreForm;