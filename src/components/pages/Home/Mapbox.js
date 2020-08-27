import React from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import { EnvironmentOutlined, EnvironmentFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useSelector } from 'react-redux';
import pinMarker from './assets/pinMarker.png';
// import InfoDrawer from './InfoDrawer';

function Mapbox({ viewport, setViewport, theme, ZoomIn, changeChecked }) {
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);

  const themeChanger = () => {
    if (
      localStorage.getItem('mapStyle') ===
      'mapbox://styles/jameslcarpino/ckebr24rw1fs91an1h6e52vij'
    ) {
      return (
        // <EnvironmentFilled style={{ fontSize: '20px', color: '#05004F' }} />

        <img src={pinMarker} alt="marker"></img>
      );
    } else {
      return <EnvironmentFilled style={{ fontSize: '20px', color: 'brown' }} />;
    }
  };

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
        {bridgeData.map(bridge => {
          return (
            <div key={bridge.id} onClick={() => ZoomIn(bridge)}>
              <Marker
                latitude={bridge.latitude}
                longitude={bridge.longitude}
                //onClick={clickMarker(bridge)}
              >
                <Tooltip title={bridge.name}>{themeChanger()}</Tooltip>
              </Marker>
            </div>
          );
        })}
      </ReactMapGl>
    </div>
  );
}

export default Mapbox;
