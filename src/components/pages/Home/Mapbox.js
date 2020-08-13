import React, { useState } from 'react';
import ReactMapGl, { Marker, FlyToInterpolator } from 'react-map-gl';
import { UpCircleFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';
import InfoDrawer from './InfoDrawer';
import { mapData } from './dummyData';

function Mapbox(props) {
  const { viewport, setViewport } = props;

  const ZoomIn = bridge => {
    setViewport({
      latitude: bridge.latitude,
      longitude: bridge.longitude,
      width: '100%',
      height: '100%',
      zoom: 14.5,
      transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
      transitionDuration: 'auto',
    });
    console.log('line 43 mapbox zoom in');
    props.clickMarker(bridge);
  };

  return (
    <div>
      {/* render map */}
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          //allows map to be dynamic and move through useState -> make this work through redux
          //want to make it so you can set the viewport with buttons/dropdown based on searched villages
          setViewport(viewport);
        }}
        //using minimo right now, should be good to swap out if we want another
        mapStyle="mapbox://styles/jameslcarpino/ckdp065po06j11ip6ga2xsphr"
      >
        {/* onDoubleClick={()=>ZoomOut(bridge)} */}
        {/* maps the points of the data to the map: bridges, villiages, etc. */}
        {/* currently just showing bridge lats/longs */}
        {mapData.map(bridge => {
          return (
            <div key={bridge.id} onClick={() => ZoomIn(bridge)}>
              <Marker
                latitude={bridge.latitude}
                longitude={bridge.longitude}
                //onClick={props.clickMarker(bridge)}
              >
                <Tooltip title={bridge.site_name}>
                  {/* bridge marker placeholder for now, but I like it. */}
                  <UpCircleFilled
                    style={{ fontSize: '20px', color: 'green' }}
                  />
                </Tooltip>

                {/* this will be the bridge marker, need to upload svg for bridge icon to stylemaker on mapbox./or do it locally here */}
              </Marker>
            </div>
          );
        })}
      </ReactMapGl>
    </div>
  );
}

export default Mapbox;
