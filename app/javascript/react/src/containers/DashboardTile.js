import React from 'react';

class DashboardTile extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className={this.props.className} >
        <p>Hello from DashboardTile!</p>
      </div>
    )
  }
}

export default DashboardTile;
