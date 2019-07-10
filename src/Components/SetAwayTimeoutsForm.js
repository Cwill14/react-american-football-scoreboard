import React, { useState } from 'react';

const SetAwayTimeoutsForm = props => {
    const [inputValue, setInputValue] = useState();


    const checkInput = input => props.setAwayTimeouts( input < 0 ? 0 : input > 3 ? 3 : input)

    return (
        <form onSubmit={e => {
            e.preventDefault();
           checkInput(inputValue);
           props.setAwayTimeoutsStatus(false);
        }}>
            <p>set Away Timeouts here</p>
            <input type="number" placeholder="away timeouts" value={inputValue} onChange={e => {
                setInputValue(e.target.value)
            }}/>
            <button className="otherButton">Update Away Timeouts</button>
        </form>
    );
    
};

export default SetAwayTimeoutsForm;