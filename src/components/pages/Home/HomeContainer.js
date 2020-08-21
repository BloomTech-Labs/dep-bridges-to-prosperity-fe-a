import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBridges, getSingleBridge } from '../../../state/actions';
import MapMenu from './MapMenu';
import Mapbox from './Mapbox';

function HomeContainer() {
  // const [clickedBridge, setClickedBridge] = useState(null);
  const [visible, setVisible] = useState(false);
  const [bridgesToggle, setBridgesToggle] = useState(false);

  const originalView = {
    //this is bridge site 1 coordinates
    latitude: -2.42056,
    longitude: 28.9662,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  };

  const [viewport, setViewport] = useState(originalView);

  const dispatch = useDispatch();
  const { bridgeData, loading, error } = useSelector(
    state => state.bridgeSitesReducer
  );
  //handles the click feature of the info
  const clickMarker = bridge => {
    // setVisible(!visible);
    setBridgesToggle(true);
    dispatch(getSingleBridge(bridge));
  };

  const toggleBridges = () => {
    setBridgesToggle(!bridgesToggle);
  };

  useEffect(() => {
    dispatch(getAllBridges());
  }, [dispatch]);

  return (
    <div className="home-wrapper">
      <MapMenu
        toggleBridges={toggleBridges}
        bridgeData={bridgeData}
        bridgesToggle={bridgesToggle}
        visible={visible}
        setViewport={setViewport}
        originalView={originalView}
        setBridgesToggle={setBridgesToggle}
      />
      <Mapbox
        clickMarker={clickMarker}
        visible={visible}
        setVisible={setVisible}
        viewport={viewport}
        setViewport={setViewport}
      />
    </div>
  );
}

export default HomeContainer;
