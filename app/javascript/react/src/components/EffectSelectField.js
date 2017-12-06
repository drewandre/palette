import React from 'react';
import PropTypes from 'prop-types';

const EffectSelectField = props => {
	return (
		<div className="effect-select-field">
			<select
				value={props.value}
				onChange={props.handleSelect}
				className="effect-search"
			>
				<option value="Radiate">Radiate</option>
				<option value="Rainbow">Rainbow</option>
				<option value="Splatter">Splatter</option>
				<option value="Flex">Flex</option>
				<option value="Ambient">Ambient</option>
				<option value="Twinkle">Twinkle</option>
			</select>
			<i
				className="fa fa-chevron-down"
				id="effect-dropdown-arrow"
				aria-hidden="true"
			/>
		</div>
	);
};

EffectSelectField.propTypes = {
	handleSelect: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

export default EffectSelectField;
