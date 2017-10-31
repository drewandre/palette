import React from 'react';
import PaletteTiles from '../components/PaletteTiles';
import PaletteFixed from '../components/PaletteFixed';
import SearchField from '../components/SearchField';
import PaletteFlex from './PaletteFlex'

let user_handle = '5zu61942l4';
let product_room = 'work';

class PaletteContainer extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  constructor(props) {
    super(props)
    this.state = {
      color_palettes: [null, null, null, null, null, null, null, null]
    }
  }

  componentDidMount() {
    fetch(`/api/v1/users/${user_handle}/palettes`)
    .then(response => response.json())
    .then(body => {
      const palettes = this.state.color_palettes;
      for(var i = 0; i < this.state.color_palettes.length; i++) {
        palettes[i] = body[i]
      }
      this.setState({ color_palettes: palettes })
    })
  }

  render() {
    return(
      <div>
        <div className={this.props.className} >
          <i className="fa fa-paint-brush fa-2x" id="box-icon" aria-hidden="true"></i>
          <h2 className='container-title'>Palettes | </h2>
          {/* <h4 className='container-dropdown'>Search</h4> */}
          {/* <SearchField
            handlerFunction={this.handleSearch}
            placeholder="search color palettes"
          /> */}

          <PaletteTiles
            palettes={this.state.color_palettes}
          />

          <div className='container-settings'>
            <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
          </div>
          <PaletteFixed className='palette-adjust' />
        </div>
      </div>
    )
  }
}

export default PaletteContainer;
