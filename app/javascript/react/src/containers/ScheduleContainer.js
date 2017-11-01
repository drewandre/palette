import React from 'react';

class ScheduleContainer extends React.Component {

  showSettings(event) {
    event.preventDefault()
  }

  constructor(props) {
    super(props)
    this.state = {
      onTime: '09:00',
      offTime: '17:00',
      lastKeyPressedTime: 0
    }
    this.handleOnTimeChange = this.handleOnTimeChange.bind(this);
    this.handleOffTimeChange = this.handleOffTimeChange.bind(this);
    this.postScheduleToFetch = this.postScheduleToFetch.bind(this);
  }

  postScheduleToFetch() {
    if (Date.now() - this.state.lastKeyPressedTime > 1500) {
      alert('posted to fetch')
    }
  }

  handleOnTimeChange(onEvent) {
    this.setState({ onTime: onEvent.target.value})
    setTimeout(() => this.postScheduleToFetch(), 1500);
  }

  handleOffTimeChange(offEvent) {
    this.setState({ offEvent: offEvent.target.value})
    setTimeout(() => this.postScheduleToFetch(), 1500);
  }

  render () {
    return (
      <div className={this.props.className} >
        <div>
          <i className="fa fa-calendar fa-2x" id="box-icon" aria-hidden="true"></i>
          <div className='container-title'>Schedule</div>
        </div>
        <input onChange={this.handleOnTimeChange} className="time-picker" type="time" name="on-time" value={this.state.onTime}></input>
        <input onChange={this.handleOffTimeChange} className="time-picker" type="time" name="off-time" value={this.state.offTime}></input>
      </div>
    )
  }
}

export default ScheduleContainer;
