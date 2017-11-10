import React from 'react'

let WEATHER_SET = [
  'Boston',
  'Concord',
  'Nantucket',
  'New London'
]

var SYMBOL_SET = [
  'AAPL',
  'GOOG',
  'NVDA',
  'MSFT',
  'QCOM',
  'DIS',
  'NOK',
  'AMZN',
  'INTC'
];

const DataSelectField = props => {
  let options_switch;
  switch(props.apiValue) {
    case 'Weather':
      options_switch = WEATHER_SET;
      break;
    case 'real-time-stock-data':
      options_switch = SYMBOL_SET;
      break;
    default:
      options_switch = WEATHER_SET;
  }

  let options = options_switch.map(option => {
    return (
      <option value={option}>{[option][0]}</option>
    );
  });

  return (
    <div>
      <div className='select-field'>
        <select value={props.apiValue} onChange={props.handleSelect} className="data-search">
          <option value="weather">Weather</option>
          <option value="real-time-stock-data">Stocks</option>
          <option value="slack">Spotify</option>
        </select>
      </div>
      <div className='data-options-field'>
        <select value={props.selectedApiOptions} onChange={props.handleOptionsSelect} className="data-search">
          {options}
        </select>
      </div>
    </div>
  )
}

export default DataSelectField;
