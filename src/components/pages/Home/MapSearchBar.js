import { Input } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchBridge } from '../../../state/actions';
// import { searchLocation } from '../../../state/actions';
const { Search } = Input;

const MapSearchBar = () => {
  // const [searchVal, setSearchVal] = useState([]);
  //this will work to seet the terms for the search ::below::
  // const [searchTerms, setSearchTerms] = useState('');
  const { bridgeData } = useSelector(state => state.bridgeSitesReducer);
  const dispatch = useDispatch();

  function onSearch(bridge) {
    dispatch(searchBridge(bridge.target.value));

    console.log('ONSEARCH,', bridge.target.value);
  }

  return (
    <div className="search-bar">
      <Search placeholder="search" onChange={onSearch} />
    </div>
  );
};
export default MapSearchBar;
