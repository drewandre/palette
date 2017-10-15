import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react/src/constants/App';
import RevealMenu from '../react/src/containers/RevealMenu';

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(<App />, document.getElementById('app'));
// })

// ReactDOM.render(
//   <RevealMenu />,
//   document.getElementById('outer-container')
// );

// ReactDOM.render(
//   <h1>Boo yaa</h1>,
//   document.getElementById('app')
// );

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
