import React from 'react';
import EffectContainer from './EffectContainer'
import ScheduleContainer from './ScheduleContainer'
import ApiContainer from './ApiContainer'
import PaletteContainer from './PaletteContainer'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
      // data: []
    // }
    // this.addSubmissions = this.addSubmissions.bind(this)
  }

  // showSettings (event) {
  //   event.preventDefault();
  // }

  // addSubmissions(submission) {
  //   this.setState({ data: this.state.data.concat(submission) })
  // }

  render () {
    return (
      <div>
        <div id='dashboard-title'>
          Dashboard
        </div>
        <div className='row collapse fullwidth'>
          <div className='small-12 medium-12 large-6 columns'>
            <PaletteContainer
              currentUser={this.props.currentUser}
              className="box"
            />
          </div>
          <div className='small-12 medium-12 large-6 columns'>
            <EffectContainer
              currentUser={this.props.currentUser}
              className="box"
            />
          </div>
        <div className='small-12 medium-12 large-4 columns'>
          <ScheduleContainer
            currentUser={this.props.currentUser}
            className="box"
          />
        </div>
        <div className="small-12 medium-12 large-8 columns">
          <ApiContainer
            currentUser={this.props.currentUser}
            addSubmissions={this.addSubmissions}
            className='box'
          />
        </div>
      </div>
    </div>
    )
  }
}
export default Dashboard;
