import React from 'react';
import './styles.less';
import { ShowExplorerContext } from '../../../state/context/showExplorer';
import { useSelector } from 'react-redux';
import CountryCompoment from './CountryComponent';

// Here is an example of using our reusable List component to display some list data to the UI.
const LandingPage = () => {
  const [contextState] = React.useContext(ShowExplorerContext);
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);
  const dataMap = {};
  bridgeData.map((bridge, index) => {
    console.log(`Bridge ${index}: ${bridge}`); //TODO Delete
    if (!(bridge.country in dataMap)) {
      dataMap[bridge.country] = [];
    }
    dataMap[bridge.country].push(bridge);
  });
  console.log('Datamap line 18', dataMap); //TODO Delete
  console.log('Bridge Data line 10', bridgeData); //TODO Delete
  let visibility = contextState.show;

  return (
    <div className={`landing-page-wrapper ${visibility}`}>
      <div className="landing-page-wrapper-top">
        <div className="linear-overlay">
          <br />
          <div className="central-search-content">
            <img
              src={require('./assets/callToActionBlack.png')}
              alt="Search Bridges"
            />
            <img src={require('./assets/3.png')} alt="Search Bridges" />
          </div>
        </div>
      </div>
      <div className="landing-page-wrapper-bottom">
        {/* TODO Access the state and map through it */}
        {Object.keys(dataMap).map((country, index) => {
          return (
            <>
              <CountryCompoment
                dataMap={dataMap}
                country={country}
                index={index}
              />
              <div className="footer">
                <img src={require('./assets/copyright.png')} alt="" />
                <div>About</div>
              </div>
            </>
          );
        })}
      </div>
      {/* <div className="footer"> */}
      {/* WHy does this not show??? */}
      {/* <hr /> */}
      {/* <h1>This will be the footer</h1> */}

      {/* <div>This will be the footer</div> */}
      {/* </div> */}
    </div>
  );
};

export default LandingPage;

// Todo Toggle a class based on javascript buttons
// render CSS based on that toggle

// Import pictures, icons and structure site
//
