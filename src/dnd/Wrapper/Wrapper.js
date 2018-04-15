import React from 'react';
import AcceptDrop from '../AcceptDrop'
import {ElementTypes} from '../ElementTypes'
import {DraggableTypes} from '../../Components/ElementTypes'

class Wrapper extends React.Component {
  state = {
    acceptedTypes: ElementTypes,
    events: {
      isDragging: false,
      isDraggingOver: false,
      draggingItem: '',
    },

  }

  //@TODO: Clean up functions. -> export DragAndDrop.js

  onDragElementStart(e, type) {
    this.setState({
      events: {
        ...this.state.events,
        isDragging: true,
        draggingItem: type
      }
    });
  }

  onDragElementEnd(e, type) {
    this.setState({
      events: {
        ...this.state.events,
        isDragging: false
      }
    })
  }

  onDragElementOver(e) {
    if(this.state.events.isDraggingOver !== true) {
      this.setState({
        events: {
          ...this.state.events,
          isDraggingOver: true
        }
      })
    }
  }

  onDragElementLeave(e) {
    this.setState({
      events: {
        ...this.state.events,
        isDraggingOver: false
      }
    })
  }

  render() {
    const {acceptedTypes} = this.state
    const {isDragging, isDraggingOver, draggingItem} = this.state.events

    console.log(this.state.events)

    return (
      <div className="Wrapper--DragAndDrop">
        <AcceptDrop
          validTypes={acceptedTypes}
          draggingItem={draggingItem}
          isDragging={isDragging}
          isDraggingOver={isDraggingOver}
          onDragOver={e => this.onDragElementOver(e)}
          onDragLeave={e => this.onDragElementLeave(e)} />

        <DraggableTypes
          onDragStart={(e, type) => this.onDragElementStart(e, type)}
          onDragEnd={(e, type) => this.onDragElementEnd(e, type)}
          dragTypes={acceptedTypes} />
      </div>
    )
  }
}

export default Wrapper;
