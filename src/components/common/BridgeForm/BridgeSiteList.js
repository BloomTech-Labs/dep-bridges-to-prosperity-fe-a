import React from 'react';
import BridgeSite from './BridgeSite.js';

function BridgeSiteList(props) {
  return (
    <>
      {props.bridges.map(bridge => (
        <BridgeSite
          key={bridge.id}
          bridge={bridge}
          toggleEditing={props.toggleEditing}
        />
      ))}
    </>
  );
}

export default BridgeSiteList;
