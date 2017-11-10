import React from 'react';
import SearchPaletteTiles from '../components/SearchPaletteTiles'

class SearchField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searched_color_palettes: [],
      searchResultsEmpty: 'searchSuccess'
    }
    // this.handleSelectedPalette = this.handleSelectedPalette.bind(this);
    this.handlePaletteSearch = this.handlePaletteSearch.bind(this);
  }

  handlePaletteSearch(event){
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
    // console.log(this.state.searchResultsEmpty);
    return (
      <div>
        {/* <form onSubmit={this.props.handleSelectedPalette}> */}
        <input
          className={this.props.paletteSearchBarClassName}
          autoComplete='off'
          onChange={this.handlePaletteSearch}
          type='text'
          placeholder={this.props.placeholder}
          id={this.searchResultsEmpty}
        />
          {/* <i className="fa fa-chevron-down" id='search-arrow' aria-hidden="true"></i> */}
        {/* </form> */}
        <SearchPaletteTiles
          swatchesClassName={this.props.swatchesClassName}
          className={this.props.searchResultsClassName}
          data={this.state.searched_color_palettes}
          handleSearchClick={this.props.handleSearchedPalette}
        />
      </div>
    );
  }
}

export default SearchField;
