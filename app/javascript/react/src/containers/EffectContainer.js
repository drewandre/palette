import React from 'react';
import SliderMath from '../helpers/SliderMath'
import Slider from './Slider'

let user_handle = 'es6vank6ll';
let product_room = 'family-room';

class EffectContainer extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  constructor(props) {
    super(props)
    this.state = {
      sliderValue_1: 0,
      sliderValue_2: 0,
      sliderValue_3: 0,
      sliderValue_4: 0,
      sliderValue_5: 0
    }
    this.handleSlider_1 = this.handleSlider_1.bind(this);
    this.handleSlider_2 = this.handleSlider_2.bind(this);
    this.handleSlider_3 = this.handleSlider_3.bind(this);
    this.handleSlider_4 = this.handleSlider_4.bind(this);
    this.handleSlider_5 = this.handleSlider_5.bind(this);
    this.postValuesToFetch = this.postValuesToFetch.bind(this);
  }

  postValuesToFetch() {
    let formPayload = {
      parameter_1: this.state.sliderValue_1,
      parameter_2: this.state.sliderValue_2,
      parameter_3: this.state.sliderValue_3,
      parameter_4: this.state.sliderValue_4,
      parameter_5: this.state.sliderValue_5
    };
    fetch(`/api/v1/users/${user_handle}/products/${product_room}/effect_settings`, {
      method: "POST",
      body: JSON.stringify({ formPayload })
    }).then(() => {
      console.log(formPayload);
    })
  }

  handleSlider_1(sliderValue_1) {
    this.setState({ sliderValue_1: sliderValue_1 })
    this.postValuesToFetch()
  }

  handleSlider_2(sliderValue_2) {
    this.setState({ sliderValue_2: sliderValue_2 })
    this.postValuesToFetch()
  }

  handleSlider_3(sliderValue_3) {
    this.setState({ sliderValue_3: sliderValue_3 })
    this.postValuesToFetch()
  }

  handleSlider_4(sliderValue_4) {
    this.setState({ sliderValue_4: sliderValue_4 })
    this.postValuesToFetch()
  }

  handleSlider_5(sliderValue_5) {
    this.setState({ sliderValue_5: sliderValue_5 })
    this.postValuesToFetch()
  }


  componentDidMount() {
    fetch(`/api/v1/users/${user_handle}/products/${product_room}/effect_settings`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          sliderValue_1: body.parameter_1,
          sliderValue_2: body.parameter_2,
          sliderValue_3: body.parameter_3,
          sliderValue_4: body.parameter_4,
          sliderValue_5: body.parameter_5,
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render () {
    return (
      <div className={this.props.className} >
        <i className="fa fa-sliders fa-2x" id="box-icon" aria-hidden="true"></i>
        <div className='container-title'>Effect Settings</div>

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
      </div>
    )
  }
}

export default EffectContainer;
