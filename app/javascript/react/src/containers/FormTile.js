import React from 'react';

class FormTile extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className={this.props.className} >
        <p>Hello from FormTile!</p>
      </div>
    )
  }
}

export default FormTile;
