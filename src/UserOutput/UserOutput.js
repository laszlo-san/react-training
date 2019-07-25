import React from "react";

import './UserOutput.css'

const UserOutput = props => {
  return (
    <div className='UserOutput'>
      <p style={{
        color: '#ccc'
      }}>Username: {props.userName}</p>
      <p style={{
        color:'#aaa'
      }}>Paragraph text 2</p>
    </div>
  );
};

export default UserOutput;
