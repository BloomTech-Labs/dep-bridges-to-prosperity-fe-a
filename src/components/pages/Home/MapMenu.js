import React, { useState } from 'react';
//antDesign
import { Layout, Menu, Breadcrumb } from 'antd';

function MapMenu() {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const [slide, setSlide] = useState({
    collapsed: false,
  });
  //handles the collapse feature of the sidebar
  const onCollapse = collapsed => {
    setSlide = {
      collapsed: true,
    };
  };

  return <div></div>;
}

export default MapMenu;
