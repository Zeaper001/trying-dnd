import React from 'react';
import {ElementTypes} from '../ElementTypes'
import {connect} from 'react-redux'
import {onDragStart, onDragEnd} from '../../actions/EventActions'

class Draggable extends React.Component {
  render() {
    return (
      <div className="Draggable--Types">
        <ul>
          {ElementTypes.map((type, index) => (
            <li
              key={index}
              onDragStartCapture={() => this.props.dispatch(onDragStart(type.name))}
              onDragEndCapture={() => this.props.dispatch(onDragEnd(type.name))}
              draggable="true">{type.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect()(Draggable);
