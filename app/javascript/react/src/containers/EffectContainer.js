import React from 'react';
import SliderMath from '../helpers/SliderMath'
import Slider from './Slider'

let user_handle = 'qbyxndniwg';
let product_room = 'palette';
let active_effect = 45

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
      lastKeyPressedTime: 0,
      active_effect: 0,
      effect_name: '',
      effect_parameter_1_name: '',
      effect_parameter_2_name: '',
      effect_parameter_3_name: '',
      effect_parameter_4_name: '',
      effect_parameter_5_name: '',
      loading: false
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
        active_effect: body.active_effect
      })
    })
    fetch(`/api/v1/effects/${active_effect}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        effect_parameter_1_name: body.parameter_1_name,
        effect_parameter_2_name: body.parameter_2_name,
        effect_parameter_3_name: body.parameter_3_name,
        effect_parameter_4_name: body.parameter_4_name,
        effect_parameter_5_name: body.parameter_5_name
      })
    })
  }

  postValuesToFetch() {
    if (Date.now() - this.state.lastKeyPressedTime > 200) {
      this.setState({ loading: true })
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
    } else this.setState({ loading: false })
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

    let loading = null;
    if (this.state.loading) {
      loading = <div className='loading-icon'>Loading...</div>
    } else  { loading = null }

    return (
      <div className={this.props.className}>
        {/* {loading} */}
        <div>
          <i className="fa fa-sliders fa-2x" id="box-icon" aria-hidden="true"></i>
          <div className='container-title'>Effects</div>
        </div>

        <div id="components">
          <div className="Component">
            <div className="Component-slider">
              <Slider
                onChange={ this.handleSlider_1 }
                value={this.state.sliderValue_1}
                radius={ 70 }
                border={ 30 }
                min={ -50 }
                max={ 50 }
                angle={ Math.PI / 4 }
                origin={ 0.5 }
                start={ 0 }
                fixedSliderValue={+this.state.sliderValue_1.toFixed(2)}
                label={this.state.effect_parameter_1_name}
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
                fixedSliderValue={+this.state.sliderValue_2.toFixed(2)}
                label={this.state.effect_parameter_2_name}
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
                fixedSliderValue={+this.state.sliderValue_3.toFixed(2)}
                label={this.state.effect_parameter_3_name}
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
                fixedSliderValue={+this.state.sliderValue_4.toFixed(2)}
                label={this.state.effect_parameter_4_name}
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
                fixedSliderValue={+this.state.sliderValue_5.toFixed(2)}
                label={this.state.effect_parameter_5_name}
              />
            </div>
          </div>
        </div>
        <div className='container-settings'>
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default EffectContainer;
