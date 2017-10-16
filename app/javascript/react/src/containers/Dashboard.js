import React from 'react';
import DashboardTile from './DashboardTile'
import FormTile from './FormTile'

class Dashboard extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className='dashboard-grid'>
        <DashboardTile className='box led-color-picker-tile' />
        <DashboardTile className='box led-movement-tile' />
        <DashboardTile className='box led-data-tile' />
        <FormTile className='box accessory-tile' />
      </div>
    )
  }
}

export default Dashboard;
