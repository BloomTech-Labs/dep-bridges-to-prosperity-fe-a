import React, { useState } from 'react';

export function BridgeList({ bridge, loggedIn, changeShow }) {
  const [bridgeInfoToggle, setBridgeInfoToggle] = useState(false);

  const toggleBridgeInfo = () => {
    setBridgeInfoToggle(!bridgeInfoToggle);
  };

  return (
    <div className="bridge-card">
      <h4>{bridge.name}</h4>
      <button style={{ color: '#666666' }} onClick={toggleBridgeInfo}>
        {!bridgeInfoToggle ? 'Show Info' : 'Hide Info'}
      </button>
      {!bridgeInfoToggle ? null : (
        <ul>
          <li>Bridge Stage: {bridge.stage}</li>
        </ul>
      )}
      {loggedIn ? (
        <button
          style={{ width: '100%', color: '#666666' }}
          onClick={() => {
            window.localStorage.setItem('bridge', JSON.stringify(bridge));
            window.localStorage.setItem('editing', true);
            changeShow();
          }}
        >
          Edit Bridge
        </button>
      ) : null}
    </div>
  );
}
