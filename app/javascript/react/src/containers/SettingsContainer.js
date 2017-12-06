import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimePicker from './TimePicker.js';

class SettingsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			masterBrightness: 0,
			lastKeyPressedTime: 0
		};
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleMasterBrightness = this.handleMasterBrightness.bind(this);
		this.postScheduleToFetch = this.postScheduleToFetch.bind(this);
		this.getMasterBrightness = this.getMasterBrightness.bind(this);
	}

	postScheduleToFetch() {
		if (Date.now() - this.state.lastKeyPressedTime > 1000) {
			this.props.handleLoading(true);
			let formPayload = {
				master_brightness: this.state.masterBrightness
				// onTime: this.state.sliderValue_2,
				// offTime: this.state.sliderValue_3,
			};
			fetch(
				`/api/v1/users/${this.props.currentUser.handle}/products/${
					this.props.currentUser.current_product_name
				}`,
				{
					credentials: 'same-origin',
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formPayload)
				}
			).then(response => {
				this.props.handleLoading(false);
			});
		}
	}

	handleTimeChange(onEvent) {
		// this.setState({ onTime: onEvent.target.value})
		// setTimeout(() => this.postScheduleToFetch(), 1500);
	}

	handleMasterBrightness(brightnessEvent) {
		this.setState({
			lastKeyPressedTime: Date.now(),
			masterBrightness: brightnessEvent.target.value
		});
		setTimeout(() => this.postScheduleToFetch(), 1000);
	}

	getMasterBrightness(nextUser) {
		this.props.handleLoading(true);
		fetch(
			`/api/v1/users/${nextUser.handle}/products/${
				nextUser.current_product_name
			}`
		)
			.then(response => response.json())
			.then(body => {
				this.setState({
					masterBrightness: body.master_brightness
				});
				this.props.handleLoading(false);
			});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser != this.props.currentUser) {
			this.getMasterBrightness(nextProps.currentUser);
		}
	}

	render() {
		return (
			<div className={this.props.className}>
				<div>
					<i className="fa fa-cog fa-2x" id="box-icon" aria-hidden="true" />
					<div className="container-title">Settings</div>
					<div id="settings-info">
						{this.props.currentUser.current_product_name}
					</div>
				</div>
				<div className="schedule">
					<TimePicker
						handleLoading={this.props.handleLoading}
						handleTimeChange={this.handleTimeChange}
						currentUser={this.props.currentUser}
					/>
					<div id="master-brightness">Brightness</div>
					<input
						onChange={this.handleMasterBrightness}
						value={this.state.masterBrightness}
						className="master-brightness-slider"
						type="range"
						min="0"
						max="255"
					/>
				</div>
			</div>
		);
	}
}

SettingsContainer.propTypes = {
	handleLoading: PropTypes.func.isRequired,
	currentUser: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired
};

export default SettingsContainer;
