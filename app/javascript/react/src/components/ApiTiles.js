import React from 'react';
import PropTypes from 'prop-types';

const ApiTiles = props => {
	function zipped(keys, values) {
		return keys.map((x, i) => [x, values[i]]);
	}
	let result = zipped(props.keys, props.values);

	let endpoints = result.map(endpoint => {
		return (
			<div className="endpoint-tiles" key={Date.now + Math.random() * 100}>
				<div className="api-key">{endpoint[0]}</div>
				<hr className="tile-divider" />
				<div className="api-value">{endpoint[1]}</div>
			</div>
		);
	});
	return <div className={props.className}>{endpoints}</div>;
};

ApiTiles.propTypes = {
	keys: PropTypes.array.isRequired,
	values: PropTypes.array.isRequired,
	className: PropTypes.string.isRequired
};

export default ApiTiles;
