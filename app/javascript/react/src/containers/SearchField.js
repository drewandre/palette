import React from 'react';
import PaletteTiles from '../components/PaletteTiles'

class SearchField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searched_color_palettes: []
    }
    this.handleSelectedPalette = this.handleSelectedPalette.bind(this);
  }

  handleSelectedPalette(event){
    if(event.target.value != '') {
      fetch(`/api/v1/palettes/${event.target.value}`)
      .then(response => response.json())
      .then(body => {
        // console.log(body.palettes);
        this.setState({ searched_color_palettes: body.palettes })
      })
    } else {
      this.setState({ searched_color_palettes: [] })
    }
  }

  render() {

    // let searchResults = this.state.searched_color_palettes.map(palette =>{
    //   return (
    //     <PaletteTiles
    //       data={this.state.searched_color_palettes}
    //       className='palette-list'
    //     />
    //   );
    // })

    return (
      <div className='palette-search-results-test'>
        <form onSubmit={this.props.handleSelectedPalette}>
          <input
            className={this.props.paletteSearchBarClassName}
            autoComplete='off'
            onChange={this.handleSelectedPalette}
            type='text'
            placeholder={this.props.placeholder}
          />
        </form>
        <PaletteTiles
          data={this.state.searched_color_palettes}
          swatchesClassName={this.props.swatchesClassName}
          className={this.props.searchResultsClassName}
        />
      </div>
    );
  }
}

export default SearchField;
