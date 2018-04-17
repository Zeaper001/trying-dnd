import React from 'react';
import AcceptDrop from '../AcceptDrop'
import {ElementTypes} from '../ElementTypes'
import DraggableTypes from '../Draggable'

class Wrapper extends React.Component {
  state = {
    acceptedTypes: ElementTypes,
  }

  render() {
    const {acceptedTypes, droppedElementList} = this.state

    return (
      <div className="Wrapper--DragAndDrop">
        <AcceptDrop />
        <DraggableTypes />
      </div>
    )
  }
}

export default Wrapper;
