import React from 'react';
import './styles.less';
import { ShowExplorerContext } from '../../../state/context/showExplorer';

// Here is an example of using our reusable List component to display some list data to the UI.
const LandingPage = () => {
  const [state] = React.useContext(ShowExplorerContext);

  let visibility = state.show;

  return (
    <div className={`landing-page-wrapper ${visibility}`}>
      <div className="landing-page-wrapper-top">
        <div className="linear-overlay">
          <br />
          <div className="central-search-content">
            <img
              src={require('./assets/callToAction.png')}
              alt="Search Bridges"
            />
          </div>
          <div></div>
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
