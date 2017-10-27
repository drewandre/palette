import React from 'react';
import SliderMath from '../helpers/SliderMath'
import Slider from './Slider'

class EffectContainer extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  constructor(props) {
    super(props)
    this.state = {
      sliderValue: ''
    }
    this.handleSlider = this.handleSlider.bind(this);
  }

  handleSlider = (sliderValue) => this.setState({ sliderValue });

  render () {
    return (
      <div className={this.props.className} >
        <i className="fa fa-sliders fa-2x" id="box-icon" aria-hidden="true"></i>
        <div className='container-title'>Effect Settings</div>

        <div className="Components">
          <div className="Component">
            <div className="Component-slider">
              <Slider
                onChange={ this.handleSlider }
                value={ this.state.sliderValue }
                radius={ 70 }
                border={ 30 }
                min={ -50 }
                max={ 50 }
                angle={ Math.PI / 4 }
                origin={ 0.5 }
                start={ 0 }
              />
              <Slider
                onChange={ this.handleSlider }
                value={ this.state.sliderValue }
                radius={ 70 }
                border={ 30 }
                min={ -50 }
                max={ 50 }
                angle={ Math.PI / 4 }
                origin={ 0.5 }
                start={ 0 }
              />
              <Slider
                onChange={ this.handleSlider }
                value={ this.state.sliderValue }
                radius={ 70 }
                border={ 30 }
                min={ -50 }
                max={ 50 }
                angle={ Math.PI / 4 }
                origin={ 0.5 }
                start={ 0 }
              />
              <Slider
                onChange={ this.handleSlider }
                value={ this.state.sliderValue }
                radius={ 70 }
                border={ 30 }
                min={ -50 }
                max={ 50 }
                angle={ Math.PI / 4 }
                origin={ 0.5 }
                start={ 0 }
              />
              <Slider
                onChange={ this.handleSlider }
                value={ this.state.sliderValue }
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


// class Root extends Component {
//   state = { value: 0 };
//
//   constructor(props) {
//     super(props)
//   }
//
//   handleChange = (value) => this.setState({ value });
//
//   render() {
//     return (
//         <div className="Components">
//           <div className="Component">
//             <div className="Component-slider">
//               <Slider
//                 onChange={ this.handleChange }
//                 value={ this.state.value }
//                 radius={ 50 }
//                 border={ 50 }
//                 min={ -50 }
//                 max={ 50 }
//                 angle={ Math.PI / 2 }
//                 origin={ 1 }
//                 start={ -50 } />
//             </div>
//             <pre className="Component-properties">
// { `{
//     radius: 50,
//     border: 50,
//     min: -50,
//     max: 50,
//     angle: Math.PI / 2,
//     origin: 1,
//     start: -50,
//     value: ${ +this.state.value.toFixed(2) },
// }` }
//             </pre>
//           </div>
//
//           <div className="Component">
//             <div className="Component-slider">
//               <Slider
//                 onChange={ this.handleChange }
//                 value={ this.state.value }
//                 radius={ 70 }
//                 border={ 30 }
//                 min={ -50 }
//                 max={ 50 }
//                 angle={ Math.PI / 4 }
//                 origin={ .5 }
//                 start={ 0 } />
//             </div>
//             <pre className="Component-properties">
// { `{
//     radius: 70,
//     border: 30,
//     min: -50,
//     max: 50,
//     angle: Math.PI / 4,
//     origin: 0.5,
//     start: 0,
//     value: ${ +this.state.value.toFixed(2) },
// }` }
//             </pre>
//           </div>
//
//           <div className="Component">
//             <div className="Component-slider">
//               <Slider
//                 onChange={ this.handleChange }
//                 value={ this.state.value }
//                 radius={ 50 }
//                 border={ 50 }
//                 min={ -50 }
//                 max={ 50 }
//                 angle={ 0 }
//                 origin={ .25 }
//                 start={ 25 } />
//             </div>
//             <pre className="Component-properties">
// { `{
//     radius: 50,
//     border: 50,
//     min: -50,
//     max: 50,
//     angle: 0,
//     origin: 0.25,
//     start: 25,
//     value: ${ +this.state.value.toFixed(2) },
// }` }
//             </pre>
//           </div>
//
//           <div className="Component">
//             <div className="Component-slider">
//               <Slider
//                 onChange={ this.handleChange }
//                 value={ this.state.value }
//                 radius={ 90 }
//                 border={ 10 }
//                 min={ -50 }
//                 max={ 50 }
//                 angle={ -Math.PI / 6 }
//                 origin={ 0 }
//                 start={ 50 } />
//             </div>
//             <pre className="Component-properties">
// { `{
//     radius: 90,
//     border: 10,
//     min: -50,
//     max: 50,
//     angle: -Math.PI / 6,
//     origin: 0,
//     start: 50,
//     value: ${ +this.state.value.toFixed(2) },
// }` }
//             </pre>
//           </div>
//         </div>
//     )
//   }
// }
