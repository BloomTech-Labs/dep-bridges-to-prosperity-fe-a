import React from 'react';
import BridgeFormAdd from './BridgeFormAdd.js';
import BridgeFormEdit from './BridgeFormEdit.js';
import BridgeSiteList from './BridgeSiteList.js';

function BridgeFormContainer() {
  //DUMMY DATA TO BE DELETED:
  let mapData = [
    {
      id: 1,
      site_name: 'Buzi',
      proj_stage: 'rejected',
      latitude: -2.42056,
      longitude: 28.9662,
    },
    {
      id: 2,
      site_name: 'Kamigisha',
      proj_stage: 'rejected',
      latitude: -2.42486,
      longitude: 28.95726,
    },
    {
      id: 3,
      site_name: 'Nyarubande',
      proj_stage: 'rejected',
      latitude: -1.65595,
      longitude: 30.07884,
    },
  ];

  return (
    <>
      <BridgeSiteList mapData={mapData} />
      <BridgeFormAdd mapData={mapData} />
      <BridgeFormEdit mapData={mapData} />
    </>
  );
}

export default BridgeFormContainer;
