import React from 'react'
import classNames from 'classnames'

class AcceptDrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      acceptTypes: props.validTypes
    }
  }

  render() {
    const {isDragging, isDraggingOver, draggingItem, onDragOver, onDragLeave} = this.props;
    return (
      <div
        className={classNames('Accepting--Drop', {'dropable': isDragging}, {'dragover': isDraggingOver})}
        onDragOver={e => onDragOver(e)}
        onDragLeave={e => onDragLeave(e)}>
        {isDragging === true &&
          <p style={{fontSize: '36px', position: 'absolute', top: '50%', left: '45%'}}>Drop {draggingItem} item here!</p>
        }
      </div>
    )
  }
}

export default AcceptDrop;
