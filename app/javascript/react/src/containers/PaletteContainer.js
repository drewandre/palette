import React from 'react';
import PaletteTiles from '../components/PaletteTiles';
import SearchPaletteTiles from '../components/SearchPaletteTiles';
import PaletteDisplay from '../containers/PaletteDisplay';
import SearchField from '../containers/SearchField';
import PaletteNameInput from '../components/PaletteNameInput'
import * as Vibrant from 'node-vibrant'
import Dropzone from 'react-dropzone'

class PaletteContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color_palettes: [null, null, null, null, null, null, null, null],
      current_palette_number: null,
      current_palette: [],
      searched_color_palettes: '',
      TEMP_PALETTE_FILE: '',
      waiting_for_palette_name: false,
    }
    this.loadUserPalettes = this.loadUserPalettes.bind(this);
    this.handleSearchedPalette = this.handleSearchedPalette.bind(this);
    this.handleSelectedPalette = this.handleSelectedPalette.bind(this);
    this.fetchActiveColorPalette = this.fetchActiveColorPalette.bind(this);
    this.postUploadedPalette = this.postUploadedPalette.bind(this);
    this.retrieveProminentColors = this.retrieveProminentColors.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handlePaletteNameChange = this.handlePaletteNameChange.bind(this);
  }

  postUploadedPalette(hex_output) {
    fetch(`/api/v1/users/${this.props.currentUser.handle}/palettes`, {
      credentials: "same-origin",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(hex_output)
    })
    .then(body => {
      this.loadUserPalettes(this.props.currentUser)
    })
  }

  retrieveProminentColors(palette_name) {
    const that = this
    if (this.state.TEMP_PALETTE_FILE) {
      var img = new Image();
      var reader = new FileReader();
      reader.onload = (e) => {
        img.src = reader.result;
        Vibrant.from(img.src).maxColorCount(5).getPalette((err, swatches) => {
          if (err) throw err;
          return swatches
        })
        .then(swatches => {
          let hex_output = [];
          for (var key in swatches) {
            var swatch = swatches[key];
            if (swatch) {
              var hex = swatch.getHex();
              hex_output.push(hex);
            }
          }
          hex_output.unshift(palette_name)
          that.postUploadedPalette(hex_output)
        })
      }
      reader.readAsDataURL(this.state.TEMP_PALETTE_FILE);
    }
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

  onDrop(file) {
    this.setState({ TEMP_PALETTE_FILE: file[0] })
    this.setState({ waiting_for_palette_name: true })
  }

  handlePaletteNameChange(event) {
    event.preventDefault();
    var palette_name = event.target.children[0].value;
    this.setState({
      waiting_for_palette_name: false
    })
    $('.palette-dropzone').css({
      filter: 'none'
    });
    this.retrieveProminentColors(palette_name);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentUser != this.props.currentUser) {
      this.loadUserPalettes(nextProps.currentUser)
      this.fetchActiveColorPalette(nextProps.currentUser)
    }
  }

  render() {

    let palette_name_input;
    if(this.state.waiting_for_palette_name) {
      palette_name_input =
      <PaletteNameInput
        className='palette-name-input'
        handleChange={this.handlePaletteNameChange}
      />
    } else {
      palette_name_input = null
    }

    return(
        <div className={this.props.className}>
          {palette_name_input}
          <div className='upload-instructions'>Drop image here to creat a custom color palette</div>
          <Dropzone onDrop={this.onDrop} disableClick='true' className='palette-dropzone'>
            <div>
              <i className="fa fa-paint-brush fa-2x" id="box-icon" aria-hidden="true"></i>
              <div className='container-title'>Palettes</div>
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
              />
            </div>
          </Dropzone>
        <i className="fa fa-upload fa-2x" id='palette-upload' aria-hidden="true"></i>
        </div>
    )
  }
}

export default PaletteContainer;
