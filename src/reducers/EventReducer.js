const initialState = {
  isDragging: false,
  isDraggingOver: false,
  draggingItem: '',
  elementsList: []
}

export default function events (state=initialState, action) {
  switch(action.type) {
    case 'ON_DRAG_START': {
      state = {
        ...state,
        isDragging: action.payload.isDragging,
        draggingItem: action.payload.draggingItem
      }
      break
    }
    case 'ON_DRAG_END': {
      state = {
        ...state,
        isDragging: false,
        isDraggingOver: false,
        draggingItem: ''
      }
      break
    }
    case 'ON_DRAG_OVER': {
      state = {
        ...state,
        isDraggingOver: true
      }
      break
    }
    case 'ON_DRAG_LEAVE': {
      state = {
        ...state,
        isDraggingOver: false
      }
      break
    }
    case 'ON_DROP': {
      state = {
        ...state,
        elementsList: [
          ...state.elementsList,
          action.payload
        ]
      }
      break
    }
    default: {
      state = {
        ...state
      }
      break
    }
  }
  return state
}
