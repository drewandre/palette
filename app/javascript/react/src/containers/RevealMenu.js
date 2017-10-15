import React from 'react';
import { reveal as Menu } from 'react-burger-menu'

class RevealMenu extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu pageWrapId={this.props.pageWrapId} outerContainerId={this.props.outerContainerId} >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/">About</a>
        <a id="contact" className="menu-item" href="/">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default RevealMenu;
