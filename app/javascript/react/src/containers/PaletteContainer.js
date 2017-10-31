import React from 'react';
import PaletteTiles from '../components/PaletteTiles';
import PaletteFixed from '../components/PaletteFixed';
import SearchField from '../components/SearchField';
import PaletteFlex from './PaletteFlex';

let user_handle = 'es6vank6ll';
let product_room = 'family-room';

class PaletteContainer extends React.Component {

  showSettings(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props)
    this.state = {
      color_palettes: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/users/${user_handle}/palettes`)
    .then(response => response.json())
    .then(body => { this.setState({ color_palettes: body }) })

    window.onload = function() {
      var palette_list = document.getElementById("palette-list");
      for (var index = 0; index < 8; index++) {
        var palette_container_div = document.createElement("div");
        palette_container_div.id = "palette-container";
        palette_list.appendChild(palette_container_div);
      }
    }
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
          {/* <PaletteFixed className='palette-adjust' /> */}

          <div id='palette-list'>
            <PaletteTiles
              palettes={this.state.color_palettes}
            />
          </div>

          {/* <PaletteTiles
            palettes={this.state.color_palettes}
          /> */}

          <div className='container-settings'>
            <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
          </div>
        </div>
        {/* <PaletteFlex /> */}
      </div>
    )
  }
}

export default PaletteContainer;
