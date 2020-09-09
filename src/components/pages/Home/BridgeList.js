import React from 'react';

export function BridgeList({
  bridge,
  loggedIn,
  changeShow,
  changeIsEditing,
  ZoomIn,
}) {
  return (
    <div className="bridge-card">
      <div className="bridge-card-info">
        <div className="bridge-card-title-wrapper">
          <h2
            onClick={() => {
              ZoomIn(bridge);
            }}
          >
            {bridge.name}
          </h2>
        </div>
        <p className="bridge-type">
          Type: <b>{bridge.type}</b>
        </p>
        <div className="bridge-card-info-secondary">
          <div className="image-placeholder">
            {' '}
            <h6 className="placeholder-name">IMG PLACEHOLDER</h6>
          </div>
          <p>
            Stage: <b>{bridge.stage}</b>
          </p>
          <p>
            Serving:{' '}
            {/* <b>
              {
                bridge.communities_served.map(community => {
                  return <>{community}</>;
                }).length
              }
            </b> */}
          </p>
        </div>
      </div>
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
