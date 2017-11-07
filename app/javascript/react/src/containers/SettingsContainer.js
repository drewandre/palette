import React from 'react';
import TimePicker from './TimePicker.js'

class SettingsContainer extends React.Component {

  showSettings(event) {
    event.preventDefault()
  }

  constructor(props) {
    super(props)
    this.state = {
      masterBrightess: 255,
      lastKeyPressedTime: 0
    }
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleMasterBrightness = this.handleMasterBrightness.bind(this);
    this.postScheduleToFetch = this.postScheduleToFetch.bind(this);
  }

  postScheduleToFetch() {
    if (Date.now() - this.state.lastKeyPressedTime > 1500) {
      alert('posted to fetch')
    }
  }

  handleTimeChange(onEvent) {
    // this.setState({ onTime: onEvent.target.value})
    setTimeout(() => this.postScheduleToFetch(), 1500);
  }

  handleMasterBrightness(brightnessEvent) {
    this.setState({ masterBrightess: brightnessEvent.target.value})
    setTimeout(() => this.postScheduleToFetch(), 1500);
  }

  render () {
    return (
      <div className={this.props.className}>
        <div>
          <i className="fa fa-calendar fa-2x" id="box-icon" aria-hidden="true"></i>
          <div className='container-title'>Settings</div>
        </div>
        <TimePicker handleTimeChange={this.handleTimeChange}/>
        <input onChange={this.handleMasterBrightness} className='master-brightness-slider' type="range" min="0" max="255" />
      </div>
    )
  }
}

export default SettingsContainer;
