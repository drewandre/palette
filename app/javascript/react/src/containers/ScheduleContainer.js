import React from 'react';

class ScheduleContainer extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className={this.props.className} >
        <div>
          <i className="fa fa-calendar fa-2x" id="box-icon" aria-hidden="true"></i>
          <div className='container-title'>Schedule</div>
        </div>
        {/* <input className="time-picker" type="time" name="on-time" value="09:00"></input>
        <input className="time-picker" type="time" name="off-time" value="17:00"></input> */}

        <div className='container-settings'>
          <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default ScheduleContainer;
