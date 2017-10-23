import React from 'react';

class EffectContainer extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className={this.props.className} >
        Effect settings
      </div>
    )
  }
}

export default EffectContainer;
