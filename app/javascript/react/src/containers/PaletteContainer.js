import React from 'react';
import PaletteTiles from '../components/PaletteTiles';
import CurrentPaletteDisplay from '../components/CurrentPaletteDisplay';

let user_handle = 'qbyxndniwg';
let product_room = 'palette';
let current_palette_number = 658;

class PaletteContainer extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  constructor(props) {
    super(props)
    this.state = {
      color_palettes: [null, null, null, null, null, null, null, null],
      current_palette_number: null,
      current_palette: [null]
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
    fetch(`/api/v1/users/${user_handle}/products/${product_room}`)
    .then(response => response.json())
    .then(body => {
      this.setState({ current_palette_number: body.active_color_palette })
    })
    fetch(`/api/v1/palettes/658`)
    .then(response => response.json())
    .then(body => {
      this.setState({ current_palette: body })
    })
  }

  render() {
    return(
      <div className={this.props.className} >
        <div>
          <i className="fa fa-paint-brush fa-2x" id="box-icon" aria-hidden="true"></i>
          <div className='container-title'>Palettes</div>
        </div>

        <PaletteTiles
          className='palette-list'
          data={this.state.color_palettes}
        />

        {/* <PaletteTiles
          className='current-palette'
          data={this.state.current_palette}
        /> */}

        <div className='container-settings'>
          <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default PaletteContainer;
