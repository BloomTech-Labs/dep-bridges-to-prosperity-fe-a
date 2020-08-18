import React from 'react';
import BridgeSite from './BridgeSite.js';

function BridgeSiteList(props) {
  return (
    <>
      {props.bridges.map(bridge => (
        <div key={bridge.id}>
          {console.log('bridge', bridge)}
          <BridgeSite bridge={bridge} bridgeToEdit={props.bridgeToEdit} />
        </div>
      ))}
    </>
  );
}

export default BridgeSiteList;
