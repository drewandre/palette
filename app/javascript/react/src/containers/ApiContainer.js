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
        <i className="fa fa-database fa-2x" id="box-icon" aria-hidden="true"></i>
      </div>
    )
  }
}

export default ApiContainer;
