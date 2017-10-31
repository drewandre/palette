import React from 'react';

const PaletteTiles = props => {

  let userPalettes = props.palettes.map(palette => {
    let key = palette.id
    let hex_1 = palette.hex_1
    let hex_2 = palette.hex_2
    let hex_3 = palette.hex_3
    let hex_4 = palette.hex_4
    let percentage_hex_1 = palette.percentage_hex_1
    let percentage_hex_2 = palette.percentage_hex_2
    let percentage_hex_3 = palette.percentage_hex_3
    let percentage_hex_4 = palette.percentage_hex_4

    return (
      <div className='palette-container'>
        <div className='palette-color' style={{ backgroundColor: hex_1 }}/>
        <div className='palette-color' style={{ backgroundColor: hex_2 }}/>
        <div className='palette-color' style={{ backgroundColor: hex_3 }}/>
        <div className='palette-color' style={{ backgroundColor: hex_4 }}/>
      </div>
    );
  });

  return(
    <div>
      {userPalettes}
    </div>
  )
}

export default PaletteTiles;
