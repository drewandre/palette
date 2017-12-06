import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataSelectField from '../components/DataSelectField';
import ApiTiles from '../components/ApiTiles';
import ConnectionTiles from '../components/ConnectionTiles';

var STOCKS = [
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

class ApiContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			endpoint_keys: [null, null, null, null, null],
			endpoint_values: [null, null, null, null, null],
			selectedApiUrl: '',
			selectedApi: 'Weather',
			selectedApiOptions: 'Boston',
			fetchError: false,
			SYMBOL: 'AAPL',
			CITY: 'Boston',
			activeEffect: '',
			intervalId: null,
			lastUpdated: ''
		};
		this.handleSelect = this.handleSelect.bind(this);
		this.handleOptionsSelect = this.handleOptionsSelect.bind(this);
		this.getActiveApi = this.getActiveApi.bind(this);
		this.fetchStockData = this.fetchStockData.bind(this);
		this.fetchWeatherData = this.fetchWeatherData.bind(this);
		this.fetchCurrentApi = this.fetchCurrentApi.bind(this);
	}

	fetchCurrentApi() {
		this.props.handleLoading(true);
		var lastUpdated = new Date();
		var hours = lastUpdated.getHours();
		var minutes = lastUpdated.getMinutes();
		var seconds = lastUpdated.getSeconds();
		lastUpdated = `${hours}:${minutes}:${seconds}`;
		this.setState({ lastUpdated: lastUpdated });
		let currentApi = this.state.selectedApi;
		if (currentApi === 'real-time-stock-data') {
			let selectedApiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${
				this.state.SYMBOL
			}&interval=1min&apikey=L2S772FW0QB5CQM0`;
			this.fetchStockData(selectedApiUrl);
		} else if (currentApi === 'weather') {
			let selectedApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
				this.state.CITY
			},us&appid=aa3957e7e64baafee029f61847cde20c`;
			this.fetchWeatherData(selectedApiUrl);
		}
	}

	fetchStockData(apiUrlString) {
		fetch(apiUrlString)
			.then(response => response.json())
			.then(body => {
				var endpoint_keys = ['open', 'high', 'low', 'close', 'volume'];
				// var last_refreshed = Object.values(body)[0]["3. Last Refreshed"];
				var stock_history = Object.values(body)[1];
				var current_stock_value = Object.values(stock_history)[1];
				this.setState({
					endpoint_keys: endpoint_keys,
					endpoint_values: Object.values(current_stock_value)
				});
				this.props.handleLoading(false);
			});
	}

	fetchWeatherData(apiUrlString) {
		fetch(apiUrlString)
			.then(response => response.json())
			.then(body => {
				var endpoint_keys = [
					'conditions',
					'fahrenheit',
					'humidity',
					'cloudiness',
					'wind speed'
				];
				var endpoint_values = this.state.endpoint_values;
				endpoint_values[0] = body.weather[0].main;
				endpoint_values[1] =
					(Math.round(body.main.temp) - 273 + 32).toFixed(0) + '°F';
				endpoint_values[2] = body.main.humidity + '%';
				endpoint_values[3] = body.clouds.all + '%';
				endpoint_values[4] = body.wind.speed + 'm/s';
				this.setState({
					endpoint_keys: endpoint_keys,
					endpoint_values: endpoint_values
				});
				this.props.handleLoading(false);
			});
	}

	handleSelect(selectedItem) {
		this.props.handleLoading(true);
		if (typeof selectedItem != 'string') {
			selectedItem = selectedItem.target.value;
		}
		fetch(
			`/api/v1/users/${this.props.currentUser.handle}/products/${
				this.props.currentUser.current_product_name
			}`,
			{
				credentials: 'same-origin',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ active_api: selectedItem })
			}
		)
			.then(response => {
				this.setState({ selectedApi: selectedItem });
			})
			.then(response => {
				this.fetchCurrentApi();
			});
	}

	handleOptionsSelect(option) {
		this.props.handleLoading(true);
		if (this.state.selectedApi == 'weather') {
			this.setState({ CITY: option.target.value });
		} else if (this.state.selectedApi == 'real-time-stock-data') {
			this.setState({ SYMBOL: option.target.value });
		}
		this.handleSelect(this.state.selectedApi);
	}

	getActiveApi(nextUser) {
		this.props.handleLoading(true);
		fetch(
			`/api/v1/users/${nextUser.handle}/products/${
				nextUser.current_product_name
			}`
		)
			.then(response => response.json())
			.then(body => {
				this.setState({
					active_api: body.active_api
				});
				this.handleSelect(body.active_api);
			});
	}

	componentDidMount() {
		var intervalId = setInterval(this.fetchCurrentApi, 60000);
		this.setState({ intervalId: intervalId });
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser != this.props.currentUser) {
			this.getActiveApi(nextProps.currentUser);
		}
	}

	render() {
		return (
			<div className={this.props.className}>
				<div className="container-info">
					<div>
						<i
							className="fa fa-database fa-2x"
							id="api-box-icon"
							aria-hidden="true"
						/>
						<div className="container-title">Data</div>
					</div>
				</div>
				<DataSelectField
					handleSelect={this.handleSelect}
					handleOptionsSelect={this.handleOptionsSelect}
					value={this.state.selectedApiUrl}
					apiValue={this.state.selectedApi}
					optionsValue={this.state.selectedApiOptions}
				/>
				<div className="last-updated">
					Last Update: {this.state.lastUpdated}
				</div>
				<div className="api-control">
					<ApiTiles
						keys={this.state.endpoint_keys}
						values={this.state.endpoint_values}
						className="api-list"
					/>
					<ConnectionTiles
						effectParameterNames={this.props.effectParameterNames}
						className="connection-tile-list"
					/>
				</div>
			</div>
		);
	}
}

ApiContainer.propTypes = {
	handleLoading: PropTypes.func.isRequired,
	currentUser: PropTypes.object.isRequired,
	activeEffect: PropTypes.string,
	effectParameterNames: PropTypes.array.isRequired,
	className: PropTypes.string.isRequired
};

export default ApiContainer;
