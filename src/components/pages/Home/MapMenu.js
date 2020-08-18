import React, { useState, useEffect } from 'react';
//antDesign
import { Layout } from 'antd';
import MapSearchBar from './MapSearchBar';
import Mapbox from './Mapbox';

import { useSelector, useDispatch } from 'react-redux';

import { FlyToInterpolator } from 'react-map-gl';
import { getAllMapData } from '../../../state/actions';
function MapMenu(props) {
  const dispatch = useDispatch();
  const { mapData, loading, error } = useSelector(
    state => state.mapDataReducer
  );

  const { Sider } = Layout;

  useEffect(() => {
    dispatch(getAllMapData());
  }, [dispatch]);
  const [viewport, setViewport] = useState({
    //starting viewport: set to show all of rowanda.
    latitude: -2.1729420778611965,
    longitude: 30.40027324303975,
    width: '100vw',
    height: '100vh',
    zoom: 7.261150491603372,
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
    setClickedBridge(bridge);
    setVisible(!visible);
  };

  return (
    <div>
      <Layout
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {}}
        onCollapse={(collapsed, type) => {}}
      >
        <Sider>
          <MapSearchBar
            mapData={mapData}
            clickedBridge={clickedBridge}
            visible={visible}
            onClose={onClose}
          ></MapSearchBar>
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
