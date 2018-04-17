export const onDragElementStart = (e, type) => {
  this.setState({
    events: {
      ...this.state.events,
      isDragging: true,
      draggingItem: type
    },
    activeItem: type
  });
}

export const onDragElementEnd = (e) => {
  this.setState({
    events: {
      ...this.state.events,
      isDragging: false
    }
  })
}

export const onDragElementOver = (e) => {
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

export const onDragElementLeave = (e) => {
  this.setState({
    events: {
      ...this.state.events,
      isDraggingOver: false
    }
  })
}

export const onElementDrop = (e) => {
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
