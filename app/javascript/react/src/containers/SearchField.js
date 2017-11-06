import React from 'react';
import PaletteTiles from '../components/PaletteTiles'

class SearchField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searched_color_palettes: [],
      searchResultsEmpty: 'searchSuccess'
    }
    this.handleSelectedPalette = this.handleSelectedPalette.bind(this);
  }

  handleSelectedPalette(event){
    let search = event.target.value.replace(/\s+/, "")
    if(search !== '') {
      fetch(`/api/v1/palettes/search/${event.target.value}`)
      .then(response => response.json())
      .then(body => {
        this.setState({ searched_color_palettes: body.palettes })
        if(body.palettes.length === 0) {
          this.setState({ searchResultsEmpty: 'searchFail' })
        } else {
          this.setState({ searchResultsEmpty: 'searchSuccess' })
        }
      })
    } else {
      this.setState({ searched_color_palettes: [] })
    }
  }

  render() {
    console.log(this.state.searchResultsEmpty);
    return (
      <div>
        <form onSubmit={this.props.handleSelectedPalette}>
          <input
            className={this.props.paletteSearchBarClassName}
            autoComplete='off'
            onChange={this.handleSelectedPalette}
            type='text'
            placeholder={this.props.placeholder}
            id={this.searchResultsEmpty}
          />
        </form>
        <PaletteTiles
          swatchesClassName={this.props.swatchesClassName}
          className={this.props.searchResultsClassName}
          data={this.state.searched_color_palettes}
        />
      </div>
    );
  }
}

export default SearchField;
