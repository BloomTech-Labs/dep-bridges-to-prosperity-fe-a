import React from 'react';
import filterIcon from './assets/filter-icon.svg';
import MapSearchBar from './MapSearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { BridgeList } from './BridgeList';
import { getAllBridges } from '../../../state/actions';
import { FlyToInterpolator } from 'react-map-gl';

function MapMenu({
  setBridgesToggle,
  bridgesToggle,
  toggleBridges,
  originalView,
  setViewport,
}) {
  const dispatch = useDispatch();
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);

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
        <MapSearchBar
          bridgeData={bridgeData}
          setBridgesToggle={setBridgesToggle}
          onClear={onClear}
        />
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
        {/* Begin toggle for information */}
        {/* first if : when bridges toggle is set off it displays the welcome */}
        {!bridgesToggle ? (
          <div className="card">
            <strong>Welcome to the Bridge Explorer!</strong>Here you can can
            learn more about the 1.5k existing and prospective bridges.
          </div>
        ) : (
          // begin the ternary statement of if bridgesToggle true check searching. If searching display search results, if not searching display brdige
          <>
            {bridgeData.length >= 0 ? (
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
            Clear
          </button>
        )}
        {/* </button> */}
      </section>
    </div>
  );
}

export default MapMenu;
