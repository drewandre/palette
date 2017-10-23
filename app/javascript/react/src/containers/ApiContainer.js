import React from 'react';
import TextField from '../components/TextField'
import Select from '../components/Select'

class ApiContainer extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {

    return (
      <div className={this.props.className} >
        API mapping
      </div>
    )
  }
}

export default ApiContainer;
