import React from 'react';

class TimePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      AM_PM: 'AM',
      hour: 9,
      minute: 30,
      on: true,
      turn_on: '',
      turn_off: ''
    }
    this.handleHourUp = this.handleHourUp.bind(this);
    this.handleHourDown = this.handleHourDown.bind(this);
    this.handleMinuteUp = this.handleMinuteUp.bind(this);
    this.handleMinuteDown = this.handleMinuteDown.bind(this);
    this.handleAmPm = this.handleAmPm.bind(this);
    this.handleOnOff = this.handleOnOff.bind(this);
    this.fetchTime = this.fetchTime.bind(this);
    this.postTimeToFetch = this.postTimeToFetch.bind(this);
  }

  postTimeToFetch() {
    // console.log('posting to fetch');
    let hour = this.state.hour
    let minute = this.state.minute
    let AM_PM = this.state.AM_PM

    // turn_on = Date.new(2018, 11, date, hour, minute, 30, 30);
    // turn_on = Date.new(2018, 11, date, hour, minute, 30, 30);
    // fetch(`/api/v1/users/${this.props.currentUser.handle}/products/${this.props.currentUser.current_product_name}`, {
    //   credentials: "same-origin",
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(formPayLoad)
    // })
  }

  getOnStyle() {
    return {
      backgroundColor: this.state.on ? '#98C8B3' : '#292929',
      color: this.state.on ? '#292929' : '#6F6F6F'
    }
  }

  getOffStyle() {
    return {
      backgroundColor: this.state.on ? '#292929' : '#98C8B3',
      color: this.state.on ? '#6F6F6F' : '#292929'
    }
  }

  handleOnOff(event) {
    this.setState({ on: !this.state.on })
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
    this.postTimeToFetch();
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
    this.postTimeToFetch();
  }

  handleMinuteUp() {
    let minute = Number(this.state.minute);
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
    this.postTimeToFetch();
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
    this.postTimeToFetch();
  }

  handleAmPm() {
    let AM_PM = this.state.AM_PM;
    if(AM_PM == 'AM') { AM_PM = 'PM' } else { AM_PM = 'AM' }
    this.setState({
      AM_PM: AM_PM
    })
    this.postTimeToFetch();
  }

  fetchTime(nextUser) {
    this.props.handleLoading(true)
    fetch(`/api/v1/users/${nextUser.handle}/products/${nextUser.current_product_name}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if (response.ok) {
        return response;
      }
    })
    .then(response => response.json())
    .then(body => {
      if(body.turn_on != null) {
        this.setState({
          turn_off: body.turn_off,
          turn_on: body.turn_off
        })
      }
      this.props.handleLoading(false)
      // console.log(this.state.turn_off);
      // console.log(this.state.turn_on);
    })
  }

  componentWillReceiveProps(nextUser) {
    if(nextUser.currentUser != this.props.currentUser) {
      this.fetchTime(nextUser.currentUser);
    }
  }

  render() {
    return (
      <div>
        <div className='on-off'>
          <div className='on' style={this.getOnStyle()} onClick={this.handleOnOff}>On</div>
          <div className='off' style={this.getOffStyle()} onClick={this.handleOnOff}>Off</div>
        </div>
        <div id='schedule-text'>Schedule</div>
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
