import React from 'react';
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
          <button
            className="about nav-buttons"
            onClick={() =>
              setContextState(contextState => ({
                ...contextState,
                show: 'landing-page-wrapper-hidden',
              }))
            }
          >
            Sign In
          </button>
        </div>
      </nav>
      <div className="spacer" />
      {children}
    </div>
  );
}
