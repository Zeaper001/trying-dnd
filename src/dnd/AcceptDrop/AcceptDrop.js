import React from 'react'

class AcceptDrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      acceptTypes: props.validTypes
    }
  }

  render() {
    return (
      <div>
        AcceptDrop
      </div>
    )
  }
}

export default AcceptDrop;
