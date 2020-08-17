import { Input } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { searchLocation } from '../../../state/actions';
const { Search } = Input;

const MapSearchBar = props => {
  const [searchResults, setSearchResults] = useState([]);
  //this will work to seet the terms for the search ::below::
  const [searchTerm, setSearchTerm] = useState('');

  function onSearch(event) {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    // search(event.target.value, props.mapData);
  }

  useEffect(() => {
    const results = props.mapData.filter(info =>
      info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [props.mapData, searchTerm]);

  useEffect(() => {
    searchLocation();
  }, []);

  return (
    <>
      <Search value={searchTerm} placeholder="search" onChange={onSearch} />

      <div>
        {searchResults.map(item => {
          console.log('search,', item);
          return (
            <div style={{ backgroundColor: 'black', color: 'white' }}>
              <h2>Site: {item.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MapSearchBar;
