import React, { useState } from 'react';
//antDesign
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import MapSearchBar from './MapSearchBar';
import Mapbox from './Mapbox';

function MapMenu() {
  const { Sider, Content } = Layout;
  //   const { SubMenu } = Menu;

  const [slide, setSlide] = useState({
    collapsed: false,
  });
  //handles the collapse feature of the sidebar
  const onCollapse = collapsed => {
    setSlide = {
      collapsed: true,
    };
  };

  return (
    <div>
      <Layout theme="dark" style={{ minHeight: '100%' }}>
        <Sider collapsible collapsed={slide} onCollapse={setSlide}>
          <Menu theme="dark" mode="inline">
            <Menu.Item>
              <MapSearchBar />
            </Menu.Item>

            {/* <Menu.Item key="1">Bridge Sites</Menu.Item>
            <Menu.Item key="2">Village Sites</Menu.Item> */}
          </Menu>
        </Sider>
        <Mapbox />
      </Layout>
    </div>
  );
}

export default MapMenu;
