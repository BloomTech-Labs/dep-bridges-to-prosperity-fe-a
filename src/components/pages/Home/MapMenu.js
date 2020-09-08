import React, { useState } from 'react';
import filterIcon from './assets/filter-icon.svg';
import MapSearchBar from './MapSearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { BridgeList } from './BridgeList';
import usePagination from './custom-hooks/usePagination';
import { useOktaAuth } from '@okta/okta-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Tooltip, Pagination } from 'antd';
import Themes from './Themes';
import { paginateBridges } from '../../../state/actions';

const issuer = 'https://auth.lambdalabs.dev/oauth2/default';
const redirectUri = `${window.location.origin}/`;

function MapMenu({
  setBridgesToggle,
  bridgesToggle,
  toggleBridges,
  setViewport,
  ZoomIn,
  changeTheme,
  changeShow,
  changeIsEditing,
  onClear,
}) {
  // Pulling in bridge data from reducer
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);

  //Grabbing functions from paginationHook
  const { next, prev, jump, currentPage, currentData, maxPage } = usePagination(
    useDispatch(paginateBridges())
  );

  const onNext = () => {
    next();
  };
  /******* TO SIGN OUT *******/
  const { authState, authService } = useOktaAuth();

  const logout = async () => {
    // Reads the idToken before local session is cleared
    window.localStorage.removeItem('bridge');
    const idToken = authState.idToken;
    await authService.logout('/');

    // Clears the remote session
    window.location.href = `${issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`;
  };

  const [toggleThemes, setToggleThemes] = useState(false);

  const themeClick = () => {
    setToggleThemes(!toggleThemes);
  };

  return (
    <div className="menu-wrapper">
      <section className="search-menu">
        <div className="menu-header">
          {!toggleThemes ? (
            <Tooltip title="Change theme">
              <FontAwesomeIcon
                className="theme-search-icons"
                icon={faPalette}
                onClick={() => {
                  themeClick();
                }}
              />
            </Tooltip>
          ) : (
            <Tooltip title="Search Location">
              <FontAwesomeIcon
                className="theme-search-icons"
                icon={faSearch}
                onClick={() => {
                  themeClick(false);
                }}
              />
            </Tooltip>
          )}
          <h2>Bridge Explorer</h2>
          <div className="sign-in">
            {authState.idToken ? (
              <button className="sign-in-btn" onClick={logout}>
                sign out
              </button>
            ) : (
              <button className="sign-in-btn">
                <a href="/login">sign in</a>
              </button>
            )}
          </div>
        </div>

        {!toggleThemes ? (
          <MapSearchBar
            bridgeData={bridgeData}
            setBridgesToggle={setBridgesToggle}
            onClear={onClear}
            setViewport={setViewport}
          />
        ) : (
          <Themes changeTheme={changeTheme} />
        )}

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
            {bridgeData.length > 0 ? (
              <div className="bridges-wrapper">
                {bridgeData?.map(bridge => (
                  <div key={bridge.id}>
                    <BridgeList
                      bridge={bridge}
                      loggedIn={authState.idToken}
                      ZoomIn={ZoomIn}
                      changeShow={changeShow}
                      changeIsEditing={changeIsEditing}
                      toggleBridges={toggleBridges}
                      onClear={onClear}
                    />
                  </div>
                ))}
              </div>
            ) : (
              //the clickedBridge
              <div className="bridges-wrapper">
                <BridgeList
                  ZoomIn={ZoomIn}
                  bridge={bridgeData[0]}
                  loggedIn={authState.idToken}
                  changeShow={changeShow}
                  changeIsEditing={changeIsEditing}
                  onClear={onClear}
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
          <>
            <Pagination simple total={5} onChange={onNext} />
            <button onClick={onClear} className="view-bridges-btn">
              {/* Special clear command onClick here */}
              Clear
            </button>
          </>
        )}
        {authState.idToken ? (
          <button className="view-bridges-btn" onClick={changeShow}>
            Add New Bridge
          </button>
        ) : null}
      </section>
    </div>
  );
}

export default MapMenu;
