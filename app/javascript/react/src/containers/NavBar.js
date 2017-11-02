import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      powerStatus: 'off',
      currentUser: []
    }
    this.handlePower = this.handlePower.bind(this);
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

  handlePower(buttonPress) {
    fetch(`/api/v1/users/${this.state.currentUser.handle}/products/${this.state.currentUser.handle}`, {
      credentials: "same-origin",
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })
    fetch(`/api/v1/users/${this.state.currentUser.handle}/products/${this.state.currentUser.handle}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        powerStatus: body.on
      });
    })
  }

  render() {
    return (
      <nav className='fixed-nav-bar'>
        <div className={this.props.className}>
          <div id='nav-menu-button'>
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          </div>
          <div onClick={this.handlePower} id='power-status'>
            <i className='fa fa-power-off fa-2x' id={this.state.powerStatus.toString()} aria-hidden="true"></i>
          </div>
          <div className='account-dropdown'>
            <div>
              <i className="fa fa-user fa-2x" id='user-icon' aria-hidden="true"></i>
              <div id='nav-user-name'>{this.state.currentUser.first_name}</div>
              <div id='nav-user-email'>{this.state.currentUser.email}</div>
            </div>
            <div id='nav-dropdown'>
              <div><a href='/sign-out'>Sign Out</a></div>
              <div><a href='/sign-out'>My Products</a></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
