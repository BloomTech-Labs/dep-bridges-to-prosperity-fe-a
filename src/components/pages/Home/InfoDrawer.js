import React, { useEffect } from 'react';
import { Drawer } from 'antd';

const InfoDrawer = props => {
  //   const [visible, setVisible] = useState(false);

  //     const showDrawer = () => {
  //       setVisible(true);
  //     };

  useEffect(() => {
    console.log('infodrawer line 14', props.clickedBridge);
  }, [props.clickedBridge]);

  return (
    <>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer
        title="Bridge Information"
        placement="left"
        closable={false}
        onClose={props.onClose}
        visible={props.visible}
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
