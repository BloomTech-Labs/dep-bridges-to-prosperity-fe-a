import React from 'react';
import './styles.less';
import logo from './logo.png';
import { ShowExplorerContext } from '../../../state/context/showExplorer';

export default function Layout({ children, onClear, toggleBridges }) {
  const [contextState, setContextState] = React.useContext(ShowExplorerContext);

  // const toggle = e => {   // SUPERCEDED BY SEPARATE BUTTONS
  //   if (state.show === 'landing-page-wrapper-visible') {
  //     setState(state => ({
  //       ...state,
  //       show: 'landing-page-wrapper-hidden',
  //       buttonName: 'Bridge Explorer',
  //     }));
  //   } else if (state.show === 'landing-page-wrapper-hidden') {
  //     setState(state => ({
  //       ...state,
  //       show: 'landing-page-wrapper-visible',
  //       buttonName: 'Show Map',
  //     }));
  //   }
  // };

  const showBE = e => {
    if (contextState.show === 'landing-page-wrapper-hidden') {
      setContextState(contextState => ({
        ...contextState,
        show: 'landing-page-wrapper-visible',
      }));
      onClear();
      // console.log('Calling onClear', onClear);
      toggleBridges();
      // console.log('Calling toggle bridges', toggleBridges);
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
        {/* <button onClick={() => setLandingFalse()}>Bridge Explorer</button>
        <button onClick={() => setLandingTrue()}>Map</button> */}
        <div className="right-nav">
          <button className="nav-buttons" onClick={showBE}>
            Bridge Explorer
          </button>
          <button className="nav-buttons b-e" onClick={showMap}>
            {/* {state.buttonName} */}
            Map
          </button>
          <button
            className="about nav-buttons"
            onClick={() =>
              // TODO Need to refactor this to do what is wanted per UX
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
