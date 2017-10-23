import React from 'react';

const NavBar = props => {

  return (
    <div className={props.className}>
      <div id='nav-menu-button'>
        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
      </div>
      <div id='nav-alert'>
        <i className="fa fa-bell-o fa-lg" aria-hidden="true"></i>
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

export default NavBar;
