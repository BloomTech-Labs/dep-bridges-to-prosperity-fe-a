import React, { useState } from 'react';
import filterIcon from './assets/filter-icon.svg';
import MapSearchBar from './MapSearchBar';
import { useSelector } from 'react-redux';
import { BridgeList } from './BridgeList';
import WelcomeComponent from './WelcomeComponent';
import { useOktaAuth } from '@okta/okta-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Tooltip, Modal } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Checkboxes from './Checkboxes';
import Themes from './Themes';
// import { paginateBridges } from '../../../state/actions';
import Pagination from './Pagination';

const issuer = 'https://auth.lambdalabs.dev/oauth2/default';
const redirectUri = `${window.location.origin}/`;

function MapMenu({
  setBridgesToggle,
  bridgesToggle,
  toggleBridges,
  toggleBridgesFalse,
  setViewport,
  ZoomIn,
  changeTheme,
  changeShow,
  changeIsEditing,
  onClear,
  page,
  setPage,
  limit,
  giveLimit,
  prevPage,
  nextPage,
  setLimit,
  loading,
  dataDisplayed,
}) {
  // Pulling in bridge data from reducer
  const { bridgeData, paginatedData, singleBridgeData } = useSelector(
    state => state.bridgeSitesReducer
  );

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

  // TOGGLING THEMES
  const [toggleThemes, setToggleThemes] = useState(false);

  const themeClick = () => {
    setToggleThemes(!toggleThemes);
  };

  // TO SHOW OR HIDE MODAL
  const [show, setShow] = useState(false);
  const changeShowFilter = () => {
    setShow(!show);
    toggleBridgesFalse();
  };

  const cancelModal = () => {
    setShow(false);
  };

  return (
    <div className="menu-wrapper">
      <section className="search-menu">
        <div className="theme-search-icons">
          {!toggleThemes ? (
            <Tooltip title="Change theme">
              <FontAwesomeIcon
                icon={faPalette}
                onClick={() => {
                  themeClick();
                }}
              />
            </Tooltip>
          ) : (
            <Tooltip title="Search Location">
              <FontAwesomeIcon
                icon={faSearch}
                onClick={() => {
                  themeClick(false);
                }}
              />
            </Tooltip>
          )}
        </div>
        <h3 className="menu-title">
          Search through over 250 footbridges serving over 1 million community
          members.
        </h3>
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
        <div className="search-bar">
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
        </div>

        <button className="filter-btn-2" onClick={changeShowFilter}>
          All Filters <img src={filterIcon} alt="filter icon" />
        </button>
        <Modal visible={show} onCancel={cancelModal} footer={null}>
          <Checkboxes cancelModal={cancelModal} toggleBridges={toggleBridges} />
        </Modal>

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
          <WelcomeComponent />
        ) : (
          <>
            {!loading ? (
              <>
                <Pagination
                  page={page}
                  setPage={setPage}
                  limit={limit}
                  giveLimit={giveLimit}
                  prevPage={prevPage}
                  nextPage={nextPage}
                  setLimit={setLimit}
                  loading={loading}
                />
                {dataDisplayed ? (
                  <div className="bridges-wrapper">
                    {paginatedData.map(bridge => (
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
                  <div className="bridges-wrapper">
                    {!dataDisplayed ? (
                      <BridgeList
                        ZoomIn={ZoomIn}
                        bridge={singleBridgeData} // return singleBridge state from reducer
                        loggedIn={authState.idToken}
                        changeShow={changeShow}
                        changeIsEditing={changeIsEditing}
                        onClear={onClear}
                      />
                    ) : (
                      <div>
                        <h3>No bridge to display</h3>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              <LoadingOutlined style={{ fontSize: '85px' }} />
            )}
          </>
        )}
      </section>

      <div className="vb-btn-cont">
        {!bridgesToggle ? (
          <button
            onClick={toggleBridges}
            className={
              !authState.idToken
                ? 'view-bridges-btn'
                : 'view-bridges-btn two-view-bridges-btn'
            }
          >
            View All Bridges
          </button>
        ) : (
          <button
            onClick={onClear}
            className={
              !authState.idToken
                ? 'view-bridges-btn'
                : 'view-bridges-btn two-view-bridges-btn'
            }
          >
            {/* Special clear command onClick here */}
            Clear
          </button>
        )}
        {authState.idToken ? (
          <button
            className="view-bridges-btn two-view-bridges-btn"
            onClick={changeShow}
          >
            Add New Bridge
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default MapMenu;
