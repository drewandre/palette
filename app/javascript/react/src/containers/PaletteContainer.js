import React from 'react';
import PaletteTiles from '../components/PaletteTiles';
import SearchPaletteTiles from '../components/SearchPaletteTiles';
import PaletteDisplay from '../containers/PaletteDisplay';
import SearchField from '../containers/SearchField';

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
    this.handleSearchedPalette = this.handleSearchedPalette.bind(this);
    this.handleSelectedPalette = this.handleSelectedPalette.bind(this);
    this.fetchActiveColorPalette = this.fetchActiveColorPalette.bind(this);
  }

  handleSelectedPalette(searchClick) {
    event.preventDefault();
    var active_color_palette = parseInt(searchClick.target.attributes[1].value);
    fetch(`/api/v1/users/${this.props.currentUser.handle}/products/${this.props.currentUser.current_product_name}`, {
      credentials: "same-origin",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ active_color_palette })
    })
    for(var i = 0; i < 8; i++) {
      if(this.state.color_palettes[i].id === active_color_palette) {
        this.setState({ current_palette: this.state.color_palettes[i] })
      }
    }
  }

  handleSearchedPalette(searchClick) {
    event.preventDefault();
    var palette_id = parseInt(searchClick.target.attributes[1].value);
    fetch(`/api/v1/users/${this.props.currentUser.handle}/palettes`, {
      credentials: "same-origin",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ palette_id })
    })
    .then(body => {
      this.loadUserPalettes(this.props.currentUser)
    })
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
  }

  fetchActiveColorPalette(nextUser) {
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
      this.loadUserPalettes(nextProps.currentUser)
      this.fetchActiveColorPalette(nextProps.currentUser)
    }
  }

  render() {
    return(
      <div className={this.props.className}>
        <div>
          <i className="fa fa-paint-brush fa-2x" id="box-icon" aria-hidden="true"></i>
          <div className='container-title'>Palettes | </div>
        </div>

        <div className='palette-search-results'>
          <SearchField
            paletteSearchBarClassName='palette-search'
            swatchesClassName='palette-search-container'
            searchResultsClassName='palette-dropdown'
            placeholder='Search'
            handleSearchedPalette={this.handleSearchedPalette}
          />
        </div>
        <div className='palette-blur'>
          <PaletteTiles
            swatchesClassName='palette-container'
            className='palette-list'
            data={this.state.color_palettes}
            handleSelectedPalette={this.handleSelectedPalette}
          />

          <PaletteDisplay
            data={this.state.current_palette}
            // will eventually need to pass the MODIFIED current palette back HERE
          />
        </div>
      </div>
    )
  }
}

export default PaletteContainer;
