import React from 'react';
import EffectContainer from './EffectContainer'
import SettingsContainer from './SettingsContainer'
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
    let updated_at = new Date(this.props.currentUser.updated_at)
    let month = updated_at.getMonth();
    let day = updated_at.getDate();
    // let year = updated_at.getYear();
    let hour = updated_at.getHours();
    let minutes = updated_at.getMinutes();
    let seconds = updated_at.getSeconds();

    return (
      <div>
        <div id='dashboard-title'>
          Dashboard |
        </div>
        <div id='dashboard-info'>
          <div>Product: {this.props.currentUser.current_product_name}</div>
          <div>Last Update: {month}-{day}, {hour}:{minutes}:{seconds}</div>
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
          <SettingsContainer
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
