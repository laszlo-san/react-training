import React from "react";

import './UserInput.css'

const UserInput = props => {
  return (
    <div className="UserInput">
      <input
        style={{
          color: 'red',
          width: '100%',
          margin: 'auto',
          padding: '0.2rem'
        }}
        type="text"
        onChange={props.changedInput}
        value={props.inputValue}
      />
    </div>
  );
};

export default UserInput;
