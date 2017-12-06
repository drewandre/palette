import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PaletteSwatches from '../components/PaletteSwatches';

class PaletteDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: '',
			name: '',
			hex_1: '',
			hex_2: '',
			hex_3: '',
			hex_4: '',
			percentage_hex_1: '',
			percentage_hex_2: '',
			percentage_hex_3: '',
			percentage_hex_4: ''
		};
	}

	componentWillReceiveProps(nextPalette) {
		if (nextPalette.data != this.props.data) {
			this.setState({
				key: nextPalette.data.key,
				name: nextPalette.data.name,
				hex_1: nextPalette.data.hex_1,
				hex_2: nextPalette.data.hex_2,
				hex_3: nextPalette.data.hex_3,
				hex_4: nextPalette.data.hex_4,
				percentage_hex_1: nextPalette.data.percentage_hex_1,
				percentage_hex_2: nextPalette.data.percentage_hex_2,
				percentage_hex_3: nextPalette.data.percentage_hex_3,
				percentage_hex_4: nextPalette.data.percentage_hex_4
			});
		}
	}

	render() {
		return (
			<div>
				<div className="current-palette-title">
					Displaying: {this.state.name}
				</div>
				<PaletteSwatches
					swatchesClassName="current-palette"
					handlePaletteDelete={null}
					key={this.state.key}
					hex_1={this.state.hex_1}
					hex_2={this.state.hex_2}
					hex_3={this.state.hex_3}
					hex_4={this.state.hex_4}
					percentage_hex_1={this.state.percentage_hex_1}
					percentage_hex_2={this.state.percentage_hex_2}
					percentage_hex_3={this.state.percentage_hex_3}
					percentage_hex_4={this.state.percentage_hex_4}
				/>
			</div>
		);
	}
}

export default PaletteDisplay;
