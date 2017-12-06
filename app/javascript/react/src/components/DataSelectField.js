import React from 'react';
import PropTypes from 'prop-types';

let WEATHER_SET = ['Boston', 'Concord', 'Nantucket', 'New London'];

var SYMBOL_SET = [
	'AAPL',
	'GOOG',
	'NVDA',
	'MSFT',
	'QCOM',
	'DIS',
	'NOK',
	'AMZN',
	'INTC'
];

const DataSelectField = props => {
	let options_switch;
	switch (props.apiValue) {
		case 'Weather':
			options_switch = WEATHER_SET;
			break;
		case 'real-time-stock-data':
			options_switch = SYMBOL_SET;
			break;
		default:
			options_switch = WEATHER_SET;
	}

	let options = options_switch.map(option => {
		return (
			<option value={option} key={Date.now + Math.random() * 100}>
				{[option][0]}
			</option>
		);
	});

	return (
		<div>
			<div className="select-field">
				<select
					value={props.apiValue}
					onChange={props.handleSelect}
					className="data-search"
				>
					<option value="weather">Weather</option>
					<option value="real-time-stock-data">Stocks</option>
				</select>
				<i
					className="fa fa-chevron-down"
					id="data-dropdown-arrow"
					aria-hidden="true"
				/>
			</div>
			<div className="data-options-field">
				<select
					value={props.selectedApiOptions}
					onChange={props.handleOptionsSelect}
					className="data-search"
				>
					{options}
				</select>
				<i
					className="fa fa-chevron-down"
					id="data-options-dropdown-arrow"
					aria-hidden="true"
				/>
			</div>
		</div>
	);
};

DataSelectField.propTypes = {
	handleSelect: PropTypes.func.isRequired,
	handleOptionsSelect: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	apiValue: PropTypes.string.isRequired,
	optionsValue: PropTypes.string.isRequired
};

export default DataSelectField;
