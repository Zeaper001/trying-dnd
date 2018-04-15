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
    console.dir(e.target)
    console.log(type)
    this.setState({
      events: {
        draggingItem: type
      }
    });
  }

  render() {
    const {acceptedTypes} = this.state

    console.log(this.state)

    return (
      <div className="Wrapper--DragAndDrop">
        <AcceptDrop validTypes={acceptedTypes} />
        <DraggableTypes
          onDragEnter={(e, type) => this.onDragElement(e, type)}
          draggingItem={this.state.events.draggingItem}
          dragTypes={acceptedTypes} />
      </div>
    )
  }
}

export default Wrapper;
