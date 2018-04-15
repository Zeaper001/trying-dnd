import React from 'react';

const RenderElementList = ({elementList}) => {
  console.log(elementList)
  return (
    <div>
      {elementList.map((elem, index) => (
        <div>{elem}</div>
      ))}
    </div>
  )
}
export default RenderElementList;
