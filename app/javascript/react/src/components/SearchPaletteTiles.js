import React from 'react';
import PropTypes from 'prop-types';
import PaletteSwatches from './PaletteSwatches';

const SearchPaletteTiles = props => {
	let userPalettes = props.data.map(palette => {
		return (
			<div className="search-results" key={palette.id}>
				<PaletteSwatches
					swatchesClassName={props.swatchesClassName}
					handleSearchClick={props.handleSearchClick}
					handlePaletteDelete={props.handlePaletteDelete}
					key={palette.id}
					id={palette.id}
					hex_1={palette.hex_1}
					hex_2={palette.hex_2}
					hex_3={palette.hex_3}
					hex_4={palette.hex_4}
					percentage_hex_1={palette.percentage_hex_1}
					percentage_hex_2={palette.percentage_hex_2}
					percentage_hex_3={palette.percentage_hex_3}
					percentage_hex_4={palette.percentage_hex_4}
				/>
				<span className="palette-name">{palette.name}</span>
				<span className="palette-designer">by {palette.designer}</span>
			</div>
		);
	});
	return <div className={props.className}>{userPalettes}</div>;
};

SearchPaletteTiles.propTypes = {
	handleSearchClick: PropTypes.func.isRequired,
	swatchesClassName: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired
};

export default SearchPaletteTiles;
