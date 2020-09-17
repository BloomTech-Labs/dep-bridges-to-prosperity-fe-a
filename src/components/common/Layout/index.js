import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import './styles.less';
import logo from './logo.png';
import { ShowExplorerContext } from '../../../state/context/showExplorer';

export default function Layout({ children, onClear, toggleBridges }) {
  const [contextState, setContextState] = React.useContext(ShowExplorerContext);

  const showBE = e => {
    if (contextState.show === 'landing-page-wrapper-hidden') {
      setContextState(contextState => ({
        ...contextState,
        show: 'landing-page-wrapper-visible',
      }));
      onClear();
      toggleBridges();
    }
  };

  const showMap = e => {
    if (contextState.show === 'landing-page-wrapper-visible') {
      setContextState(contextState => ({
        ...contextState,
        show: 'landing-page-wrapper-hidden',
      }));
    }
  };

  /******* TO SIGN OUT *******/
  const { authState, authService } = useOktaAuth();

  const issuer = 'https://auth.lambdalabs.dev/oauth2/default';
  const redirectUri = `${window.location.origin}/`;

  const logout = async () => {
    // Reads the idToken before local session is cleared
    window.localStorage.removeItem('bridge');
    const idToken = authState.idToken;
    await authService.logout('/');

    // Clears the remote session
    window.location.href = `${issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`;
  };

  return (
    <div className="layout-wrapper">
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <div className="right-nav">
          <button className="nav-buttons" onClick={showBE}>
            Bridge Explorer
          </button>
          <button className="nav-buttons b-e" onClick={showMap}>
            Map
          </button>
          {authState.idToken ? (
            <button className="about nav-buttons" onClick={logout}>
              Sign Out
            </button>
          ) : (
            <button className="about nav-buttons">
              <a href="/login" style={{ color: 'black' }}>
                Sign In
              </a>
            </button>
          )}
        </div>
      </nav>
      <div className="spacer" />
      {children}
    </div>
  );
}
