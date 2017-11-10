import React from 'react';

const ConnectionTiles = props => {
  
  let connections = props.effectParameterNames.map(connection => {
    return (
      // <select onChange={props.handleOptionsSelect} className='connection-tiles'>
      //   <option value={connection}>{connection}</option>
      // </select>
      <div className='connection-tiles'>
        {connection}
      </div>
    );
  });

  return(
    <div className={props.className}>
      {connections}
    </div>
  )
}

export default ConnectionTiles;
