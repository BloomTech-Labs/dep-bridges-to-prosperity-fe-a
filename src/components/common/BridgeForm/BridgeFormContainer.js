import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BridgeFormAdd from './BridgeFormAdd.js';
import BridgeFormEdit from './BridgeFormEdit.js';
import { getAllBridges } from '../../../state/actions/index.js';

function BridgeFormContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBridges());
  }, [dispatch]);

  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);

  const bridge = JSON.parse(window.localStorage.getItem('bridge'));
  const edit = JSON.parse(window.localStorage.getItem('editing'));

  return (
    <>
      {edit === true ? (
        <BridgeFormEdit bridge={bridge} />
      ) : (
        <BridgeFormAdd bridges={bridgeData} />
      )}
    </>
  );
}

export default BridgeFormContainer;
