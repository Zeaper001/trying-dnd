import React from 'react';
import AcceptDrop from '../AcceptDrop'
import {ElementTypes} from '../ElementTypes'
import {DraggableTypes} from '../../Components/ElementTypes'

class Wrapper extends React.Component {

  state = {
    acceptedTypes: ElementTypes,
    events: {
      isDragging: false,
      draggingItem: '',
    }
  }

  onDragElement(e, type) {
    this.setState({
      events: {
        isDragging: true,
        draggingItem: type
      }
    });
  }

  render() {
    const {acceptedTypes} = this.state
    const {isDragging, draggingItem} = this.state.events

    console.log(this.state)

    return (
      <div className="Wrapper--DragAndDrop">
        <AcceptDrop validTypes={acceptedTypes} isDragging={isDragging} />
        <DraggableTypes
          onDragEnter={(e, type) => this.onDragElement(e, type)}
          draggingItem={draggingItem}
          dragTypes={acceptedTypes} />
      </div>
    )
  }
}

export default Wrapper;
