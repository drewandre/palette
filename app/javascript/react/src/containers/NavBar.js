import React from 'react';
let user_handle = 'es6vank6ll';
let product_room = 'family-room';

class NavBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      powerStatus: false
    }
    this.handlePower = this.handlePower.bind(this);
  }


  componentDidMount() {
    fetch(`/api/v1/users/${user_handle}/products/${product_room}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        powerStatus: body.on
      });
    })
  }

  handlePower(buttonPress) {
    // this.setState({ powerStatus: !this.state.powerStatus })
    fetch(`/api/v1/users/${user_handle}/products/${product_room}`, {
      credentials: "same-origin",
      method: "POST",
      headers: {"Content-Type": "application/json"}
    })
    fetch(`/api/v1/users/${user_handle}/products/${product_room}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        powerStatus: body.on
      });
    })

  }

  render() {
    return (
      <div className={this.props.className}>
        <div id='nav-menu-button'>
          <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        </div>
        <div onClick={this.handlePower} id='power-status'>
          <i className='fa fa-power-off fa-2x' id={this.state.powerStatus.toString()} aria-hidden="true"></i>
        </div>
        <div id='account-dropdown'>
          <i className="fa fa-user fa-2x" aria-hidden="true"></i>
          <div className='user-name'>
            <div className='test' >
              <div>Drew André</div>
              <div>drew@gmail.com</div>
            </div>
          </div>
          <i className="fa fa-caret-down fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default NavBar;
