import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBridges } from '../../../state/actions';
import MapMenu from './MapMenu';
import Mapbox from './Mapbox';

function HomeContainer() {
  const [clickedBridge, setClickedBridge] = useState({});
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState([]);
  const [bridgesToggle, setBridgesToggle] = useState(false);

  const dispatch = useDispatch();
  const { bridgeData, loading, error } = useSelector(
    state => state.bridgeSitesReducer
  );
  //handles the click feature of the info
  const clickMarker = bridge => {
    setClickedBridge(bridge);
    console.log('clickMarker');
    console.log(bridge);
    setVisible(!visible);
  };

  const toggleBridges = () => {
    // setList(bridgeData);
    // console.log('viewAllBridges', bridgeData);
    setBridgesToggle(!bridgesToggle);
  };

  useEffect(() => {
    dispatch(getAllBridges());
  }, [dispatch]);

  return (
    <div className="home-wrapper">
      <MapMenu
        clickedBridge={clickedBridge}
        toggleBridges={toggleBridges}
        list={list}
        bridgeData={bridgeData}
        bridgesToggle={bridgesToggle}
      />
      <Mapbox
        clickMarker={clickMarker}
        visible={visible}
        setVisible={setVisible}
        clickedBridge={clickedBridge}
      />
    </div>
  );
}

export default HomeContainer;
