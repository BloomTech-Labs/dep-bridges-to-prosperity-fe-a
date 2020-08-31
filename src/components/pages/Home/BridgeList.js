import React, { useState } from 'react';

export function BridgeList({ bridge, loggedIn, changeShow, changeIsEditing }) {
  const [bridgeInfoToggle, setBridgeInfoToggle] = useState(false);

  const toggleBridgeInfo = () => {
    setBridgeInfoToggle(!bridgeInfoToggle);
  };

  return (
    <div className="bridge-card">
      <h2>{bridge.name}</h2>
      {!bridgeInfoToggle ? null : (
        <div className="bridge-card">
          <p>Bridge Type: {bridge.type}</p>
          <p>Bridge Stage: {bridge.stage}</p>
          Communities Served:
          {bridge.communitiesServed.map(community => {
            return <li>{community.name}</li>;
          })}
        </div>
      )}

      <button style={{ color: '#666666' }} onClick={toggleBridgeInfo}>
        {!bridgeInfoToggle ? 'Show Info' : 'Hide Info'}
      </button>
      {loggedIn ? (
        <button
          style={{ width: '100%', color: '#666666' }}
          onClick={() => {
            window.localStorage.setItem('bridge', JSON.stringify(bridge)); //<-- SETTING BRIDGE OBJECT IN LOCAL STORAGE TO GET IN EDIT FORM
            changeIsEditing();
            changeShow();
          }}
        >
          Edit Bridge
        </button>
      ) : null}
    </div>
  );
}
