import React, { useState } from 'react';
//antDesign
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import MapSearchBar from './MapSearchBar';
import Mapbox from './Mapbox';

function MapMenu() {
  const { Sider } = Layout;
  //   const { SubMenu } = Menu;

  const [slide, setSlide] = useState({
    collapsed: false,
  });
  //handles the collapse feature of the sidebar
  const onCollapse = () => {
    setSlide = {
      collapsed: true,
    };
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
        <Sider collapsible collapsed={slide} onCollapse={setSlide}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item>
              <MapSearchBar />
            </Menu.Item>
            {/* When these Items are toggled, only display that which is selected*/}
            {/* Leaving this here for now, as an option -> going to mostlikely delete today for rendering bridge info */}
            {/* <Menu.Item key="1">All Markers</Menu.Item>
            <Menu.Item key="2">Village Sites</Menu.Item>
            <Menu.Item key="3">All Bridge Sites</Menu.Item>
            <Menu.Item key="4">Bridge Sites Under Construction</Menu.Item>
            <Menu.Item key="5">Proposed Bridge Sites</Menu.Item>
            <Menu.Item key="6">Rejected Bridge Sites</Menu.Item> */}
          </Menu>
        </Sider>
        <Mapbox />
      </Layout>
    </div>
  );
}

export default MapMenu;
