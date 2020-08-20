import React from 'react';

function BridgeSite({ bridge, bridgeToEdit }) {
  return (
    <>
      <h3 style={{ cursor: 'pointer' }}>{bridge.name}</h3>
      <button>Edit</button>
    </>
  );
}

export default BridgeSite;
