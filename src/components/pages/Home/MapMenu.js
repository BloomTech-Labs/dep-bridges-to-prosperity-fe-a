import React from 'react';
import filterIcon from './assets/filter-icon.svg';
import MapSearchBar from './MapSearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { BridgeList } from './BridgeList';
import { getAllBridges } from '../../../state/actions';
import { FlyToInterpolator } from 'react-map-gl';

function MapMenu({ bridgesToggle, toggleBridges, originalView, setViewport }) {
  const dispatch = useDispatch();
  // Pulling in bridge data from reducer
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);

  /* Refetches bridge data, toggles all bridges
  view and  */
  function onClear() {
    dispatch(getAllBridges());
    setViewport({
      ...originalView,
      transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
      transitionDuration: 'auto',
    });
    toggleBridges();
  }

  return (
    <div className="menu-wrapper">
      <section className="search-menu">
        <div className="menu-header">
          {/* DIY Hamburger Icon */}
          <div className="hamburger-wrapper">
            <div className="hamburger-layer" />
            <div className="hamburger-layer" />
            <div className="hamburger-layer" />
          </div>
          <h2>Bridge Explorer</h2>
        </div>
        <div className="sign-in">
          <a href="/login">sign in</a>
        </div>
        <MapSearchBar />
        <div className="filters">
          <button className="filter-btn">Province</button>
          <button className="filter-btn">District</button>
          <button className="filter-btn">Cell</button>
          <button className="filter-btn">
            All Filters <img src={filterIcon} alt="filter icon" />
          </button>
        </div>
      </section>

      <section className="bridge-info">
        {/* toggles bridges view on and off */}
        {!bridgesToggle ? (
          <div className="card">
            <strong>Welcome to the Bridge Explorer!</strong>Here you can can
            learn more about the 1.5k existing and prospective bridges.
          </div>
        ) : (
          <>
            {/* Maps through all bridges in redux store */}
            {bridgeData.length >= 1 ? (
              <div className="bridges-wrapper">
                {bridgeData.map(bridge => (
                  <div key={bridge.id}>
                    <BridgeList bridge={bridge} />
                  </div>
                ))}
              </div>
            ) : (
              //the clickedBridge
              <div className="bridges-wrapper">
                <BridgeList bridge={bridgeData[0]} />
              </div>
            )}
          </>
        )}
        {!bridgesToggle ? (
          <button onClick={toggleBridges} className="view-bridges-btn">
            View All Bridges
          </button>
        ) : (
          <button onClick={onClear} className="view-bridges-btn">
            {/* Special clear command onClick here */}
            Clear
          </button>
        )}
      </section>
    </div>
  );
}

export default MapMenu;
