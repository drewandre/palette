import React from 'react';
import SliderMath from '../helpers/SliderMath'
import Slider from './Slider'

let user_handle = 'es6vank6ll';
let product_room = 'family-room';

class EffectContainer extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props)
    this.state = {
      sliderValue_1: 0,
      sliderValue_2: 0,
      sliderValue_3: 0,
      sliderValue_4: 0,
      sliderValue_5: 0,
      lastKeyPressedTime: 0
    }
    this.handleSlider_1 = this.handleSlider_1.bind(this);
    this.handleSlider_2 = this.handleSlider_2.bind(this);
    this.handleSlider_3 = this.handleSlider_3.bind(this);
    this.handleSlider_4 = this.handleSlider_4.bind(this);
    this.handleSlider_5 = this.handleSlider_5.bind(this);
    this.postValuesToFetch = this.postValuesToFetch.bind(this);
  }

  componentDidMount() {
    fetch(`/api/v1/users/${user_handle}/products/${product_room}/effect_settings`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        sliderValue_1: body.parameter_1,
        sliderValue_2: body.parameter_2,
        sliderValue_3: body.parameter_3,
        sliderValue_4: body.parameter_4,
        sliderValue_5: body.parameter_5,
      })
    })
  }

  postValuesToFetch() {
    if (Date.now() - this.state.lastKeyPressedTime > 500) {
      let formPayload = {
        parameter_1: this.state.sliderValue_1,
        parameter_2: this.state.sliderValue_2,
        parameter_3: this.state.sliderValue_3,
        parameter_4: this.state.sliderValue_4,
        parameter_5: this.state.sliderValue_5
      };
      fetch(`/api/v1/users/${user_handle}/products/${product_room}/effect_settings`, {
        credentials: "same-origin",
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ formPayload })
      })
    }
  }

  handleSlider_1(sliderValue_1) {
    this.setState({
      lastKeyPressedTime: Date.now(),
      sliderValue_1: sliderValue_1
    })
    setTimeout(() => this.postValuesToFetch(), 1000);

  }

  handleSlider_2(sliderValue_2) {
    this.setState({
      lastKeyPressedTime: Date.now(),
      sliderValue_2: sliderValue_2
    })
    setTimeout(() => this.postValuesToFetch(), 1000);

  }

  handleSlider_3(sliderValue_3) {
    this.setState({
      lastKeyPressedTime: Date.now(),
      sliderValue_3: sliderValue_3
    })
    setTimeout(() => this.postValuesToFetch(), 1000);

  }

  handleSlider_4(sliderValue_4) {
    this.setState({
      lastKeyPressedTime: Date.now(),
      sliderValue_4: sliderValue_4
    })
    setTimeout(() => this.postValuesToFetch(), 1000);

  }

  handleSlider_5(sliderValue_5) {
    this.setState({
      lastKeyPressedTime: Date.now(),
      sliderValue_5: sliderValue_5
    })
    setTimeout(() => this.postValuesToFetch(), 1000);

  }

  render () {
    return (
      <div className={this.props.className} >
        <i className="fa fa-sliders fa-2x" id="box-icon" aria-hidden="true"></i>
        <h2 className='container-title'>Effects | </h2>
        {/* <h3 className='container-dropdown'>Search</h3> */}
        {/* <i className="fa fa-caret-down fa-2x" id='container-dropdown' aria-hidden="true"></i> */}

        <div className="Components">
          <div className="Component">
            <div className="Component-slider">
              <Slider
                onChange={ this.handleSlider_1 }
                value={ this.state.sliderValue_1 }
                radius={ 70 }
                border={ 30 }
                min={ -50 }
                max={ 50 }
                angle={ Math.PI / 4 }
                origin={ 0.5 }
                start={ 0 }
              />
              <Slider
                onChange={ this.handleSlider_2 }
                value={ this.state.sliderValue_2 }
                radius={ 70 }
                border={ 30 }
                min={ -50 }
                max={ 50 }
                angle={ Math.PI / 4 }
                origin={ 0.5 }
                start={ 0 }
              />
              <Slider
                onChange={ this.handleSlider_3 }
                value={ this.state.sliderValue_3 }
                radius={ 70 }
                border={ 30 }
                min={ -50 }
                max={ 50 }
                angle={ Math.PI / 4 }
                origin={ 0.5 }
                start={ 0 }
              />
              <Slider
                onChange={ this.handleSlider_4 }
                value={ this.state.sliderValue_4 }
                radius={ 70 }
                border={ 30 }
                min={ -50 }
                max={ 50 }
                angle={ Math.PI / 4 }
                origin={ 0.5 }
                start={ 0 }
              />
              <Slider
                onChange={ this.handleSlider_5 }
                value={ this.state.sliderValue_5 }
                radius={ 70 }
                border={ 30 }
                min={ -50 }
                max={ 50 }
                angle={ Math.PI / 4 }
                origin={ 0.5 }
                start={ 0 }
              />
            </div>
          </div>
        </div>
        <div className='container-settings'>
          <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default EffectContainer;
