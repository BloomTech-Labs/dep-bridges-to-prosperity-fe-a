import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';

const InfoModal = props => {
  let [state, setState] = useState({
    loading: false,
    visible: false,
  });
  //pasted code from infoDrawer//
  useEffect(() => {
    console.log('InfoModal line 11', props.clickedBridge);
  }, [props.clickedBridge]);

  //

  let showModal = () => {
    setState({
      visible: true,
    });
  };

  let handleOk = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState({ loading: false, visible: false });
    }, 3000);
  };

  let handleCancel = () => {
    setState({ visible: false });
  };

  const { visible, loading } = state;
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        visible={visible}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <p>Site Name:{props.clickedBridge.name}</p>
        <p>Project Stage:{props.clickedBridge.proj_stage}</p>
        <p>Latitude: {props.clickedBridge.latitude}</p>
        <p>Longitude: {props.clickedBridge.longitude}</p>
        <p>Stage: {props.clickedBridge.stage}</p>
        <p>subStage: {props.clickedBridge.subStage}</p>
        <p>type: {props.clickedBridge.type}</p>
        <p>
          individuals Directly Served:{' '}
          {props.clickedBridge.individualsDirectlyServed}
        </p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default InfoModal;

// Shape of data

// id: 1014107
// individualsDirectlyServed: 0
// latitude: -2.42056
// longitude: 28.9662
// name: "Buzi"
// span: 0
// stage: "Rejected"
// subStage: "Technical"
// type: "Suspended"
