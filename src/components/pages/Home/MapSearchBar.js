import { Input } from 'antd';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchBridge, getAllBridges } from '../../../state/actions';
// import { searchLocation } from '../../../state/actions';
const { Search } = Input;

const MapSearchBar = ({ searchData, setBridgesToggle }) => {
  // const [searchVal, setSearchVal] = useState([]);
  //this will work to seet the terms for the search ::below::
  // const [searchTerms, setSearchTerms] = useState('');
  // const { bridgeData } = useSelector(state => state.bridgeSitesReducer);
  const dispatch = useDispatch();

  function onSearch(bridge) {
    console.log('ONSEARCH,', bridge.target.value);
    console.log('searchData:', searchData);
    if (bridge.target.value !== '') {
      dispatch(searchBridge(bridge.target.value));
      bridge.target.value ? setBridgesToggle(true) : setBridgesToggle(false);
    } else {
      dispatch(getAllBridges());
    }

    dispatch(searchBridge(bridge.target.value));
    bridge.target.value ? setBridgesToggle(true) : setBridgesToggle(false);
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
