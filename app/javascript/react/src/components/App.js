import React from 'react';
import RevealMenu from '../containers/RevealMenu';
import Dashboard from '../containers/Dashboard';

const App = props => {
  return(
    <div id='outer-container'>
      <div>
        <RevealMenu
          img={'../../../../assets/images/playstation-circle-dark-icon.png'}
          pageWrapId={ "page-wrap" }
          outerContainerId={ "outer-container" }
        />
      </div>
      <div id="page-wrap">
        <Dashboard />
      </div>
    </div>
  )
}

export default App;
