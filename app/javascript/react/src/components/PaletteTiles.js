import React from 'react';
import PaletteSwatches from './PaletteSwatches'

const PaletteTiles = props => {

  let userPalettes = props.palettes.map(palette => {
    
    if(palette != null) {
      return (
        <PaletteSwatches
          key={palette.id}
          hex_1={palette.hex_1}
          hex_2={palette.hex_2}
          hex_3={palette.hex_3}
          hex_4={palette.hex_4}
          percentage_hex_1={palette.percentage_hex_1}
          percentage_hex_2={palette.percentage_hex_2}
          percentage_hex_3={palette.percentage_hex_3}
          percentage_hex_4={palette.percentage_hex_4}
        />
      );
    }
    else {
      console.log('NULL');
      return(
        <PaletteSwatches
          // key={null}
          hex_1={null}
          hex_2={null}
          hex_3={null}
          hex_4={null}
          percentage_hex_1={null}
          percentage_hex_2={null}
          percentage_hex_3={null}
          percentage_hex_4={null}
        />
      )
    }
  });
  debugger;
  return(
    <div className='palette-list'>
      {userPalettes}
    </div>
  )
}

export default PaletteTiles;
