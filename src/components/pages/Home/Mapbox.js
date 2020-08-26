import React from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useSelector } from 'react-redux';
// import InfoDrawer from './InfoDrawer';

function Mapbox({ viewport, setViewport, theme, ZoomIn, toggleMarkerColor }) {
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);

  return (
    <div>
      {/* render map */}
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          //allows map to be dynamic and move through useState -> make this work through redux
          setViewport(viewport);
        }}
        mapStyle={theme}
      >
        {/* maps the points of the data to the map: bridges, villiages, etc. */}
        {/* currently just showing bridge lats/longs */}
        {bridgeData.map(bridge => {
          return (
            <div key={bridge.id} onClick={() => ZoomIn(bridge)}>
              (
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
              )
            </div>
          );
        })}
      </ReactMapGl>
    </div>
  );
}

export default Mapbox;
