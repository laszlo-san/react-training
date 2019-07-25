import React from 'react';

const ValidateComponent = (props)=> {
  return (
    <div>
      <p>{props.text.length > 4 ? "Text long enough" : "Text too short"}</p>
    </div>
  )
};

export default ValidateComponent;