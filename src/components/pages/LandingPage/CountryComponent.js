import React from 'react';

export default function CountryComponent(props) {
  const provinces = {};
  props.dataMap[props.country].map((item, index) => {
    if (!(item.province in provinces)) {
      provinces[item.province] = [];
    }
    provinces[item.province].push(item);
  });
  console.log('provinces', provinces);
  return (
    <>
      <div key={props.index}>
        <h1>Our {props.country} Bridges</h1>
        <br />
        {Object.keys(provinces).map((province, index) => {
          return (
            <div className="region-wrapper">
              <div className="region-header">
                <h3>{province}</h3>
                <hr />
              </div>
              <RegionComponent
                index={index}
                provinces={provinces}
                province={province}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export function RegionComponent(props) {
  console.log('province, 32', props.provinces[props.province]);
  const [len, setLen] = React.useState(11);

  const showMore = () => {
    console.log('len', len);
    setLen(props.provinces[props.province].length);
    console.log('len', len);
  };
  return (
    <div className="region-content-wrapper">
      {props.provinces[props.province].slice(0, len).map((village, index) => {
        return <BridgeUnitComponent village={village}></BridgeUnitComponent>;
      })}
      <div className="pointer" onClick={showMore}>
        + {props.provinces[props.province].length - len} more
      </div>
      <div />
    </div>
  );
}

export function BridgeUnitComponent(props) {
  return (
    <div className="bridge-unit">
      <div className="bridge-name" style={{ fontWeight: 'bold' }}>
        {props.village.name}
      </div>
      <div className="bridge-info">
        {props.village.sector}, {props.village.district}
      </div>
      <br />
      <br />
    </div>
  );
}
