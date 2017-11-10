import React from 'react';
import EffectContainer from './EffectContainer'
import SettingsContainer from './SettingsContainer'
import ApiContainer from './ApiContainer'
import PaletteContainer from './PaletteContainer'

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEffect: '',
      effectParameterNames: [],
      day: '',
      month: '',
      year: ''
    }
    this.getLastConnection = this.getLastConnection.bind(this);
    this.handleEffectChange = this.handleEffectChange.bind(this);
  }

  getLastConnection() {
    let updated_at = new Date(this.props.currentUser.created_at)
    let month = monthNames[updated_at.getMonth()];
    let day = updated_at.getDate();
    let year = updated_at.getFullYear();
    this.setState({
      day: day,
      month: month,
      year: year
    })
  }

  handleEffectChange(effect) {
    let activeEffect = effect.shift();
    this.setState({
      activeEffect: activeEffect,
      effectParameterNames: effect
    })
  }

  componentDidMount() {
    this.getLastConnection();
  }

  render() {
    return (
      <div className='dashboard'>
        <div className='dashboard-title'>
          Dashboard |
        </div>
        {/* <div id='name-and-updated'>Last Connection: {this.state.day} {this.state.month} {this.state.year}</div> */}
        <div id='name-and-updated'>Last Connection: November 10th, 2017</div>
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
              handleEffectChange={this.handleEffectChange}
            />
          </div>
        <div className='small-12 medium-12 large-5 columns'>
          <SettingsContainer
            currentUser={this.props.currentUser}
            className="box"
          />
        </div>
        <div className="small-12 medium-12 large-7 columns">
          <ApiContainer
            currentUser={this.props.currentUser}
            className='box'
            activeEffect={this.state.activeEffect}
            effectParameterNames={this.state.effectParameterNames}
          />
        </div>
      </div>
    </div>
    )
  }
}
export default Dashboard;
