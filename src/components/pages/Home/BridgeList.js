import React, { useState } from 'react';

export function BridgeList({ bridge, loggedIn }) {
  const [bridgeInfoToggle, setBridgeInfoToggle] = useState(false);

  const toggleBridgeInfo = () => {
    setBridgeInfoToggle(!bridgeInfoToggle);
  };

  return (
    <div className="bridge-card">
      <h4>{bridge.name}</h4>
      {loggedIn ? (
        <a href="/bridge-form">
          <button
            onClick={() => {
              window.localStorage.setItem('bridge', JSON.stringify(bridge));
              window.localStorage.setItem('editing', true);
            }}
          >
            Edit Bridge
          </button>
        </a>
      ) : null}
      <button onClick={toggleBridgeInfo}>
        {!bridgeInfoToggle ? 'Show Info' : 'Hide Info'}
      </button>
      {!bridgeInfoToggle ? null : (
        <ul>
          <li>Bridge Stage: {bridge.stage}</li>
        </ul>
      )}
    </div>
  );
}
