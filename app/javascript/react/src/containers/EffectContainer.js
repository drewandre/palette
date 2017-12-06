import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EffectSelectField from '../components/EffectSelectField'
import Slider from './Slider'

class EffectContainer extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props)
    this.state = {
      active_effect: '',
      effectParameterNames: '',
      effectParameterValues: 0,
      lastKeyPressedTime: 0
    }
    this.handleSlider = this.handleSlider.bind(this);
    this.getActiveEffect = this.getActiveEffect.bind(this);
    this.postSliderValuesToFetch = this.postSliderValuesToFetch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  getActiveEffect(nextUser) {
    this.props.handleLoading(true);
    let formPayload = [];
    fetch(`/api/v1/users/${nextUser.handle}/products/${nextUser.current_product_name}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        active_effect: body.active_effect
      })
      return fetch(`/api/v1/effects/${body.active_effect}`)
    })
    .then(response => response.json())
    .then(body => {
      let effectParameterNames = []
      for (var key in body){
        if(key.startsWith("parameter")) {
          effectParameterNames.push(body[key]);
        }
      }
      this.setState({
        effectParameterNames: effectParameterNames
      })
      return fetch(`/api/v1/users/${nextUser.handle}/products/${nextUser.current_product_name}/effect_settings/${body.effect_name}`)
    })
    .then(response => response.json())
    .then(body => {
      let effectParameterValues = []
      for (var key in body){
        if(key.startsWith("parameter")) {
          effectParameterValues.push(body[key]);
        }
      }
      this.setState({
        effectParameterValues: effectParameterValues
      })
      this.props.handleEffectChange(formPayload);
      this.props.handleLoading(false);
    })
  }

  postSliderValuesToFetch() {
    if (Date.now() - this.state.lastKeyPressedTime > 500) {
      this.props.handleLoading(true);
      let effectParameterValues = this.state.effectParameterValues
      let formPayload = {
        parameter_1: effectParameterValues[0],
        parameter_2: effectParameterValues[1],
        parameter_3: effectParameterValues[2],
        parameter_4: effectParameterValues[3],
        parameter_5: effectParameterValues[4]
      };
      fetch(`/api/v1/users/${this.props.currentUser.handle}/products/${this.props.currentUser.current_product_name}/effect_settings/${this.state.active_effect}`, {
        credentials: "same-origin",
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ formPayload })
      })
      .then(response => { this.props.handleLoading(false) })
    }
  }

  handleSlider(sliderValue) {
    var parameterName = event.path[1].lastElementChild.firstChild.data
    var parameterValueIndex = this.state.effectParameterNames.indexOf(parameterName)
    let effectParameterValues = this.state.effectParameterValues
    if (~parameterValueIndex) { effectParameterValues[parameterValueIndex] = sliderValue; }
    this.setState({
      lastKeyPressedTime: Date.now(),
      effectParameterValues: effectParameterValues
    })
    setTimeout(() => this.postSliderValuesToFetch(), 500);
  }

  handleSelect(selectedItem) {
    this.props.handleLoading(true);
    let active_effect = selectedItem.target.value
    let effectPayload = [
      selectedItem.target.value,
      this.state.effectParameterNames
    ]
    this.props.handleEffectChange(effectPayload);
    fetch(`/api/v1/users/${this.props.currentUser.handle}/products/${this.props.currentUser.current_product_name}`, {
      credentials: "same-origin",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ active_effect })
    })
    .then(response => {
      this.getActiveEffect(this.props.currentUser)
      this.props.handleLoading(false);
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentUser != this.props.currentUser) {
      this.getActiveEffect(nextProps.currentUser);
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <div>
          <i className="fa fa-sliders fa-2x" id="box-icon" aria-hidden="true"></i>
          <div className='container-title'>Effects</div>
          <EffectSelectField
            value={this.state.active_effect}
            handleSelect={this.handleSelect}
          />
        </div>

        <div id="Components">
          <div className="Component">
            <div className="Component-slider">
              <Slider
                onChange={ this.handleSlider }
                value={this.state.effectParameterValues[0]}
                fixedSliderValue={this.state.effectParameterValues[0]}
                label={this.state.effectParameterNames[0]}
                id='top-left-slider'
              />
              <Slider
                onChange={ this.handleSlider }
                value={this.state.effectParameterValues[1] }
                fixedSliderValue={this.state.effectParameterValues[1]}
                label={this.state.effectParameterNames[1]}
                id='top-right-slider'
              />
            </div>
            <div className="Component-slider">
              <Slider
                onChange={ this.handleSlider }
                value={ this.state.effectParameterValues[2] }
                fixedSliderValue={this.state.effectParameterValues[2]}
                label={this.state.effectParameterNames[2]}
              />
              <Slider
                onChange={ this.handleSlider }
                value={this.state.effectParameterValues[3] }
                fixedSliderValue={this.state.effectParameterValues[3]}
                label={this.state.effectParameterNames[3]}
              />
              <Slider
                onChange={ this.handleSlider }
                value={this.state.effectParameterValues[4] }
                fixedSliderValue={this.state.effectParameterValues[4]}
                label={this.state.effectParameterNames[4]}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EffectContainer;
