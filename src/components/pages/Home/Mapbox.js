import React, { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import { UpCircleFilled } from '@ant-design/icons';

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

function Mapbox() {
  //copy code from previous proj.
  const [viewport, setViewport] = useState({
    //this is bridge site 1 coordinates
    latitude: -2.42056,
    longitude: 28.9662,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });
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
            <Marker
              key={bridge.id}
              latitude={bridge.latitude}
              longitude={bridge.longitude}
            >
              {/* bridge marker placeholder for now, but I like it. */}
              <UpCircleFilled style={{ fontSize: '20px', color: 'green' }} />

              {/* this will be the bridge marker, need to upload svg for bridge icon to stylemaker on mapbox./or do it locally here */}
            </Marker>
          );
        })}
      </ReactMapGl>
    </div>
  );
}

export default Mapbox;
