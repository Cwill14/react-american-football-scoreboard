import React, { useState } from 'react';

const SetHomeTimeoutsForm = props => {
    const [inputValue, setInputValue] = useState();


    const checkInput = input => props.setHomeTimeouts( input < 0 ? 0 : input > 3 ? 3 : input)

    return (
        <form onSubmit={e => {
            e.preventDefault();
           checkInput(inputValue);
           props.setHomeTimeoutsStatus(false);
        }}>
            <p>set Home Timeouts here</p>
            <input type="number" placeholder="home timeouts" value={inputValue} onChange={e => {
                setInputValue(e.target.value)
            }}/>
            <button className="otherButton">Update Home Timeouts</button>
        </form>
    );
    
};

export default SetHomeTimeoutsForm;