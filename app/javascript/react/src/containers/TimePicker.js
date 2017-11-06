import React from 'react';

class TimePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      AM_PM: 'AM',
      hour: '12',
      minute: '00'
    }
  }
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className='schedule'>
        <div className='time'>
          <i className="fa fa-caret-up" id='time-up' aria-hidden="true"></i>
          {this.state.hour}
          <i className="fa fa-caret-down" id='time-down' aria-hidden="true"></i>
        </div>
        <div className='time'>
          <i className="fa fa-caret-up" id='time-up' aria-hidden="true"></i>
          {this.state.minute}
          <i className="fa fa-caret-down" id='time-down' aria-hidden="true"></i>
        </div>
        <div className='time'>
          <i className="fa fa-caret-up" id='time-up' aria-hidden="true"></i>
          {this.state.AM_PM}
          <i className="fa fa-caret-down" id='time-down' aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default TimePicker;
