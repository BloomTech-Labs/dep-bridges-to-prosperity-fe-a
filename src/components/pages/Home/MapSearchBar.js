import { Input } from 'antd';
import React from 'react';
// import { searchLocation } from '../../../state/actions';
const { Search } = Input;

const MapSearchBar = () => {
  // const [searchVal, setSearchVal] = useState([]);
  //this will work to seet the terms for the search ::below::
  // const [searchTerms, setSearchTerms] = useState('');

  function onSearch(value) {
    console.log(value);
  }

  return (
    <div className="search-bar">
      <Search placeholder="search" onSearch={onSearch} />
    </div>
  );
};
export default MapSearchBar;
