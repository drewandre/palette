import React from 'react';
import Dashboard from './containers/Dashboard';
import NavBar from './containers/NavBar';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: ''
		};
		this.loadUserData = this.loadUserData.bind(this);
	}

	loadUserData() {
		fetch('/api/v1/users.json', {
			credentials: 'same-origin',
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
			.then(response => {
				if (response.ok) {
					return response;
				}
			})
			.then(response => response.json())
			.then(body => {
				this.setState({
					currentUser: body.current_user
				});
			});
	}

	componentDidMount() {
		this.loadUserData();
	}

	render() {
		return (
			<div>
				<NavBar currentUser={this.state.currentUser} />
				<Dashboard currentUser={this.state.currentUser} />
			</div>
		);
	}
}

export default App;
