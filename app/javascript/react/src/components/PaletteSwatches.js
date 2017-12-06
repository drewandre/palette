import React from 'react';
import PropTypes from 'prop-types';

const PaletteSwatches = props => {
	let numSwatches = 0;
	let id = props.id;
	let hex_1 = props.hex_1;
	let hex_2 = props.hex_2;
	let hex_3 = props.hex_3;
	let hex_4 = props.hex_4;
	let percentage_hex_1 = props.percentage_hex_1;
	let percentage_hex_2 = props.percentage_hex_2;
	let percentage_hex_3 = props.percentage_hex_3;
	let percentage_hex_4 = props.percentage_hex_4;
	let width_1 = 0;
	let width_2 = 0;
	let width_3 = 0;
	let width_4 = 0;

	if (hex_1 != null) {
		numSwatches += 1;
	}
	if (hex_2 != null) {
		numSwatches += 1;
	}
	if (hex_3 != null) {
		numSwatches += 1;
	}
	if (hex_4 != null) {
		numSwatches += 1;
	}

	width_1 = percentage_hex_1 / numSwatches;
	width_2 = percentage_hex_2 / numSwatches;
	width_3 = percentage_hex_3 / numSwatches;
	width_4 = percentage_hex_4 / numSwatches;

	return (
		<div
			onClick={props.handleSearchClick}
			value={id}
			className={props.swatchesClassName}
			key={props.id}
		>
			{props.handlePaletteDelete ? (
				<i
					onClick={props.handlePaletteDelete}
					className="fa fa-minus-circle fa-lg"
					id="palette-delete"
					aria-hidden="true"
				/>
			) : null}
			<div
				className="color-swatch"
				value={id}
				style={{ backgroundColor: hex_1, width: width_1 + '%' }}
			/>
			<div
				className="color-swatch"
				value={id}
				style={{ backgroundColor: hex_2, width: width_2 + '%' }}
			/>
			<div
				className="color-swatch"
				value={id}
				style={{ backgroundColor: hex_3, width: width_3 + '%' }}
			/>
			<div
				className="color-swatch"
				value={id}
				style={{ backgroundColor: hex_4, width: width_4 + '%' }}
			/>
		</div>
	);
};

PaletteSwatches.propTypes = {
	handleSearchClick: PropTypes.func,
	handlePaletteDelete: PropTypes.func,
	id: PropTypes.any,
	swatchesClassName: PropTypes.string,
	hex_1: PropTypes.string,
	hex_2: PropTypes.string,
	hex_3: PropTypes.string,
	hex_4: PropTypes.string,
	hex_5: PropTypes.string,
	percentage_hex_1: PropTypes.number,
	percentage_hex_2: PropTypes.number,
	percentage_hex_3: PropTypes.number,
	percentage_hex_4: PropTypes.number,
	percentage_hex_5: PropTypes.number
};

export default PaletteSwatches;
