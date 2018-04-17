import React from 'react'
import classNames from 'classnames'
import RenderElementList from '../RenderElementList'
import {connect} from 'react-redux'
import {onDragOver, onDragLeave, onDrop} from '../../actions/EventActions'

class AcceptDrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      acceptTypes: props.validTypes
    }
  }

  isDraggingOver(e) {
    e.preventDefault()
    const {draggingItem, isDraggingOver} = this.props.events
    if(isDraggingOver === false) {
      this.props.dispatch(onDragOver(draggingItem));
    }
  }

  render() {
    const {
      isDragging,
      isDraggingOver,
      draggingItem,
      elementsList } = this.props.events;

      console.log(this.props)

    return (
      <div
        className={classNames('Accepting--Drop', {'dropable': isDragging}, {'dragover': isDraggingOver})}
        onDragOver={e => this.isDraggingOver(e)}
        onDragLeave={() => this.props.dispatch(onDragLeave())}
        onDrop={() => this.props.dispatch(onDrop(draggingItem))}>
        <RenderElementList list={elementsList} />
        {isDragging === true &&
          <p style={{fontSize: '36px', position: 'absolute', top: '50%', left: '45%'}}>Drop {draggingItem} item here!</p>
        }
      </div>
    )
  }
}
export default connect(store => {return {
  events: store.events
}})(AcceptDrop);
