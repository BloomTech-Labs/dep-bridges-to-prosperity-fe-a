import React from 'react';
import './styles.less';
import logo from './logo.png';
import { ShowExplorerContext } from '../../../state/context/showExplorer';

export default function Layout({ children }) {
  const [state, setState] = React.useContext(ShowExplorerContext);

  const toggle = e => {
    if (state.show === 'landing-page-wrapper-visible') {
      setState(state => ({
        ...state,
        show: 'landing-page-wrapper-hidden',
        buttonName: 'Bridge Explorer',
      }));
    } else if (state.show === 'landing-page-wrapper-hidden') {
      setState(state => ({
        ...state,
        show: 'landing-page-wrapper-visible',
        buttonName: 'Show Map',
      }));
    }
  };
  return (
    <div className="layout-wrapper">
      <nav className="navbar">
        <img src={logo} alt="logo" />
        {/* <button onClick={() => setLandingFalse()}>Bridge Explorer</button>
        <button onClick={() => setLandingTrue()}>Map</button> */}
        <button className="b-e" onClick={toggle}>
          {state.buttonName}
        </button>
        <button
          className="about"
          onClick={() =>
            // TODO Need to refactor this to do what is wanted per UX
            setState(state => ({
              ...state,
              show: 'landing-page-wrapper-hidden',
            }))
          }
        >
          About
        </button>
      </nav>
      <div className="spacer" />
      {children}
    </div>
  );
}
