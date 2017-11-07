import React from 'react';

class TimePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      AM_PM: 'AM',
      hour: 9,
      minute: 30
    }
    this.handleHourUp = this.handleHourUp.bind(this);
    this.handleHourDown = this.handleHourDown.bind(this);
    this.handleMinuteUp = this.handleMinuteUp.bind(this);
    this.handleMinuteDown = this.handleMinuteDown.bind(this);
    this.handleAmPm = this.handleAmPm.bind(this);
  }
  showSettings(event) {
    event.preventDefault();
  }

  handleHourUp() {
    let hour = this.state.hour;
    let AM_PM = this.state.AM_PM;
    hour += 1;
    if(hour > 12) {
      hour = 1;
      if(AM_PM == 'AM') { AM_PM = 'PM' } else { AM_PM = 'AM' }
      this.setState({
        AM_PM: AM_PM,
        hour: hour
      })
    } else {
      this.setState({ hour: hour })
    }
  }

  handleHourDown() {
    let hour = this.state.hour;
    let AM_PM = this.state.AM_PM;
    hour -= 1;
    if (hour < 1) {
      hour = 12;
      if(AM_PM == 'AM') { AM_PM = 'PM' } else { AM_PM = 'AM' }
      this.setState({
        AM_PM: AM_PM,
        hour: hour
      })
    } else {
      this.setState({ hour: hour })
    }
  }

  handleMinuteUp() {
    let minute = Number(this.state.minute);
    console.log('this.state.minute: ' + minute);
    minute += 5;
    if (minute > 55) {
      minute = 0
      if(minute === '0') { minute = '00' }
      if(minute === '5') { minute = '05' }
      this.setState({
        minute: minute
      })
    } else {
      this.setState({ minute: minute })
    }
  }

  handleMinuteDown() {
    let minute = this.state.minute;
    minute -= 5;
    if (minute < 0) {
      minute = 55;
      this.setState({
        minute: minute
      })
    } else {
      this.setState({ minute: minute })
    }
  }

  handleAmPm() {
    let AM_PM = this.state.AM_PM;
    if(AM_PM == 'AM') { AM_PM = 'PM' } else { AM_PM = 'AM' }
    this.setState({
      AM_PM: AM_PM
    })
  }

  render () {
    return (
      <div className='schedule'>
        <div className='on'>On</div>
        <div className='off'>Off</div>
        <div className='time'>
          <i onClick={this.handleHourUp} className="fa fa-caret-up" id='time-up' aria-hidden="true"></i>
          {this.state.hour}
          <i onClick={this.handleHourDown} className="fa fa-caret-down" id='time-down' aria-hidden="true"></i>
        </div>
        <div className='time'>
          <i onClick={this.handleMinuteUp} className="fa fa-caret-up" id='time-up' aria-hidden="true"></i>
          {this.state.minute}
          <i onClick={this.handleMinuteDown} className="fa fa-caret-down" id='time-down' aria-hidden="true"></i>
        </div>
        <div className='time'>
          <i onClick={this.handleAmPm} className="fa fa-caret-up" id='time-up' aria-hidden="true"></i>
          {this.state.AM_PM}
          <i onClick={this.handleAmPm} className="fa fa-caret-down" id='time-down' aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default TimePicker;
