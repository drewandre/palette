import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      powerStatus: false
    }
    this.handlePower = this.handlePower.bind(this);
  }

  handlePower(buttonPress) {
    fetch(`/api/v1/users/${this.props.currentUser.handle}/products/${this.props.currentUser.current_product_name}`, {
      credentials: "same-origin",
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })
    fetch(`/api/v1/users/${this.props.currentUser.handle}/products/${this.props.currentUser.current_product_name}`)
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
              <div id='nav-user-name'>{this.props.currentUser.first_name}</div>
              <div id='nav-user-email'>{this.props.currentUser.email}</div>
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
