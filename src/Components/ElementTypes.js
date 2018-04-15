import React from 'react'
import {ElementTypes} from '../dnd/ElementTypes'

export const DraggableTypes = ({dragTypes, className, onDragStart, onDragEnd}) => (
  <div className="Draggable--Types">
    <ul>
      {dragTypes.map((type, index) => (
        <li
          key={index}
          onDragStartCapture={e => onDragStart(e, type.name)}
          onDragEndCapture={e => onDragEnd(e, type.name)}
          draggable="true">{type.name}</li>
      ))}
    </ul>
  </div>
)
