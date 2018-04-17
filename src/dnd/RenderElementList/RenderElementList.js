import React from 'react';

const RenderElementList = ({list}) => {
  return (
    <div>
      {list.map((elem, index) => (
        <div key={index}>{elem}</div>
      ))}
    </div>
  )
}
export default RenderElementList;
