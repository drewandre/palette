import React from 'react';

const EffectSelectField = props => {
	return (
		<div className="effect-select-field">
			<select
				value={props.value}
				onChange={props.handleSelect}
				className="effect-search"
			>
				<option value="radiate">Radiate</option>
				<option value="rainbow">Rainbow</option>
				<option value="splatter">Splatter</option>
				<option value="flex">Flex</option>
				<option value="ambient">Ambient</option>
				<option value="twinkle">Twinkle</option>
			</select>
			<i
				className="fa fa-chevron-down"
				id="effect-dropdown-arrow"
				aria-hidden="true"
			/>
		</div>
	);
};

export default EffectSelectField;
