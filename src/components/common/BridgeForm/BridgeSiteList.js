import React from 'react';
import BridgeSite from './BridgeSite.js';

function BridgeSiteList(props) {
  return (
    <>
      {props.bridges.map(bridge => (
        <BridgeSite
          key={bridge.id}
          bridge={bridge}
          bridgeToEdit={props.bridgeToEdit}
        />
      ))}
    </>
  );
}

export default BridgeSiteList;
