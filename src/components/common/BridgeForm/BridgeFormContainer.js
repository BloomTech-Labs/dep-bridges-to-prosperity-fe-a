import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BridgeFormAdd from './BridgeFormAdd.js';
import BridgeFormEdit from './BridgeFormEdit.js';
import BridgeSiteList from './BridgeSiteList.js';
import { fetchBridges } from '../../../state/actions/index.js';

function BridgeFormContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBridges());
  }, []);

  const bridges = useSelector(state => state.bridgeSites);

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
      <BridgeSiteList bridges={bridges} bridgeToEdit={bridgeToEdit} />
      {editing ? (
        <BridgeFormEdit
          bridges={bridges}
          toggleEditing={toggleEditing}
          toEdit={toEdit}
        />
      ) : (
        <BridgeFormAdd bridges={bridges} />
      )}
    </>
  );
}

export default BridgeFormContainer;
