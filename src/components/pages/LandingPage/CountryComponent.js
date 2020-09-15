import React from 'react';
import { ShowExplorerContext } from '../../../state/context/showExplorer';

export default function CountryComponent(props) {
  const provinces = {};
  props.dataMap[props.country].map((item, index) => {
    if (!(item.province in provinces)) {
      provinces[item.province] = [];
    }
    provinces[item.province].push(item);
  });
  return (
    <>
      <div key={props.index}>
        <h1>Our {props.country} Bridges</h1>
        <br />
        {Object.keys(provinces).map((province, index) => {
          return (
            <div className="region-wrapper" key={index}>
              <div className="region-header">
                <h3>{province}</h3>
                <hr />
              </div>
              <RegionComponent
                index={index}
                provinces={provinces}
                province={province}
                ZoomIn={props.ZoomIn}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export function RegionComponent(props) {
  const [len, setLen] = React.useState(11);

  const showMore = () => {
    setLen(props.provinces[props.province].length);
  };
  return (
    <div className="region-content-wrapper">
      {props.provinces[props.province].slice(0, len).map((village, index) => {
        return (
          <BridgeUnitComponent
            key={index}
            village={village}
            ZoomIn={props.ZoomIn}
          ></BridgeUnitComponent>
        );
      })}
      <div className="pointer" onClick={showMore}>
        + {props.provinces[props.province].length - len} more
      </div>
      <div />
    </div>
  );
}

export function BridgeUnitComponent(props) {
  const [contextState, setContextState] = React.useContext(ShowExplorerContext);
  function handleClick(bridgeInfo) {
    setContextState(contextState => ({
      ...contextState,
      show: 'landing-page-wrapper-hidden',
    }));
    window.scrollTo(0, 0);
    props.ZoomIn(bridgeInfo);
  }
  return (
    <div className="bridge-unit">
      <div
        className="bridge-name pointer"
        onClick={() => {
          handleClick(props.village);
        }}
      >
        {props.village.name}
      </div>
      <div
        className="bridge-info pointer"
        onClick={() => {
          handleClick(props.village);
        }}
      >
        {props.village.sector}, {props.village.district}
      </div>
      <br />
      <br />
    </div>
  );
}
