import React from 'react';

const PaletteNameInput = props => {
	return (
		<form onSubmit={props.handleChange}>
			<input
				className={props.className}
				type="text"
				placeholder="enter a name"
				autoComplete="off"
				autoFocus="on"
			/>
		</form>
	);
};

export default PaletteNameInput;
