import React, { useState } from 'react';

export function BridgeList({ bridge, loggedIn }) {
  const [bridgeInfoToggle, setBridgeInfoToggle] = useState(false);

  const toggleBridgeInfo = () => {
    setBridgeInfoToggle(!bridgeInfoToggle);
  };

  return (
    <div className="bridge-card">
      <h4>{bridge.name}</h4>
      {loggedIn ? <span>Edit Bridge</span> : null}
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
