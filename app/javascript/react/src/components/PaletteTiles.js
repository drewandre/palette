import React from 'react';
import PropTypes from 'prop-types';
import PaletteSwatches from './PaletteSwatches';

const PaletteTiles = props => {
	let userPalettes = props.data.map((palette, index) => {
		if (palette != null) {
			return (
				<PaletteSwatches
					handleSearchClick={props.handleSelectedPalette}
					handlePaletteDelete={props.handlePaletteDelete}
					key={palette.id}
					id={palette.id}
					swatchesClassName={props.swatchesClassName}
					hex_1={palette.hex_1}
					hex_2={palette.hex_2}
					hex_3={palette.hex_3}
					hex_4={palette.hex_4}
					hex_5={palette.hex_5}
					percentage_hex_1={palette.percentage_hex_1}
					percentage_hex_2={palette.percentage_hex_2}
					percentage_hex_3={palette.percentage_hex_3}
					percentage_hex_4={palette.percentage_hex_4}
					percentage_hex_5={palette.percentage_hex_5}
				/>
			);
		} else {
			return (
				<PaletteSwatches
					swatchesClassName={props.swatchesClassName}
					id="no-hover"
					key={Date.now + Math.random() * 100}
					name={null}
					hex_1={null}
					hex_2={null}
					hex_3={null}
					hex_4={null}
					percentage_hex_1={0}
					percentage_hex_2={0}
					percentage_hex_3={0}
					percentage_hex_4={0}
				/>
			);
		}
	});
	return <div className={props.className}>{userPalettes}</div>;
};

PaletteTiles.propTypes = {
	handleSelectedPalette: PropTypes.func.isRequired,
	handlePaletteDelete: PropTypes.func.isRequired,
	swatchesClassName: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	data: PropTypes.array
};

export default PaletteTiles;
