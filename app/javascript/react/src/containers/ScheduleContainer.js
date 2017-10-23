import React from 'react';

class ScheduleContainer extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className={this.props.className} >
        Scheduling
      </div>
    )
  }
}

export default ScheduleContainer;
