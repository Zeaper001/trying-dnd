export function onDragStart(itemType) {
  return {
    type: 'ON_DRAG_START',
    payload: {isDragging: true, draggingItem: itemType}
  }
}

export function onDragEnd() {
  return {
    type: 'ON_DRAG_END',
    payload: {isDragging: false}
  }
}

export function onDragOver() {
  return {
    type: 'ON_DRAG_OVER',
    payload: {isDraggingOver: true}
  }
}

export function onDragLeave() {
  return {
    type: 'ON_DRAG_LEAVE',
    payload: {isDraggingOver: false}
  }
}

export function onDrop(newElement) {
  console.log(newElement)
  return {
    type: 'ON_DROP',
    payload: newElement
  }
}
