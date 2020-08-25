import { Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchBridge, getAllBridges } from '../../../state/actions';
import { FlyToInterpolator } from 'react-map-gl';
// import { searchLocation } from '../../../state/actions';
const { Search } = Input;

const MapSearchBar = ({ setBridgesToggle, setViewport, originalView }) => {
  const dispatch = useDispatch();

  function onSearch(bridge) {
    console.log('ONSEARCH,', bridge.target.value);
    // console.log('searchData:', searchData);
    if (bridge.target.value !== '') {
      dispatch(searchBridge(bridge.target.value));
      bridge.target.value ? setBridgesToggle(true) : setBridgesToggle(false);
    } else {
      dispatch(getAllBridges());
      setBridgesToggle(false);
      // setViewport({
      //   ...originalView,
      //   transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
      //   transitionDuration: 'auto',
      // });
    }
    // dispatch(searchBridge(bridge.target.value));
    // bridge.target.value ? setBridgesToggle(true) : setBridgesToggle(false);
  }

  return (
    <div className="search-bar">
      <Search
        placeholder="search"
        onChange={onSearch}

        // onKeyDown={e => {
        //   if (e.keyCode === 8) return onSearch();
        // }}
      />
    </div>
  );
};
export default MapSearchBar;
