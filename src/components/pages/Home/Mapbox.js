import React from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useSelector } from 'react-redux';
// import InfoDrawer from './InfoDrawer';

function Mapbox({ clickMarker, viewport, setViewport, theme, ZoomIn }) {
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);
  //copy code from previous proj.
  console.log('mapStyle', localStorage.getItem('mapStyle'));
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
        mapStyle={
          localStorage.getItem('mapStyle')
            ? localStorage.getItem('mapStyle')
            : 'mapbox://styles/jameslcarpino/ckdp065po06j11ip6ga2xsphr'
        }
      >
        {/* maps the points of the data to the map: bridges, villiages, etc. */}
        {/* currently just showing bridge lats/longs */}
        {bridgeData.map(bridge => {
          return (
            <div key={bridge.id} onClick={() => ZoomIn(bridge)}>
              <Marker
                latitude={bridge.latitude}
                longitude={bridge.longitude}
                //onClick={clickMarker(bridge)}
              >
                <Tooltip title={bridge.name}>
                  {/* bridge marker placeholder for now, but I like it. */}
                  <EnvironmentOutlined
                    style={{ fontSize: '20px', color: '#009149' }}
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
