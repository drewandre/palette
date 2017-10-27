import React from 'react';
import EffectContainer from './EffectContainer'
import ScheduleContainer from './ScheduleContainer'
import ApiContainer from './ApiContainer'
import PaletteContainer from './PaletteContainer'

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
      <div className='row fullwidth'>
        <div className='small-12 medium-12 large-6 columns'>
          <PaletteContainer className="box" />
        </div>
        <div className='small-12 medium-12 large-6 columns'>
          <EffectContainer className="box" />
        </div>
      <div className='small-12 medium-12 large-4 columns'>
        <ScheduleContainer className="box" />
      </div>
      <div className="small-12 medium-12 large-8 columns">
        <ApiContainer
          className='box'
          addSubmissions={this.addSubmissions}
        />
      </div>
    </div>
    )
  }
}

export default Dashboard;
