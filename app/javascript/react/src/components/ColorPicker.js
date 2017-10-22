import React from 'react';
import { ChromePicker } from 'react-color';
var { Hue } = require('react-color/lib/components/common');

class ColorPicker extends React.Component {

  render() {
    return(
      <div className={this.props.className} >
        <ChromePicker
          // disableAlpha
        />
        {/* <Hue
          pointer={ _ChromePointer2.default }
          // onChange={ this.handleChange }
          direction={ 'horizontal' }
        /> */}
      </div>
    )
  }
}

export default ColorPicker;
