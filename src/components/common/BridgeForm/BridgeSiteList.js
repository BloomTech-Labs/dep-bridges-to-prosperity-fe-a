import React from 'react';
import BridgeSite from './BridgeSite.js';

function BridgeSiteList(props) {
  return (
    <>
      {props.bridges.map(bridge => (
        <div key={bridge.id}>
          <BridgeSite bridge={bridge} />
        </div>
      ))}
    </>
  );
}

export default BridgeSiteList;
