import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BridgeFormAdd from './BridgeFormAdd.js';
import BridgeFormEdit from './BridgeFormEdit.js';
import { getAllBridges } from '../../../state/actions/index.js';
import { useOktaAuth } from '@okta/okta-react';
import './styles.less';

function BridgeFormContainer({ changeShow, changeIsEditing, isEditing }) {
  const dispatch = useDispatch();

  const { authState } = useOktaAuth();

  useEffect(() => {
    dispatch(getAllBridges());
  }, [dispatch]);

  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);

  const bridge = JSON.parse(window.localStorage.getItem('bridge'));

  return (
    <section className="form-cont-outer">
      {isEditing === true ? (
        <BridgeFormEdit
          bridge={bridge}
          authState={authState}
          changeIsEditing={changeIsEditing}
          changeShow={changeShow}
        />
      ) : (
        <BridgeFormAdd
          bridges={bridgeData}
          authState={authState}
          changeShow={changeShow}
        />
      )}
    </section>
  );
}

export default BridgeFormContainer;
