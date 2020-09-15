import React, { useState } from 'react';
import { Drawer } from 'antd';

export function BridgeList({
  bridge,
  loggedIn,
  changeShow,
  changeIsEditing,
  ZoomIn,
}) {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="bridge-card">
      <div className="bridge-card-info">
        <div className="bridge-card-title-wrapper">
          <h2
            style={{ cursor: 'pointer' }}
            onClick={() => {
              ZoomIn(bridge);
            }}
          >
            {bridge?.name}
          </h2>
        </div>
        <p className="bridge-type">
          Type: <b>{bridge?.type}</b>
        </p>
        <div className="bridge-card-info-secondary">
          <div className="image-placeholder">
            {' '}
            <h6 className="placeholder-name">IMG PLACEHOLDER</h6>
          </div>
          <p>
            Stage: <b>{bridge?.stage}</b>
          </p>
        </div>
        <div className="info-button-wrapper">
          <button onClick={showDrawer} className="info-button">
            More Infomation
          </button>
          <Drawer
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
            width={'45%'}
          >
            <div className="bridge-card-info-secondary">
              <h2>{bridge?.name}</h2>

              <p>Stage: {bridge?.stage}</p>
            </div>
            <h3>Regional Information</h3>

            <h4>Country</h4>
            <p>{bridge?.country}</p>
            <h4>Province</h4>
            <p>{bridge?.province}</p>
            <h4>Cell</h4>
            <p>{bridge?.cell}</p>
            <h4>District</h4>
            <p>{bridge?.district}</p>
            <h4>Latitude</h4>
            <p>{bridge?.latitude}</p>
            <h4>Longitude</h4>
            <p>{bridge?.longitude}</p>
            <h4>Communities Served:</h4>

            <h3>Identification Codes</h3>
            <h4>Project Code</h4>
            <p>{bridge?.project_code}</p>
          </Drawer>
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
