import React from 'react';
import RevealMenu from './containers/RevealMenu';
import Dashboard from './containers/Dashboard';
import NavBar from './containers/NavBar'

const App = props => {
  return(
    <div>
      <NavBar />
      <Dashboard />
    </div>
  )
}

export default App;
