import { Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchBridge, getAllBridges } from '../../../state/actions';

const { Search } = Input;

const MapSearchBar = ({ setBridgesToggle }) => {
  const dispatch = useDispatch();

  function onSearch(bridge) {
    console.log('ONSEARCH,', bridge.target.value);
    if (bridge.target.value !== '') {
      dispatch(searchBridge(bridge.target.value));
      bridge.target.value ? setBridgesToggle(true) : setBridgesToggle(false);
    } else {
      dispatch(getAllBridges());
      setBridgesToggle(false);
    }
  }

  return (
    <div className="search-bar">
      <Search placeholder="search" onChange={onSearch} />
    </div>
  );
};
export default MapSearchBar;
