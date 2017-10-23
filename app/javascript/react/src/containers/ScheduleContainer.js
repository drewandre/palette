import React from 'react';

class ScheduleContainer extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className={this.props.className} >
        <i className="fa fa-calendar fa-2x" id="box-icon" aria-hidden="true"></i>
      </div>
    )
  }
}

export default ScheduleContainer;
