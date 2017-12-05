import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      powerStatus: false
    }
    this.handlePower = this.handlePower.bind(this);
    this.getPowerState = this.getPowerState.bind(this);
  }

  getPowerState(nextUser) {
    fetch(`/api/v1/users/${nextUser.handle}/products/${nextUser.current_product_name}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        powerStatus: body.on
      })
    })
  }

  handlePower() {
    this.setState({ powerStatus: !this.state.powerStatus })
    let on = !this.state.powerStatus;
    fetch(`/api/v1/users/${this.props.currentUser.handle}/products/${this.props.currentUser.current_product_name}`, {
      credentials: "same-origin",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ on: on })
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentUser != this.props.currentUser) {
      this.getPowerState(nextProps.currentUser);
    }
  }

  render() {
    return (
      <nav className='fixed-nav-bar'>
        <div id='nav-logo'>palette</div>
        <div className={this.props.className}>
          <div onClick={this.handlePower} id='power-status'>
            <i className='fa fa-power-off fa-2x' id={this.state.powerStatus.toString()} aria-hidden="true"></i>
          </div>
          <div className='account-dropdown'>
            <div className='account-info'>
              <i className="fa fa-user fa-2x" id='user-icon' aria-hidden="true"></i>
              {/* <img src={this.props.currentUser.avatar_url} id='user-icon'/> */}
              <div id='nav-user-name'>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</div>
              <div id='nav-user-email'>{this.props.currentUser.handle}</div>
            </div>
            <div id='nav-dropdown'>
              <div>
                {/* link_to("Sign Out", "http://www.example.com", method: :delete) */}
                <a href='/sign-out'>Sign Out</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
