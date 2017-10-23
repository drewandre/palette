import React from 'react';

class EffectContainer extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className={this.props.className} >
        <i className="fa fa-sliders fa-2x" id="box-icon" aria-hidden="true"></i>
      </div>
    )
  }
}

export default EffectContainer;
