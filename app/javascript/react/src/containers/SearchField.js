import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchPaletteTiles from '../components/SearchPaletteTiles';

class SearchField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searched_color_palettes: [],
			searchResultsEmpty: 'searchSuccess'
		};
		this.handlePaletteSearch = this.handlePaletteSearch.bind(this);
	}

	handlePaletteSearch(event) {
		let search = event.target.value.replace(/\s+/, '');
		if (search !== '') {
			fetch(`/api/v1/palettes/search/${event.target.value}`)
				.then(response => response.json())
				.then(body => {
					this.setState({ searched_color_palettes: body.palettes });
					if (body.palettes.length === 0) {
						this.setState({ searchResultsEmpty: 'searchFail' });
					} else {
						this.setState({ searchResultsEmpty: 'searchSuccess' });
					}
				});
		} else {
			this.setState({ searched_color_palettes: [] });
		}
	}

	render() {
		return (
			<div>
				<input
					className={this.props.paletteSearchBarClassName}
					autoComplete="off"
					onChange={this.handlePaletteSearch}
					type="text"
					placeholder={this.props.placeholder}
					id={this.searchResultsEmpty}
				/>
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
