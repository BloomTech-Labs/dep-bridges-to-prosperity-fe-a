import React from 'react';
import filterIcon from './assets/filter-icon.svg';
import MapSearchBar from './MapSearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { BridgeList } from './BridgeList';
import { getAllBridges } from '../../../state/actions';
import { FlyToInterpolator } from 'react-map-gl';
import { useOktaAuth } from '@okta/okta-react';

const issuer = 'https://auth.lambdalabs.dev/oauth2/default';
const redirectUri = `${window.location.origin}/`;

function MapMenu({ bridgesToggle, toggleBridges, originalView, setViewport }) {
  const dispatch = useDispatch();
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);
  // const { Sider } = Layout;

  // const onClose = () => {
  //   setVisible(false);
  // };

  function onClear() {
    dispatch(getAllBridges());
    setViewport({
      ...originalView,
      transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
      transitionDuration: 'auto',
    });
    toggleBridges();
  }

  const { authState, authService } = useOktaAuth();

  const logout = async () => {
    // Reads the idToken before local session is cleared
    const idToken = authState.idToken;
    await authService.logout('/');

    // Clears the remote session
    window.location.href = `${issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`;
  };

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
          {authState.idToken ? (
            <a onClick={logout}>sign out</a>
          ) : (
            <a href="/login">sign in</a>
          )}
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
        {!bridgesToggle ? (
          <div className="card">
            <strong>Welcome to the Bridge Explorer!</strong>Here you can can
            learn more about the 1.5k existing and prospective bridges.
          </div>
        ) : (
          <>
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
        {/* <button onClick={toggleBridges} className="view-bridges-btn"> */}
        {!bridgesToggle ? (
          <button onClick={toggleBridges} className="view-bridges-btn">
            View All Bridges
          </button>
        ) : (
          <button onClick={onClear} className="view-bridges-btn">
            Clear
          </button>
        )}
        {authState.idToken ? (
          <a href="/bridge-form">
            <button className="view-bridges-btn">Add New Bridge</button>
          </a>
        ) : null}
        {/* </button> */}
      </section>
    </div>
  );
}

export default MapMenu;
