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
            <>
              <h3>{province}</h3>
              <hr />
              <RegionComponent
                index={index}
                provinces={provinces}
                province={province}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export function RegionComponent(props) {
  console.log('province, 32', props.provinces[props.province]);
  return (
    <div className="region-wrapper">
      {props.provinces[props.province].map((village, index) => {
        return (
          <div className="region-class">
            <div className="bridge-unit">
              <div>{village.name}</div>
              <div>{village.sector}</div>
            </div>
            <br />
            <br />
            <br />
          </div>
        );
      })}
      <div />
    </div>
  );
}
{
  /* 
export function BridgeUnitComponent(props){

}
// array.slice(0,15(Variable)) */
}
