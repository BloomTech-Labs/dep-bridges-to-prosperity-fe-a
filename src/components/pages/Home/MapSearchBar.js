import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
const { Search } = Input;

const MapSearchBar = () => {
  const [searchVal, setSearchVal] = useState('Search');

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
