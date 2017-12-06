import React from 'react';
import PropTypes from 'prop-types';

const ConnectionTiles = props => {
	let connections = props.effectParameterNames.map(connection => {
		return (
			<div className="connection-tiles" key={Date.now + Math.random() * 100}>
				{connection}
			</div>
		);
	});
	return <div className={props.className}>{connections}</div>;
};

ConnectionTiles.propTypes = {
	effectParameterNames: PropTypes.array.isRequired,
	className: PropTypes.string.isRequired
};

export default ConnectionTiles;
