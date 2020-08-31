import React from 'react';
import './styles.less';
import { useLanding } from '../../hooks';
import { ShowExplorerContext } from '../../../state/context/showExplorer';

// Here is an example of using our reusable List component to display some list data to the UI.
const LandingPage = () => {
  const [state, setState] = React.useContext(ShowExplorerContext);

  const { hideLanding } = useLanding();
  const handleClick = e => {
    // TO BE DELETED SOON
    console.log(e);

    if (document.querySelector('.landing-page-wrapper')) {
      document
        .querySelector('.landing-page-wrapper')
        .classList.remove('landing-page-wrapper-visible');
      document
        .querySelector('.landing-page-wrapper')
        .classList.add('landing-page-wrapper-hidden');
    } else {
      document
        .querySelector('.landing-page-wrapper')
        .classList.add('landing-page-wrapper-visible');
      document
        .querySelector('.landing-page-wrapper')
        .classList.remove('landing-page-wrapper-hidden');
    }
    console.log('button clicked');
  };
  let visibility = state.show;

  return (
    <div className={`landing-page-wrapper ${visibility}`}>
      <div className="landing-page-wrapper-top">
        <div className="linear-overlay">
          <br />
          {/* <div className="central-search-content">
          <h2>
            Search through over 250 footbridges serving over 1 million community
            members
          </h2>
          <input type="search" placeholder="What bridge are you looking for?" results="0" size="50" />
          <h4>view map</h4>
        </div> */}
          <div className="central-search-content">
            <img
              src={require('./assets/callToAction.png')}
              alt="Search Bridges"
            />
          </div>
          <div>
            {/* <img src={require(".\\assets\\Rwanda_Suspended_Children Crossing.png")} alt="Children Crossing Bridge"/>
        <img src={require(".\\assets\\Rectangle.png")} alt="Children Crossing Bridge"/> */}
          </div>
          {/* <button onClick={handleClick}>Search</button> TO BE DELETED SHORTLY */}
        </div>
      </div>
      <div className="landing-page-wrapper-bottom">
        <h1>Text</h1>
      </div>
    </div>
  );
};

export default LandingPage;

// Todo Toggle a class based on javascript buttons
// render CSS based on that toggle

// Import pictures, icons and structure site
//
