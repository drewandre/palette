import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EffectContainer from './EffectContainer';
import SettingsContainer from './SettingsContainer';
import ApiContainer from './ApiContainer';
import PaletteContainer from './PaletteContainer';
import { Circle } from 'better-react-spinkit';

var monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeEffect: '',
			effectParameterNames: [],
			day: '',
			month: '',
			year: '',
			loading: false
		};
		this.getLastConnection = this.getLastConnection.bind(this);
		this.handleEffectChange = this.handleEffectChange.bind(this);
		this.handleLoading = this.handleLoading.bind(this);
	}

	getLastConnection(currentUser) {
		this.setState({ loading: true });
		let updated_at = new Date(currentUser.created_at);
		let month = monthNames[updated_at.getMonth()];
		let day = updated_at.getDate();
		let year = updated_at.getFullYear();
		this.setState({
			day: day,
			month: month,
			year: year
		});
		this.setState({ loading: false });
	}

	handleEffectChange(effect) {
		let activeEffect = effect.shift();
		this.setState({
			activeEffect: activeEffect,
			effectParameterNames: effect
		});
	}

	handleLoading(loadingStatus) {
		this.setState({ loading: loadingStatus });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser != this.props.currentUser) {
			this.getLastConnection(nextProps.currentUser);
		}
	}

	render() {
		let dashboardInfo = (
			<div id="name-and-updated">
				Last Connection: {this.state.day} {this.state.month} {this.state.year}
			</div>
		);
		if (this.state.loading) {
			dashboardInfo = (
				<Circle id="spinner" size={40} scaleEnd={1} color="#6F6F6F" />
			);
		}
		return (
			<div className="dashboard">
				<div className="dashboard-title">Dashboard |</div>
				{dashboardInfo}
				<div className="row collapse fullwidth">
					<div className="small-12 medium-12 large-6 columns">
						<PaletteContainer
							handleLoading={this.handleLoading}
							currentUser={this.props.currentUser}
							className="box"
						/>
					</div>
					<div className="small-12 medium-12 large-6 columns">
						<EffectContainer
							currentUser={this.props.currentUser}
							handleLoading={this.handleLoading}
							handleEffectChange={this.handleEffectChange}
							className="box"
						/>
					</div>
					<div className="small-12 medium-12 large-5 columns">
						<SettingsContainer
							handleLoading={this.handleLoading}
							currentUser={this.props.currentUser}
							className="box"
						/>
					</div>
					<div className="small-12 medium-12 large-7 columns">
						<ApiContainer
							currentUser={this.props.currentUser}
							handleLoading={this.handleLoading}
							activeEffect={this.state.activeEffect}
							effectParameterNames={this.state.effectParameterNames}
							className="box"
						/>
					</div>
				</div>
			</div>
		);
	}
}

// Dashboard.propTypes = {
//   currentUser: PropTypes.array
// };

export default Dashboard;
