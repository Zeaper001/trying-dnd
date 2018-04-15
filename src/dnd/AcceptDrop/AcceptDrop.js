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
    const {isDragging} = this.props;
    console.log(isDragging)
    return (
      <div className={classNames('Accepting--Drop', {'dropable': isDragging})}>
        AcceptDrop
      </div>
    )
  }
}

export default AcceptDrop;
