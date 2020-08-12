import React, { useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';

const InfoDrawer = props => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    console.log('infodrawer line 14', props.clickedBridge);
  }, [props.clickedBridge]);

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div>
          <p>Site Name:{props.clickedBridge.site_name}</p>
          <p>Project Stage:{props.clickedBridge.proj_stage}</p>
          <p>Latitude:{props.clickedBridge.latitude}</p>
          <p>Longitude:{props.clickedBridge.longitude}</p>
        </div>
      </Drawer>
    </>
  );
};
export default InfoDrawer;
