import React from 'react';
import DashboardTile from './DashboardTile'
import FormContainer from './FormContainer'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.addSubmissions = this.addSubmissions.bind(this)
  }

  showSettings (event) {
    event.preventDefault();
  }

  addSubmissions(submission) {
    this.setState({ data: this.state.data.concat(submission) })
  }

  render () {
    return (
      <div className='dashboard-grid'>
        <div className='row fullwidth'>
          <div className='small-12 medium-12 large-8 columns'>
            <DashboardTile className="box led-color-picker-tile" />
          </div>
          <div className='small-12 medium-12 large-4 columns'>
            <DashboardTile className="box led-movement-tile" />
          </div>
        </div>
        <div className='row fullwidth'>
          <div className='small-12 medium-12 large-4 columns'>
            <DashboardTile className="box led-data-tile" />
          </div>
          <div className="small-12 medium-12 large-8 columns">
            <FormContainer
              className='box accessory-tile'
              addSubmissions={this.addSubmissions}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
