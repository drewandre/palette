import React from 'react'

const SelectField = props => {
  return (
    <div className='select-field'>
      <select value={props.value} onChange={props.handleSelect} className="palette-search">
        <option value="https://www.api.openweathermap.org/data/2.5/weather?q=London">Weather</option>
        <option value="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=L2S772FW0QB5CQM0">Alpha Vantage (Stock)</option>
        <option value="https://www.api.slack.com/events-api">Slack API</option>
        {/* <option value="Twitter">Twitter</option> */}
      </select>
    </div>
  )
}

export default SelectField;
