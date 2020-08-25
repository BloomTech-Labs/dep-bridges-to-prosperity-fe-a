import React from 'react';
import filterIcon from './assets/filter-icon.svg';
import MapSearchBar from './MapSearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { BridgeList } from './BridgeList';
import { getAllBridges } from '../../../state/actions';
import { FlyToInterpolator } from 'react-map-gl';
import { useOktaAuth } from '@okta/okta-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const issuer = 'https://auth.lambdalabs.dev/oauth2/default';
const redirectUri = `${window.location.origin}/`;

function MapMenu({
  setBridgesToggle,
  bridgesToggle,
  toggleBridges,
  originalView,
  setViewport,
  setTheme,
  ZoomIn,
  changeTheme,
}) {
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
          {/* DIY Hamburger Icon */}
          {/* <div className="hamburger-wrapper">
            <div className="hamburger-layer" />
            <div className="hamburger-layer" />
            <div className="hamburger-layer" /> */}
          <FontAwesomeIcon alt="Change Theme" icon={faPalette} />
          {/* </div> */}
          <h2>Bridge Explorer</h2>
        </div>
        <div className="sign-in">
          {authState.idToken ? (
            <button className="signin-button" onClick={logout}>
              sign out
            </button>
          ) : (
            <a href="/login">sign in</a>
          )}
        </div>
        <MapSearchBar
          bridgeData={bridgeData}
          setBridgesToggle={setBridgesToggle}
          onClear={onClear}
          setViewport={setViewport}
        />

        <div className="filters">
          <button className="filter-btn">Province</button>
          <button className="filter-btn">District</button>
          <button className="filter-btn">Cell</button>
          <button className="filter-btn">
            All Filters <img src={filterIcon} alt="filter icon" />
          </button>
          <button
            id="ckdp065po06j11ip6ga2xsphr"
            className="filter-btn"
            onClick={changeTheme}
          >
            Minimo Map
          </button>
          <button
            id="ckeaavyf603w319p8sqrfxm7n"
            className="filter-btn"
            onClick={changeTheme}
          >
            Terrain Map
          </button>
          <button id="cke9et76u0o361aqngn9owqnu" onClick={changeTheme}>
            Elevation Map
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
                    <BridgeList
                      bridge={bridge}
                      loggedIn={authState.idToken}
                      ZoomIn={ZoomIn}
                    />
                  </div>
                ))}
              </div>
            ) : (
              //the clickedBridge
              <div className="bridges-wrapper">
                <BridgeList
                  bridge={bridgeData[0]}
                  loggedIn={authState.idToken}
                />
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
