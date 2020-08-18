import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BridgeFormAdd from './BridgeFormAdd.js';
import BridgeFormEdit from './BridgeFormEdit.js';
import BridgeSiteList from './BridgeSiteList.js';
import { getAllBridges } from '../../../state/actions/index.js';

function BridgeFormContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBridges());
  }, [dispatch]);

  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);

  // Sets editing status
  const [editing, setEditing] = useState(false);

  // This will hold the value of the bridge to edit
  const [toEdit, setToEdit] = useState(null);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const bridgeToEdit = clicked => {
    setEditing(!editing);
    console.log('To edit', clicked);
    setToEdit(clicked);
  };

  return (
    <>
      <BridgeSiteList bridges={bridgeData} bridgeToEdit={bridgeToEdit} />
      {editing ? (
        <BridgeFormEdit
          bridges={bridgeData}
          toggleEditing={toggleEditing}
          toEdit={toEdit}
        />
      ) : (
        <BridgeFormAdd bridges={bridgeData} />
      )}
    </>
  );
}

export default BridgeFormContainer;
