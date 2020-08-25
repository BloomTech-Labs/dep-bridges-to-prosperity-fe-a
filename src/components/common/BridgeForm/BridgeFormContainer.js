import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BridgeFormAdd from './BridgeFormAdd.js';
import BridgeFormEdit from './BridgeFormEdit.js';
import { getAllBridges } from '../../../state/actions/index.js';
import { useOktaAuth } from '@okta/okta-react';
import './styles.less';

function BridgeFormContainer({ changeShowForm }) {
  const dispatch = useDispatch();

  const { authState } = useOktaAuth();

  useEffect(() => {
    dispatch(getAllBridges());
  }, [dispatch]);

  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);

  const bridge = JSON.parse(window.localStorage.getItem('bridge'));
  const isEditing = JSON.parse(window.localStorage.getItem('editing'));

  return (
    <>
      {isEditing === true ? (
        <BridgeFormEdit bridge={bridge} authState={authState} />
      ) : (
        <BridgeFormAdd bridges={bridgeData} authState={authState} />
      )}
    </>
  );
}

export default BridgeFormContainer;
