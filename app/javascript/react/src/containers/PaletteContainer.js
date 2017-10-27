import React from 'react';
import PaletteFixed from '../components/PaletteFixed';
import SearchField from '../components/SearchField';
import PaletteFlex from './PaletteFlex';

class PaletteContainer extends React.Component {

  render() {
    return(
      <div>
        <div className={this.props.className} >
          <i className="fa fa-paint-brush fa-2x" id="box-icon" aria-hidden="true"></i>
          <div className='container-title'>Color Palettes</div>
          <SearchField
            handlerFunction={this.handleSearch}
            placeholder="search color palettes"
          />
          {/* <PaletteFixed className='palette-adjust' /> */}
        </div>
        {/* <PaletteFlex /> */}
      </div>
    )
  }
}

export default PaletteContainer;
