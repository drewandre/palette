import React from 'react';
import Dashboard from './containers/Dashboard';
import NavBar from './containers/NavBar'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: []
    }
    this.loadUserData = this.loadUserData.bind(this);
  }

  loadUserData() {
    fetch('/api/v1/users.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
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
      })
    })
  }

  componentWillMount() {
    this.loadUserData();
  }

  render() {
    let currentUser;
    if(this.state.currentUser != null) {
      currentUser = this.state.currentUser;
    }

    return(
      <div>
        <NavBar currentUser={currentUser} />
        <Dashboard currentUser={currentUser} />
      </div>
    )
  }
}

export default App
