import React from 'react';
import PaletteTiles from '../components/PaletteTiles';
import PaletteDisplay from '../containers/PaletteDisplay';
import SearchField from '../containers/SearchField';

let index = 0;
class PaletteContainer extends React.Component {
  showSettings(event) {
    // event.preventDefault();
  }

  constructor(props) {
    super(props)
    this.state = {
      color_palettes: [null, null, null, null, null, null, null, null],
      current_palette_number: null,
      current_palette: [],
      searched_color_palettes: ''
    }
    this.loadUserPalettes = this.loadUserPalettes.bind(this);
    this.handleSelectedPalette = this.handleSelectedPalette.bind(this);
  }

  handleSelectedPalette(event) {
    console.log(event.target.value);
    // fetch(`/api/v1/palettes/${event.target.value}`)
    // .then(response => response.json())
    // .then(body => {
    //   console.log(body);
    //   // this.setState({ searched_color_palettes: body })
    // })
  }

  loadUserPalettes(nextUser) {
    fetch(`/api/v1/users/${nextUser.handle}/palettes`)
    .then(response => response.json())
    .then(body => {
      const palettes = this.state.color_palettes;
      for(var i = 0; i < palettes.length; i++) {
        palettes[i] = body.palettes[i]
      }
      this.setState({ color_palettes: palettes })
    })
    fetch(`/api/v1/users/${nextUser.handle}/products/${nextUser.current_product_name}`)
    .then(response => response.json())
    .then(body => {
      this.setState({ current_palette_number: body.active_color_palette })
      return fetch(`/api/v1/palettes/${body.active_color_palette}`)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ current_palette: body })
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentUser != this.props.currentUser) {
      this.loadUserPalettes(nextProps.currentUser);
    }
  }

  render() {
    return(
      <div className={this.props.className} >
        <div>
          <i className="fa fa-paint-brush fa-2x" id="box-icon" aria-hidden="true"></i>
          <div className='container-title'>Palettes</div>
        </div>
        <PaletteTiles
          swatchesClassName='palette-container'
          className='palette-list'
          data={this.state.color_palettes}
        />

        <div className='palette-search-results'>
          <SearchField
            paletteSearchBarClassName='palette-search'
            swatchesClassName='palette-search-container'
            searchResultsClassName='palette-dropdown'
            placeholder='search palettes'
            handleSelectedPalette={this.handleSelectedPalette}
          />
        </div>

        <PaletteDisplay
          data={this.state.current_palette}
          // will eventually need to pass the MODIFIED current palette back HERE
        />

        <div className='container-search' id='palette-search'>
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default PaletteContainer;
