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
    activeItem: '',
    droppedElementList: []
  }

  //@TODO: Clean up functions. -> export DragAndDrop.js

  onDragElementStart(e, type) {
    this.setState({
      events: {
        ...this.state.events,
        isDragging: true,
        draggingItem: type
      },
      activeItem: type
    });
  }

  onDragElementEnd(e) {
    this.setState({
      events: {
        ...this.state.events,
        isDragging: false
      }
    })
  }

  onDragElementOver(e) {
    e.preventDefault()
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

  onElementDrop(e) {
    this.setState({
      events: {
        ...this.state.events,
        isDragging: false,
        isDraggingOver: false,
      },
      droppedElementList: [
        ...this.state.droppedElementList,
        this.state.activeItem
      ]
    })
  }

  render() {
    const {acceptedTypes, droppedElementList} = this.state
    const {isDragging, isDraggingOver, draggingItem} = this.state.events

    console.log(this.state.droppedElementList)

    return (
      <div className="Wrapper--DragAndDrop">
        <AcceptDrop
          validTypes={acceptedTypes}
          draggingItem={draggingItem}
          isDragging={isDragging}
          isDraggingOver={isDraggingOver}
          onDragOver={e => this.onDragElementOver(e)}
          onDragLeave={e => this.onDragElementLeave(e)}
          onDrop={e => this.onElementDrop(e)}
          elementList={droppedElementList} />

        <DraggableTypes
          onDragStart={(e, type) => this.onDragElementStart(e, type)}
          onDragEnd={(e, type) => this.onDragElementEnd(e, type)}
          dragTypes={acceptedTypes} />
      </div>
    )
  }
}

export default Wrapper;
