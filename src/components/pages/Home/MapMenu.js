import React, { useState, useEffect } from 'react';
//antDesign
// import axios from 'axios';
import { Layout, Menu } from 'antd';
import MapSearchBar from './MapSearchBar';
import Mapbox from './Mapbox';
import InfoDrawer from './InfoDrawer';
import { useSelector, useDispatch } from 'react-redux';
// import { dummyData } from './dummyData';
import { FlyToInterpolator } from 'react-map-gl';
import { getAllMapData } from '../../../state/actions';
function MapMenu(props) {
  // const [mapData, setMapData] = u
  const dispatch = useDispatch();
  const { mapData, loading, error } = useSelector(
    state => state.mapDataReducer
  );

  const { Sider } = Layout;

  useEffect(() => {
    dispatch(getAllMapData());
  }, [dispatch]);
  const [viewport, setViewport] = useState({
    //this is bridge site 1 coordinates
    latitude: -2.42056,
    longitude: 28.9662,
    width: '100vw',
    height: '100vh',
    zoom: 15,
  });
  //state for information to be displayed
  const [infoDisplay, setInfoDisplay] = useState({
    site_name: '',
    proj_stage: '',
    latitude: null,
    longitude: null,
  });

  const [clickedBridge, setClickedBridge] = useState({});

  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setViewport({
      latitude: clickedBridge.latitude,
      longitude: clickedBridge.longitude,
      width: '100%',
      height: '100%',
      zoom: 10,
      transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
      transitionDuration: 'auto',
    });
    setVisible(false);
  };

  //handles the click feature of the info
  const clickMarker = bridge => {
    setInfoDisplay({
      site_name: bridge.site_name,
      proj_stage: bridge.proj_stage,
      latitude: bridge.latitude,
      longitude: bridge.longitude,
    });
    setClickedBridge(bridge);
    setVisible(!visible);
  };

  return (
    <div>
      <InfoDrawer
        clickedBridge={clickedBridge}
        visible={visible}
        onClose={onClose}
      ></InfoDrawer>
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
              <MapSearchBar mapData={mapData} />
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
        <Mapbox
          clickMarker={clickMarker}
          setViewport={setViewport}
          viewport={viewport}
          mapData={mapData}
        />
      </Layout>
    </div>
  );
}

export default MapMenu;
