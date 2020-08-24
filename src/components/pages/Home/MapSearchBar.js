import { Input } from 'antd';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchBridge, getAllBridges } from '../../../state/actions';
// import { searchLocation } from '../../../state/actions';
const { Search } = Input;

const MapSearchBar = ({ setBridgesToggle }) => {
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
