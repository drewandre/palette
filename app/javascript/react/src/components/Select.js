import React from 'react';

const Select = props => {
	let optionElements = props.options.map(option => {
		return (
			<option key={option} value={option}>
				{option}
			</option>
		);
	});

	return (
		<label>
			{props.label}
			<select
				name={props.name}
				value={props.selectedOption}
				onChange={props.handlerFunction}
			>
				<option value="" />
				{optionElements}
			</select>
		</label>
	);
};

export default Select;
