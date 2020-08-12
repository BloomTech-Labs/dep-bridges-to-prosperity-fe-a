import React, { useState } from 'react';

function BridgeSiteList(props) {
  const [bridge, setBridge] = useState(props.mapData);

  return (
    <>
      {bridge.map(bridge => (
        <h3
          key={bridge.id}
          style={{ cursor: 'pointer' }}
          onClick={() => console.log(`I'm ${bridge.site_name}`)}
        >
          {bridge.site_name}
        </h3>
      ))}
    </>
  );
}

export default BridgeSiteList;
