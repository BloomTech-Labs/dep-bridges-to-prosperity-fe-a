import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { searchLocation } from '../../../state/actions';
const { Search } = Input;

const MapSearchBar = props => {
  const [searchVal, setSearchVal] = useState([]);
  //this will work to seet the terms for the search ::below::
  const [searchTerms, setSearchTerms] = useState('');

  function onSearch(event) {
    event.preventDefault();
    console.log(event.target.value);
    setSearchVal(event.target.value);
    search(event.target.value, props.mapData);
  }

  useEffect(() => {
    const results = props.mapData.filter(info =>
      info.site_name.toLowerCase().includes(searchTerms.toLowerCase())
    );
    setSearchVal(results);
  }, [searchTerms]);

  //
  function search(searchTerms, objects) {
    var results = [];

    for (var i = 0; i < props.mapData.length; i++) {
      for (const key in objects[i]) {
        if (
          objects[i][key]
            .toString()
            .toLowerCase()
            .indexOf(searchTerms.toLowerCase()) !== -1
        ) {
          results.push(objects[i]);
          continue;
        }
      }
    }
    console.log('inside searchFun', results);
    setSearchVal(results);
  }

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  return (
    <>
      <Search placeholder="search" onChange={onSearch} />

      <div></div>
    </>
  );
};
export default MapSearchBar;
