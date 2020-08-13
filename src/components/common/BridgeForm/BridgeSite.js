import React from 'react';

function BridgeSite(props) {
  return (
    <>
      <h3 style={{ cursor: 'pointer' }}>{props.bridge.site_name}</h3>
      <button onClick={() => props.toggleEditing(props.bridge.id)}>Edit</button>
    </>
  );
}

export default BridgeSite;
