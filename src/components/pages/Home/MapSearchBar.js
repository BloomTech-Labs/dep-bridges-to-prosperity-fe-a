import { Input } from 'antd';
import filterIcon from './assets/filter-icon.svg';
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchBridge, paginateBridges } from '../../../state/actions';

const MapSearchBar = ({ setBridgesToggle }) => {
  const dispatch = useDispatch();

  function onSearch(bridge) {
    console.log('ONSEARCH,', bridge.target.value);
    if (bridge.target.value !== '') {
      dispatch(searchBridge(bridge.target.value));
      //logic to show data in menu
      bridge.target.value ? setBridgesToggle(true) : setBridgesToggle(false);
    } else {
      dispatch(paginateBridges());
      setBridgesToggle(false);
    }
  }

  return (
    <div className="search-cont">
      <Input.Search
        className="search-bar"
        placeholder="What bridge are you looking for?"
        onChange={onSearch}
        allowClear
      />
    </div>
  );
};
export default MapSearchBar;
