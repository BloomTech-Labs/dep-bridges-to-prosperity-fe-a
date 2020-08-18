import React from 'react';
//import axios from 'axios';
import ReactMapGl, { Marker, FlyToInterpolator } from 'react-map-gl';
import { UpCircleFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';

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
    props.clickMarker(bridge);
  };

  const ZoomOut = () => {
    setViewport({
      viewport,
    });
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
        {props.mapData.map(bridge => {
          return (
            <div
              key={bridge.id}
              onClick={() => ZoomIn(bridge)}
              onClose={() => ZoomOut()}
            >
              <Marker
                latitude={bridge.latitude}
                longitude={bridge.longitude}
                //onClick={props.clickMarker(bridge)}
              >
                <Tooltip title={bridge.name}>
                  {/* bridge marker placeholder for now, but I like it. */}
                  <UpCircleFilled
                    style={{ fontSize: '20px', color: 'green' }}
                  />
                </Tooltip>
              </Marker>
            </div>
          );
        })}
      </ReactMapGl>
    </div>
  );
}

export default Mapbox;
