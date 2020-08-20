import React from 'react';
import filterIcon from './assets/filter-icon.svg';
import MapSearchBar from './MapSearchBar';
import { useSelector } from 'react-redux';

function MapMenu({ bridgesToggle, list, toggleBridges }) {
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);
  // const { Sider } = Layout;

  // const onClose = () => {
  //   setVisible(false);
  // };

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
        {list.length === 0 ? (
          <div className="card">
            <strong>Welcome to the Bridge Explorer!</strong>Here you can can
            learn more about the 1.5k existing and prospective bridges.
          </div>
        ) : (
          <div>
            {bridgeData.map(bridges => {
              return (
                <div className="card">
                  <ul>
                    <li>{bridges.name}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
        <button onClick={toggleBridges} className="view-bridges-btn">
          {!bridgesToggle ? 'View All Bridges' : 'Clear'}
        </button>
      </section>
    </div>
  );
}

export default MapMenu;
