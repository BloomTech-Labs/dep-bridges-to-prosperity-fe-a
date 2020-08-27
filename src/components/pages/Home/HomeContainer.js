import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBridges, getSingleBridge } from '../../../state/actions';
import { Modal } from 'antd';
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
    // setVisible(!visible);
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

  /******* FOR ADDING/EDITING FORM *******/
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // TO SHOW OR HIDE MODAL
  const changeShow = () => {
    setShow(!show);
  };

  const cancelModal = () => {
    setShow(!show);
    setIsEditing(false);
  };

  // CHANGE EDITING STATE
  const changeIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const [checked, setChecked] = useState(false);

  const changeChecked = () => {
    setTimeout(() => {
      setChecked(true);
    }, 1200);
  };

  return (
    <div className="home-wrapper">
      {/* HAMBURGER MENU START */}
      <div className="menu-cont">
        <input
          type="checkbox"
          className="toggle"
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          {/* Passing down functions and bridge data to 
      assist sorting through the bridge data */}
          <MapMenu
            className="map-men"
            toggleBridges={toggleBridges}
            bridgeData={bridgeData}
            bridgesToggle={bridgesToggle}
            visible={visible}
            setViewport={setViewport}
            originalView={originalView}
            setBridgesToggle={setBridgesToggle}
            changeShow={changeShow}
            changeIsEditing={changeIsEditing}
          />
        </div>
      </div>
      {/* HAMBURGER MENU END */}
      <Mapbox
        clickMarker={clickMarker}
        visible={visible}
        setVisible={setVisible}
        viewport={viewport}
        setViewport={setViewport}
        changeChecked={changeChecked}
      />
      <Modal visible={show} footer={null} onCancel={cancelModal}>
        <BridgeForms
          changeShow={changeShow}
          changeIsEditing={changeIsEditing}
          isEditing={isEditing}
        />
      </Modal>
    </div>
  );
}

export default HomeContainer;
