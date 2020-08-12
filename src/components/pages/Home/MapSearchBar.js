import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { searchLocation } from '../../../state/actions';
const { Search } = Input;

const MapSearchBar = () => {
  const [searchVal, setSearchVal] = useState([]);
  //this will work to seet the terms for the search ::below::
  const [searchTerms, setSearchTerms] = useState('');

  function onSearch(value) {
    console.log(value);
    setSearchVal(value);
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
      <Search placeholder="search" onSearch={onSearch} />
      <br />
    </>
  );
};
export default MapSearchBar;
