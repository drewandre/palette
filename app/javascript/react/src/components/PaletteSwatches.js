import React from 'react';

const PaletteSwatches = props => {
  let hex_1 = props.hex_1
  let hex_2 = props.hex_2
  let hex_3 = props.hex_3
  let hex_4 = props.hex_4
  let percentage_hex_1 = props.percentage_hex_1
  let percentage_hex_2 = props.percentage_hex_2
  let percentage_hex_3 = props.percentage_hex_3
  let percentage_hex_4 = props.percentage_hex_4

  return(
    <div className={props.className}>
      <div className='color-swatch' style={{ backgroundColor: hex_1 }}/>
      <div className='color-swatch' style={{ backgroundColor: hex_2 }}/>
      <div className='color-swatch' style={{ backgroundColor: hex_3 }}/>
      <div className='color-swatch' style={{ backgroundColor: hex_4 }}/>
    </div>
  )
}

export default PaletteSwatches;
