import React, { useState } from 'react';
import ReactMapGl, { Marker, FlyToInterpolator } from 'react-map-gl';
import { UpCircleFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';
// import InfoDrawer from './InfoDrawer';

//DUMMY DATA TO BE DELETED:
let mapData = [
  {
    id: 1,
    site_name: 'Buzi',
    proj_stage: 'rejected',
    latitude: -2.42056,
    longitude: 28.9662,
  },
  {
    id: 2,
    site_name: 'Kamigisha',
    proj_stage: 'rejected',
    latitude: -2.42486,
    longitude: 28.95726,
  },
  {
    id: 3,
    site_name: 'Nyarubande',
    proj_stage: 'rejected',
    latitude: -1.65595,
    longitude: 30.07884,
  },
];

function Mapbox(props) {
  //copy code from previous proj.
  const [viewport, setViewport] = useState({
    //this is bridge site 1 coordinates
    latitude: -2.42056,
    longitude: 28.9662,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });

  const ZoomIn = bridge => {
    setViewport({
      latitude: bridge.latitude,
      longitude: bridge.longitude,
      width: '100%',
      height: '100%',
      zoom: 15,
      transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
      transitionDuration: 'auto',
    });
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
