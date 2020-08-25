import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BridgeFormAdd from './BridgeFormAdd.js';
import BridgeFormEdit from './BridgeFormEdit.js';
import { getAllBridges } from '../../../state/actions/index.js';
import { Modal } from 'antd';
import './styles.less';

function BridgeFormContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBridges());
  }, [dispatch]);

  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);

  const bridge = JSON.parse(window.localStorage.getItem('bridge'));
  const isEditing = JSON.parse(window.localStorage.getItem('editing'));

  return (
    <>
      <Modal visible={true} onOk={() => {}} onCancel={() => {}}>
        {isEditing === true ? (
          <BridgeFormEdit bridge={bridge} />
        ) : (
          <BridgeFormAdd bridges={bridgeData} />
        )}
      </Modal>
    </>
  );
}

export default BridgeFormContainer;
