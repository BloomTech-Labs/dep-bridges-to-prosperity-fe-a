import React, { useState } from 'react';
//antDesign
import { Layout, Menu } from 'antd';
import MapSearchBar from './MapSearchBar';
import Mapbox from './Mapbox';
import InfoDrawer from './InfoDrawer';

function MapMenu() {
  const { Sider } = Layout;

  const [clickedBridge, setClickedBridge] = useState({});
  const [visible, setVisible] = useState(false);

  //handles the click feature of the info
  const clickMarker = bridge => {
    setClickedBridge(bridge);
    console.log('clickMarker');
    console.log(bridge);
    setVisible(!visible);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Layout
        theme="dark"
        style={{
          minHeight: '100vh',
          maxHeight: '100vh',
          minWidth: '100vw',
          maxWidth: '100vw',
        }}
      >
        <Sider>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item>
              <MapSearchBar />
            </Menu.Item>
            <InfoDrawer
              clickedBridge={clickedBridge}
              visible={visible}
              onClose={onClose}
            ></InfoDrawer>
          </Menu>
        </Sider>
        <Mapbox clickMarker={clickMarker} />
      </Layout>
    </div>
  );
}

export default MapMenu;
