import React from 'react'

const EffectSelectField = props => {
  return (
    <div className='effect-select-field'>
      <select value={props.value} onChange={props.handleSelect} className="palette-search">
        <option value="weather">Radiate</option>
        <option value="real-time-stock-data">Radiate</option>
        <option value="slack">Radiate</option>
      </select>
      <i className="fa fa-chevron-down" id='effect-dropdown-arrow' aria-hidden="true"></i>
    </div>
  )
}

export default EffectSelectField;
