import React from 'react';

const ConnectionTiles = props => {

  let connections = props.connections.map(connection => {
    return (
      <div className='connection-tiles'>
        <div className='connection'>Effect Parameter</div>
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
