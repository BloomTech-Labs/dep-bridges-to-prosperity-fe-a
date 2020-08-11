import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
const { Search } = Input;

const MapSearchBar = () => {
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
      <Search
        placeholder=" search "
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <br />
    </>
  );
};
export default MapSearchBar;

// import { Input } from 'antd';
// import React from 'react';
// import ReactDOM from 'react';

// ReactDOM.render(<Input placeholder="Basic usage" />, mountNode);
