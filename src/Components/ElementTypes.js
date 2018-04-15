import React from 'react'
import {ElementTypes} from '../dnd/ElementTypes'

export const DraggableTypes = ({dragTypes, className, onDragEnter}) => (
  <div className="Draggable--Types">
    <ul>
      {dragTypes.map((type, index) => (
        <li key={index} onDragEnterCapture={(e) => onDragEnter(e, type.name)} draggable="true">{type.name}</li>
      ))}
    </ul>
  </div>
)
