import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBridges, getSingleBridge } from '../../../state/actions';
import MapMenu from './MapMenu';
import Mapbox from './Mapbox';
import BridgeForms from '../BridgeForms.js';

function HomeContainer() {
  // const [clickedBridge, setClickedBridge] = useState(null);
  const [visible, setVisible] = useState(false);
  const [bridgesToggle, setBridgesToggle] = useState(false);

  // One spot for default view values, so this object can be shared across components
  const originalView = {
    //this is bridge site 1 coordinates
    latitude: -1.94995,
    longitude: 29.9,
    width: '100vw',
    height: '100vh',
    zoom: 8.4,
  };

  const [viewport, setViewport] = useState(originalView);

  const dispatch = useDispatch();
  // Components should be set up to handle errors and loadings status
  // eslint-disable-next-line
  const { bridgeData, loading, error } = useSelector(
    state => state.bridgeSitesReducer
  );
  //handles the click feature of the info
  const clickMarker = bridge => {
    setVisible(!visible);
    setBridgesToggle(true);
    dispatch(getSingleBridge(bridge));
  };

  const toggleBridges = () => {
    setBridgesToggle(!bridgesToggle);
  };

  useEffect(() => {
    // When home page is refreshed all bridges
    // are retrieved
    dispatch(getAllBridges());
  }, [dispatch]);

  // FOR ADDING/EDITING FORM
  const [showForm, setShowForm] = useState(false);

  const changeShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="home-wrapper">
      {/* Passing down functions and bridge data to 
      assist sorting through the bridge data */}
      <MapMenu
        toggleBridges={toggleBridges}
        bridgeData={bridgeData}
        bridgesToggle={bridgesToggle}
        visible={visible}
        setViewport={setViewport}
        originalView={originalView}
      />
      <Mapbox
        clickMarker={clickMarker}
        visible={visible}
        setVisible={setVisible}
        viewport={viewport}
        setViewport={setViewport}
      />
      {showForm === true ? (
        <BridgeForms changeShowForm={changeShowForm} />
      ) : null}
    </div>
  );
}

export default HomeContainer;
