import React from 'react'

const DataSelectField = props => {
  return (
    <div className='select-field'>
      <select value={props.value} onChange={props.handleSelect} className="data-search">
        <option value="weather">Weather</option>
        <option value="real-time-stock-data">Stocks</option>
        <option value="slack">Spotify</option>
      </select>
      <i className="fa fa-chevron-down" id='dropdown-arrow' aria-hidden="true"></i>
    </div>
  )
}

export default DataSelectField;
