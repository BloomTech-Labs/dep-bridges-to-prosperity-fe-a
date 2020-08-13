import React, { useState, useEffect } from 'react';
import BridgeFormAdd from './BridgeFormAdd.js';
import BridgeFormEdit from './BridgeFormEdit.js';
import BridgeSiteList from './BridgeSiteList.js';

//DUMMY DATA TO BE DELETED:
let data = [
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

function BridgeFormContainer() {
  const [editing, setEditing] = useState(false);
  console.log(editing);
  const [toEdit, setToEdit] = useState(null);
  // Setting up the dummy bridge state here
  const [mapData, setMapData] = useState(data);

  const toggleEditing = clicked => {
    setEditing(!editing);
    console.log('To edit', clicked);
    setToEdit(clicked);
  };
  console.log('out', toEdit);

  const addBridge = newBridge => {
    setMapData([...mapData, newBridge]);
  };
  //   const editBridge = clicked => {
  //     console.log('To edit', mapData.filter(clicked));
  //   };

  return (
    <>
      <BridgeSiteList mapData={mapData} toggleEditing={toggleEditing} />
      {editing ? (
        <BridgeFormEdit
          mapData={mapData}
          toggleEditing={toggleEditing}
          toEdit={toEdit}
        />
      ) : (
        <BridgeFormAdd mapData={mapData} addBridge={addBridge} />
      )}
    </>
  );
}

export default BridgeFormContainer;
