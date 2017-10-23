import React from 'react';
import PaletteAdjust from '../components/PaletteAdjust';

class PaletteContainer extends React.Component {

  render() {
    return(
      <div>
        <div className={this.props.className} >
          <div>Palette settings</div>
        </div>
        <div>
          {/* <PaletteAdjust className='box palette-adjust' /> */}
        </div>
      </div>
    )
  }
}

export default PaletteContainer;
