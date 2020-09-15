import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlyToInterpolator } from 'react-map-gl';
import {
  getAllBridges,
  getSingleBridge,
  paginateBridges,
} from '../../../state/actions';
import { Modal } from 'antd';
import MapMenu from './MapMenu';
import Mapbox from './Mapbox';
import BridgeForms from '../BridgeForms.js';
import { LeftSquareTwoTone } from '@ant-design/icons';

function HomeContainer() {
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

  //starting theme of minimo
  //theme to be set with an onclick
  const [theme, setTheme] = useState(
    localStorage.getItem('mapStyle')
      ? localStorage.getItem('mapStyle')
      : 'mapbox://styles/jameslcarpino/ckej1e5b546o019mmuazc08ko'
  );
  const [toggleMarkerColor, setToggleMarkerColor] = useState(false);

  //function for setting theme of the map
  const changeTheme = style => {
    //grabs the id target
    const changeStyle = style.target.id;
    //sets the theme
    localStorage.setItem(
      'mapStyle',
      `mapbox://styles/jameslcarpino/${changeStyle}`
    );
    setTheme(`mapbox://styles/jameslcarpino/${changeStyle}`);
    setToggleMarkerColor(!toggleMarkerColor);
  };

  const dispatch = useDispatch();

  // Components should be set up to handle errors and loadings status
  // eslint-disable-next-line
  const { bridgeData, loading, error } = useSelector(
    state => state.bridgeSitesReducer
  );
  //handles the click feature of the info
  const clickMarker = bridge => {
    setBridgesToggle(true);
    dispatch(getSingleBridge(bridge));
  };

  /* Refetches bridge data, toggles all bridges
  view and  */
  function onClear() {
    dispatch(getAllBridges());
    setViewport({
      ...originalView,
      transitionInterpolator: new FlyToInterpolator({
        speed: 3,
      }),
      transitionDuration: 'auto',
    });
    toggleBridges();
  }

  const [markerClicked, setMarkerClicked] = useState(false);

  const changeMarkerClicked = () => {
    setMarkerClicked(!markerClicked);
  };

  //bridge zoom in function
  const ZoomIn = bridge => {
    setMarkerClicked(!markerClicked);
    if (markerClicked === true) {
      onClear();
    } else {
      clickMarker(bridge);
      setViewport({
        latitude: bridge.latitude,
        longitude: bridge.longitude,
        width: '100%',
        height: '100%',
        zoom: 15,
        transitionInterpolator: new FlyToInterpolator({
          speed: 3,
        }),
        transitionDuration: 'auto',
      });
    }
  };

  //Pagination commands to be passed down to pagination page
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const nextPage = e => {
    // e.preventDefault();
    // setPage(page + 1);
    let next = page + 1;
    dispatch(paginateBridges(next, limit));
    console.log('page:', next);
    setPage(next);
  };

  const prevPage = e => {
    // setPage(page - 1);
    if (page > 1) {
      let prev = page - 1;
      dispatch(paginateBridges(prev, limit));
      setDisabled(disabled);
      setPage(prev);
      console.log('page:', prev);
    } else {
      setDisabled(true);
    }
  };

  //work in progress should handle a new limit at the target values
  //passes down to the pagination page for an input
  //it dispatches but doesn't accept the page or new limit.
  const giveLimit = e => {
    //seems like state isn't updating
    //thought this new variable would work similar to the prev/next - it...does not
    // let newLimit =
    setLimit({
      limit: e.target.value,
    });
    setPage(page);
    //if I set the limit (not newLimit) to anything the limit returns 20 on first
    dispatch(paginateBridges(page, limit));
    //blarhg
    console.log('new limit:', page, limit);
  };

  const toggleBridges = () => {
    dispatch(paginateBridges(page, limit));
    //keeping for now V
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

  // Passing down to MapBox, when Marker is pressed menu toggle will be set to checked
  const [checked, setChecked] = useState(false);

  const changeChecked = () => {
    setChecked(true);
  };

  return (
    <div className="home-wrapper">
      {/* HAMBURGER MENU START */}
      <div className="menu-cont">
        <input
          type="checkbox"
          className="toggle"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          {/* Passing down functions and bridge data to 
      assist sorting through the bridge data */}
          <MapMenu
            toggleBridges={toggleBridges}
            bridgeData={bridgeData}
            bridgesToggle={bridgesToggle}
            visible={visible}
            setViewport={setViewport}
            originalView={originalView}
            setBridgesToggle={setBridgesToggle}
            setTheme={setTheme}
            ZoomIn={ZoomIn}
            changeTheme={changeTheme}
            changeShow={changeShow}
            changeIsEditing={changeIsEditing}
            onClear={onClear}
            page={page}
            setPage={setPage}
            limit={limit}
            giveLimit={giveLimit}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </div>
      <Mapbox
        clickMarker={clickMarker}
        visible={visible}
        setVisible={setVisible}
        viewport={viewport}
        setViewport={setViewport}
        theme={theme}
        setTheme={setTheme}
        ZoomIn={ZoomIn}
        toggleMarkerColor={toggleMarkerColor}
        changeChecked={changeChecked}
        changeMarkerClicked={changeMarkerClicked}
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
